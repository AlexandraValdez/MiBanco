import { useState } from "react";
import Agencias from "../assets/Agencias.svg";
import Agentes from "../assets/Agentes.svg";
import Cajeros from "../assets/Cajeros.svg";

const Buscador = () => {
  const [svgColor, setSvgColor] = useState("#BABABA"); // Color inicial del SVG

  const handleSvgColorChange = () => {
    // Cambia el color del SVG cuando se hace clic en el div
    setSvgColor("#009640");
  };

  return (
    <article className="buscador-container">
      <section className="icon-input">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Ingresa la calle o distrito" className="input-buscador" autoComplete="off"></input>
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
    </article>
  );
};

export default Buscador;
