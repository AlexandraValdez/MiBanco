// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';


const Footer = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(activeButton === id ? null : id);
  };

  const handleLogoClick = (url) => {
    window.location.href = url;
  };



  return (
    <div className="footer">
      <button onClick={() => handleButtonClick(1)} className="footer-btn">
        Acerca de Mibanco <span className="arrow"></span>
      </button>
      {activeButton === 1 && <div className="footer-content">Información sobre MiBanco...</div>}

      <button onClick={() => handleButtonClick(2)} className="footer-btn">
        Para tu negocio <span className="arrow"></span>
      </button>
      {activeButton === 2 && <div className="footer-content">Información para tu negocio...</div>}

      <button onClick={() => handleButtonClick(3)} className="footer-btn">
        Para ti <span className="arrow"></span>
      </button>
      {activeButton === 3 && <div className="footer-content">Información para ti...</div>}

      <div className="logos-container">
        <button className="logo-item" onClick={() => handleLogoClick('URL_DEL_LOGO_1')}>
          <img src="./src/img/hablemosMásSiempre.png" alt="Hablamos más siempre" />
        </button>
        <button className="logo-item" onClick={() => handleLogoClick('URL_DEL_LOGO_2')}>
          <img src="./src/img/libroReclamaciones.png" alt="Libro de Reclamaciones" />
        </button>
        <button className="logo-item" onClick={() => handleLogoClick('URL_DEL_LOGO_3')}>
          <img src="./src/img/denuncias.png" alt="Sistema de Denuncias" />
        </button>
      </div>

      <div className="banner-footer">
        <img src="./src/img/mibanco-LogoBlanco.png" alt="MiBancoLogo" className="banner-logo" />
        <div className="banner-text">
          <p>BANCO DE LA MICROEMPRESA S.A.</p>
          <p>RUC 20382036655</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
