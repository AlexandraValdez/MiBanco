import { useState, useEffect } from "react";
import Agencias from "../assets/Agencias.svg";
import Agentes from "../assets/Agentes.svg";
import Cajeros from "../assets/Cajeros.svg";
import { calcularDistancia } from "../calcula_distancia";
import '../styles/buscadorMapa.css';

const Buscador = () => {
  const [category, setCategory] = useState("agencias");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [agencias, setAgencias] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [cajeros, setCajeros] = useState([]);
  const [latitudRef, setLatitudRef] = useState(null);
  const [longitudRef, setLongitudRef] = useState(null);
  const [loading, setLoading] = useState(true);

  const BCP_API_URL = "/bcp_api.json";
  const KASNET_API_URL = "/agentes.json";
  const MIBANCO_API_URL = "/agencias.json";

  useEffect(() => {
    const latitudRef = -12.115437;
    const longitudRef = -77.018681;
    //-12.115437, -77.018681



    const fetchPromises = [
      fetch(MIBANCO_API_URL).then((response) => response.json()),
      fetch(KASNET_API_URL).then((response) => response.json()),
      fetch(BCP_API_URL).then((response) => response.json()),
    ];

    Promise.all(fetchPromises)
      .then((responses) => {
        const [dataMibanco, dataKasnet, dataBcp] = responses;

        const agenciasMibanco = dataMibanco
          .filter(
            (item) =>
              item.Y_LATITUD !== null &&
              item.X_LONGITUD !== null &&
              !isNaN(item.Y_LATITUD) &&
              !isNaN(item.X_LONGITUD)
          )
          .map((item) => ({
            lat: parseFloat(item.Y_LATITUD),
            lng: parseFloat(item.X_LONGITUD),
            distrito: item.DISTRITO,
            direccion: item.DIRECCION,
            searchable: `${item.DISTRITO} ${item.DIRECCION}`
          }));

        const agentesKasnet = dataKasnet
          .filter(
            (item) =>
              item.__EMPTY_16 !== null &&
              item.__EMPTY_17 !== null &&
              !isNaN(item.__EMPTY_16) &&
              !isNaN(item.__EMPTY_17)
          )
          .map((item) => ({
            lat: parseFloat(item.__EMPTY_16),
            lng: parseFloat(item.__EMPTY_17),
            distrito: item.__EMPTY_7,
            direccion: item.__EMPTY_9,
            searchable: `${item.__EMPTY_7} ${item.__EMPTY_9}`
          }));

        const cajerosBcp = dataBcp
          .filter(
            (item) =>
              item.Latitud !== null &&
              item.longitud !== null &&
              !isNaN(item.Latitud) &&
              !isNaN(item.longitud)
          )
          .map((item) => ({
            lat: parseFloat(item.Latitud),
            lng: parseFloat(item.longitud),
            distrito: item.Nombre,
            direccion: item.Direccion,
            searchable: `${item.Nombre} ${item.Direccion}`
          }));

        const distanciaMaxima = 50;

        const agenciasCercanasMibanco = agenciasMibanco.filter(
          (marcador) => {
            const distancia = calcularDistancia(
              latitudRef,
              longitudRef,
              marcador.lat,
              marcador.lng
            );
            return distancia <= distanciaMaxima;
          }
        );

        const agentesCercanosKasnet = agentesKasnet.filter((marcador) => {
          const distancia = calcularDistancia(
            latitudRef,
            longitudRef,
            marcador.lat,
            marcador.lng
          );
          return distancia <= distanciaMaxima;
        });

        const cajerosCercanosBcp = cajerosBcp.filter((marcador) => {
          const distancia = calcularDistancia(
            latitudRef,
            longitudRef,
            marcador.lat,
            marcador.lng
          );
          return distancia <= distanciaMaxima;
        });

        setAgencias(agenciasCercanasMibanco);
        setAgentes(agentesCercanosKasnet);
        setCajeros(cajerosCercanosBcp);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (!agencias) {
      return;
    }

    let results = [];

    if (category === 'agencias') {
      results = agencias.filter((agencia) =>
        agencia.searchable &&
        agencia.searchable.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (category === 'agentes') {
      results = agentes.filter((agente) =>
        agente.searchable &&
        agente.searchable.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (category === 'cajeros') {
      results = cajeros.filter((cajero) =>
        cajero.searchable &&
        cajero.searchable.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSearchResults(results);
  };

  return (
    <article className="buscador-container">
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <>
          <section className="icon-input">
            <i className="bi bi-search"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Ingresa el distrito o dirección"
              className="input-buscador"
              autoComplete="off"
            ></input>
          </section>
          <section className="text-content">
            <p className="busca pe-1 pb-2" style={{ color: '#4A4A4A', display: 'inline' }}>
              Busca el
            </p>
            <p className="cercano" style={{ color: '#f2a000', display: 'inline' }}>
              más cercano a tí
            </p>
          </section>

          <section className="filtro-container">
            <div className={`filtro-categoria ${category === "todo" ? "selected" : ""}`} onClick={() => setCategory("todo")}>
              <span className="texto-filtro">Todo</span>
              <div className="raya-filtro"></div>
            </div>
            <div className={category === 'agencias' ? 'selected' : '' + " filtro-categoria filtro-agencias"} onClick={() => setCategory("agencias")}>
              <img src={Agencias} className="pe-1" alt="Agencias" />
              Agencias
            </div>
            <div className={category === 'agentes' ? 'selected' : '' + " filtro-categoria filtro-agentes"} onClick={() => setCategory("agentes")}>
              <img src={Agentes} className="pe-1" alt="Agentes" />
              Agentes
            </div>
            <div className={category === 'cajeros' ? 'selected' : '' + " filtro-categoria filtro-cajeros"} onClick={() => setCategory("cajeros")}>
              <img src={Cajeros} className="pe-1" alt="Cajeros" />
              Cajeros
            </div>
          </section>

          <div className="search-results">
            {searchTerm !== "" && (
              <ul>
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <li key={index}>
                      <p>Distrito: {result.distrito}</p>
                      <p>Dirección: {result.direccion}</p>
                    </li>
                  ))
                ) : (
                  <li>No se encontraron resultados</li>
                )}
              </ul>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default Buscador;
