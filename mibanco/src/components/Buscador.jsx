import { useState, useEffect } from "react";
import Agencias from "../assets/Agencias.svg";
import Agentes from "../assets/Agentes.svg";
import Cajeros from "../assets/Cajeros.svg";


const Buscador = () => {
  // const [svgColor, setSvgColor] = useState("#BABABA"); // Color inicial del SVG
  const [category, setCategory] = useState("agencias"); // Color inicial del SVG
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const [agencias, setAgencias] = useState([]); // Estado para almacenar las agencias
  const [agentes, setAgentes] = useState([]);
  // const [cajeros, setCajeros] = useState([]);


  const MIBANCO_API_URL = './agencias.json';
  const MIBANCO_API_URLAgentes = 'https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgentesAKNGet?q=0';

  useEffect(() => {
    fetch(MIBANCO_API_URL)
      .then(response => response.json())
      .then(data => {
        setAgencias(data);
      })
      .catch(error => console.error('Error:', error));

    fetch(MIBANCO_API_URLAgentes)
      .then(response => response.json())
      .then(dataAgentes => {
        setAgentes(dataAgentes.data); console.log("agente", dataAgentes.data)
      })
      .catch(error => console.error('Error:', error));


  }, []);

  // const MIBANCO_API_URLAgentes = './agentes.json';



  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    let results = [];

    // Filtrar agencias
    if (agencias) {
      results = results.concat(agencias.filter((agencia) => {
        return (
          agencia.DISTRITO &&
          agencia.DISTRITO.toLowerCase().includes(searchTerm)
        );
      }));
    }

    // Filtrar agentes (este es un ejemplo genérico, ya que no proporcionaste la estructura exacta de "agentes")
    if (agentes) {
      results = results.concat(agentes.filter((agente) => {
        return (
          agente.NOMBRE &&
          agente.DIRECCION.toLowerCase().includes(searchTerm)
        );
      }));
    }

    setSearchResults(results);
    console.log("aquiiii", setSearchResults)
  };

  // const handleSvgColorChange = () => {
  //   // Cambia el color del SVG cuando se hace clic en el div
  //   setSvgColor("#009640");
  // };


  return (
    <article className="buscador-container">
      <section className="icon-input">
        <i className="bi bi-search"></i>
        <input type="text" value={searchTerm}
          onChange={handleSearch} placeholder="Ingresa la calle o distrito" className="input-buscador" autoComplete="off"></input>
      </section>
      <section className="text-content">
        <p className="busca pe-1 pb-2" style={{ color: '#4A4A4A', display: 'inline' }}>Busca el</p><p className="cercano" style={{ color: '#f2a000', display: 'inline' }}>más cercano a tí</p>
      </section>

      <section className="filtro-container">
        <div className="filtro-categoria filtro-todo">
          <span className="texto-filtro">Todo</span>
          <div className="raya-filtro"></div>
        </div>
        <div className={category === 'agencias' ? 'selected' : '' + " filtro-categoria filtro-agencias"} onClick={() => setCategory("agencias")}>
          <img src={Agencias} className="pe-1" /*style={{ fill: svgColor }}*/ alt="Agencias" />
          Agencias
        </div>
        <div className={category === 'agentes' ? 'selected' : '' + " filtro-categoria filtro-agentes"} onClick={() => setCategory("agentes")}>
          <img src={Agentes} className="pe-1" alt="Agentes" />
          Agentes
        </div>
        <div className={category === 'cajeros' ? 'selected' : '' + " filtro-categoria filtro-cajeros"} onClick={() => setCategory("cajeros")}>
          <img src={Cajeros} className="pe-1"></img>
          Cajeros
        </div>
      </section>

      {/* Componente de resultados de busqueda */}
      <div className="search-results">
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => {
              // Renderizado para Agencias
              if (category === "agencias") {
                return (
                  <li key={index}>
                    <p>Distrito: {result.DISTRITO}</p>
                    <p>Dirección: {result.DIRECCION}</p>
                  </li>
                );
              }

              // Renderizado para Agentes (ADAPTAR según la estructura real de "agentes")
              if (category === "agentes") {
                return (
                  <li key={index}>
                    {/* <p>Nombre: {result.NOMBRE}</p> CAMBIAR si el campo es diferente */}
                    <p>Dirección: {result.DIRECCION}</p> {/* CAMBIAR si el campo es diferente */}
                  </li>
                );
              }

              // Si se añade la funcionalidad de cajeros, puedes agregar un bloque similar aquí

              return null; // Para otras categorías no especificadas o en caso de que no coincida con las anteriores
            })
          ) : (
            <li>No se encontraron resultados</li>
          )}
        </ul>
      </div>
      ;
    </article>
  );
};

export default Buscador;
