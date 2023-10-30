// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../styles/footer.css';
import hablemos from "../img/hablemosMásSiempre.png";
import libro from "../img/libroReclamaciones.png";
import denuncias from "../img/denuncias.png";
import logoBlanco from "../img/mibanco-LogoBlanco.png";

import '../styles/footer.css';

const Footer = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(activeButton === id ? null : id);
  };

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="footer">
      <button onClick={() => handleButtonClick(1)} className="footer-btn">
        Acerca de Mibanco <span className="arrow"></span>
      </button>
      {activeButton === 1 && (
        <div className="footer-content">
          <a onClick={() => handleLinkClick('URL_ENLACE_1')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Firma Electronica
          </a>
          <a onClick={() => handleLinkClick('URL_ENLACE_2')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Historial de la unión
          </a>
          <a onClick={() => handleLinkClick('URL_ENLACE_1')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Edyficar Perú S.A
          </a>
        </div>
      )}

      <button onClick={() => handleButtonClick(2)} className="footer-btn">
        Para tu negocio <span className="arrow"></span>
      </button>
      {activeButton === 2 && (
        <div className="footer-content">
          <a onClick={() => handleLinkClick('URL_ENLACE_1')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Locales comerciales
          </a>
          <a onClick={() => handleLinkClick('URL_ENLACE_2')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Ahorros negocios
          </a>
          <a onClick={() => handleLinkClick('URL_ENLACE_1')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Seguro Negocio protegido
          </a>
        </div>
      )}

      <button onClick={() => handleButtonClick(3)} className="footer-btn">
        Para ti <span className="arrow"></span>
      </button>
      {activeButton === 3 && (
        <div className="footer-content">
          <a onClick={() => handleLinkClick('URL_ENLACE_1')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Consumo personal
          </a>
          <a onClick={() => handleLinkClick('URL_ENLACE_2')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            Full Ahorro
          </a>
          <a onClick={() => handleLinkClick('URL_ENLACE_1')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', display: 'block', padding: '5px 0' }}>
            SOAT
          </a>
        </div>
      )}

      <div className="logos-container">
        <button className="logo-item" onClick={() => handleLinkClick('URL_DEL_LOGO_1')}>
          <img src={hablemos} alt="Hablamos más siempre" />
        </button>
        <button className="logo-item" onClick={() => handleLinkClick('URL_DEL_LOGO_2')}>
          <img src={libro} alt="Libro de Reclamaciones" />
        </button>
        <button className="logo-item" onClick={() => handleLinkClick('URL_DEL_LOGO_3')}>
          <img src={denuncias} alt="Sistema de Denuncias" />
        </button>
      </div>

      <div className="banner-footer">
        <img src={logoBlanco} alt="MiBancoLogo" className="banner-logo" />
        <div className="banner-text">
          <p>BANCO DE LA MICROEMPRESA S.A.</p>
          <p>RUC 20382036655</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
