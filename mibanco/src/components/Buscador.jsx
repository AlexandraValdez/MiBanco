import { useState, useEffect } from "react";
import Agencias from "../assets/Agencias.svg";
import Agentes from "../assets/Agentes.svg";
import Cajeros from "../assets/Cajeros.svg";


const Buscador = () => {
  const [svgColor, setSvgColor] = useState("#BABABA"); // Color inicial del SVG
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const [agencias, setAgencias] = useState([]); // Estado para almacenar las agencias

  const MIBANCO_API_URL = './agencias.json';

  useEffect(() => {
    fetch(MIBANCO_API_URL)
      .then(response => response.json())
      .then(data => {
        setAgencias(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Comprobar si agencias se ha cargado correctamente antes de filtrar
    if (!agencias) {
      return;
    }

    // Filtrar los resultados que coinciden con el término de búsqueda en el campo "distrito"
    const results = agencias.filter((agencia) => {
      return (
        agencia.DISTRITO &&
        agencia.DISTRITO.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchResults(results);
  };

  const handleSvgColorChange = () => {
    // Cambia el color del SVG cuando se hace clic en el div
    setSvgColor("#009640");
  };

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
        <div className="filtro-categoria filtro-agencias" onClick={handleSvgColorChange}>
          <img src={Agencias} className="pe-1" style={{ fill: svgColor }} alt="Agencias"/>
          Agencias
        </div>
        <div className="filtro-categoria filtro-agentes">
          <img src={Agentes} className="pe-1"></img>
          Agentes
        </div>
        <div className="filtro-categoria filtro-cajeros">
          <img src={Cajeros} className="pe-1"></img>
          Cajeros
        </div>
      </section>

      {/* Componente de resultados de busqueda */}
      {searchTerm !== "" && (
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <li key={index}>
                <p>Distrito: {result.DISTRITO}</p>
                <p>Dirección: {result.DIRECCION}</p>
              </li>
            ))
          ) : (
            <li>No se encontraron resultados</li>
          )}
        </ul>
      )}
    </article>
  );
};

export default Buscador;
