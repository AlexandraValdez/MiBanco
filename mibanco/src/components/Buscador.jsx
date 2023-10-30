import { useState, useEffect } from "react";
import Agencias from "../assets/Agencias.svg";
import Agentes from "../assets/Agentes.svg";
import Cajeros from "../assets/Cajeros.svg";
import agencias from './../../agencias.json';
import agentes from './../../agentes.json';


const Buscador = () => {
  // const [svgColor, setSvgColor] = useState("#BABABA"); // Color inicial del SVG
  const [tipo, setTipo] = useState("AGENCIA"); // Color inicial del SVG
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const [informacionBase, setInformacionBase] = useState([]); // Estado para almacenar las agencias
  // const [cajeros, setCajeros] = useState([]);

  const normalizarAgente = (agente) => {
    // console.log(agente)
    return {
      distrito: '',
      nombre: agente['Nombre del Comercio'],
      direccion: agente['Direccion'],
      tipo: 'AGENTE'
    }
  }

  const normalizarAgencia = (agencia) => {
    console.log(agencia)
    return {
      distrito: agencia.DISTRITO,
      nombre: '',
      direccion: agencia.DIRECCION,
      tipo: 'AGENCIA'
    }
  }


  // const MIBANCO_API_URL = './agencias.json';
  // const MIBANCO_API_URLAgentes = 'https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgentesAKNGet?q=0';

  useEffect(() => {
    // fetch(MIBANCO_API_URL)
    //   .then(response => response.json())
    //   .then(data => {
    //     setInformacionBase([...informacionBase, ...data.map(normalizarAgencia)])
    //   })
    //   .catch(error => console.error('Error:', error));
    console.log('agencias', agencias)
    console.log('agentes', agentes)
    const agentesNormalizados = agentes.map(normalizarAgente)
    const agenciasNormalizadas = agencias.map(normalizarAgencia)
    setInformacionBase([...agentesNormalizados, ...agenciasNormalizadas])
    // fetch(MIBANCO_API_URLAgentes)
    //   .then(response => response.json())
    //   .then(dataAgentes => {
    //     setInformacionBase([...informacionBase, ...dataAgentes.data.map(normalizarAgente)]);
    //     console.log('informacionBase 2', informacionBase)
    //   })
    //   .catch(error => console.error('Error:', error));
    // console.log('BASE', informacionBase)
    cambiarTipo('AGENCIA')
  }, []);

  // const MIBANCO_API_URLAgentes = './agentes.json';



  const handleSearch = (event) => {
    console.log(event)
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    setSearchResults(informacionBase.filter(direccion => (direccion.tipo === tipo)).filter((direccion) => {
      if (direccion.nombre === undefined || direccion.distrito === undefined || direccion.direccion === undefined) {
        return false
      }
      return direccion.distrito.toLowerCase().includes(searchTerm) || direccion.nombre.toLowerCase().includes(searchTerm) || direccion.distrito.toLowerCase().includes(searchTerm)
    }));
  };

  const cambiarTipo = (tipo) => {
    console.log(tipo)
    setTipo(tipo)
    const filtratos = informacionBase.filter(direccion => (direccion.tipo === tipo))
    console.log(filtratos)
    setSearchResults(filtratos);
    setSearchTerm('');
  }

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
        <div className={tipo === 'AGENCIA' ? 'selected' : '' + " filtro-categoria filtro-agencias"} onClick={() => cambiarTipo("AGENCIA")}>
          <img src={Agencias} className="pe-1" /*style={{ fill: svgColor }}*/ alt="Agencias" />
          Agencias
        </div>
        <div className={tipo === 'AGENTE' ? 'selected' : '' + " filtro-categoria filtro-agentes"} onClick={() => cambiarTipo("AGENTE")}>
          <img src={Agentes} className="pe-1" alt="Agentes" />
          Agentes
        </div>
        <div className={tipo === 'CAJERO' ? 'selected' : '' + " filtro-categoria filtro-cajeros"} onClick={() => cambiarTipo("CAJERO")}>
          <img src={Cajeros} className="pe-1"></img>
          Cajeros
        </div>
      </section>

      {/* Componente de resultados de busqueda */}
      <div className="search-results">
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => {
              return (
                <li key={index}>
                  {result.nombre && <p>Nombre: {result.nombre}</p>}
                  {result.distrito && <p>Distrito: {result.distrito}</p>}
                  <p>Dirección: {result.direccion}</p>
                </li>
              );
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
