import { useState, useEffect } from 'react';
import GoogleMapReact from "./maps";
import markerImageAgencia from "./img/agencias.svg";
import markerImageAgentes from "./img/agentes.svg";
import markerImageCajeros from "./img/cajeros.svg";
import './App.css';
import Buscador from './components/Buscador';
import BannerApp from './components/BannerApp';
import Contactanos from "./components/Contactanos";
import Siguenos from "./components/Siguenos";
import Carousel from "./components/carrusel";
import Footer from "./components/footerfuncion";
import Header from "./components/Header";
import WazeLink from "./waze";

function App() {
  const [markersAgencias, setMarkersAgencias] = useState([]);
  const [markersAgentes, setMarkersAgentes] = useState([]);
  const [markersCajeros, setMarkersCajeros] = useState([]);
//   Agencia = Mibanco
//  Agentes = kasnet
// Cajeros = bcp


  //const BCP_API_URL = 'https://www.viabcp.com/wcm/connect/resources/userstories/JSON/dataJSON_ubicanos_grupo1.json?subtype=json';
  const BCP_API_URL ='./bcp_api.json ';
  //const KASNET_API_URL = "https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgentesAKNGet?q=0";
  const KASNET_API_URL ='./agentes.json';
  const MIBANCO_API_URL = './agencias.json';

  useEffect(() => {
    // Crear una matriz de promesas para todas las solicitudes fetch
    const fetchPromises = [
      fetch(MIBANCO_API_URL).then(response => response.json()),
      fetch(KASNET_API_URL).then(response => response.json()),
      fetch(BCP_API_URL).then(response => response.json()),
    ];
  
    // Usar Promise.all para esperar a que todas las promesas se resuelvan
    Promise.all(fetchPromises)
      .then(responses => {
        const [dataMibanco, dataKasnet, dataBcp] = responses;
   // Filtrar elementos nulos, indefinidos y no numéricos en marcadores de Mibanco
   const marcadoresMibanco = dataMibanco
   .filter(item => item.Y_LATITUD !== null && item.X_LONGITUD !== null && !isNaN(item.Y_LATITUD) && !isNaN(item.X_LONGITUD))
   .map(item => ({
     lat: parseFloat(item.Y_LATITUD),
     lng: parseFloat(item.X_LONGITUD),
     image: markerImageAgencia,
   }));

 // Filtrar elementos nulos, indefinidos y no numéricos en marcadores de Kasnet
 const marcadoresKasnet = dataKasnet
   .filter(item => item.__EMPTY_16 !== null && item.__EMPTY_17 !== null && !isNaN(item.__EMPTY_16) && !isNaN(item.__EMPTY_17))
   .map(item => ({
     lat: parseFloat(item.__EMPTY_16),
     lng: parseFloat(item.__EMPTY_17),
     image: markerImageAgentes,
   }));

 // Filtrar elementos nulos, indefinidos y no numéricos en marcadores de BCP
 const marcadoresBcp = dataBcp
   .filter(item => item.Latitud !== null && item.longitud !== null && !isNaN(item.Latitud) && !isNaN(item.longitud))
   .map(item => ({
     lat: parseFloat(item.Latitud),
     lng: parseFloat(item.longitud),
     image: markerImageCajeros,
   }));
  
        // Configurar los estados una vez que todos los datos estén disponibles
        setMarkersAgencias(marcadoresMibanco);
        setMarkersAgentes(marcadoresKasnet);
      //  console.log('MarkersAgentes', markersAgentes);
        setMarkersCajeros(marcadoresBcp);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  

  const markersAgenciasFijo = [
    { lat: -12.05, lng: -77.002, image: markerImageAgencia },
    // Agrega más marcadores aquí
  ];

  return (
    <>
      <div className="App">
        <GoogleMapReact
          lat={-12.048099}
          lng={-77.000444}
          markersAgentes={markersAgentes}
          markersAgencias={markersAgencias}
          markersCajeros={markersCajeros}
          
        />
        < WazeLink />
      </div>
    </>
  );
}

export default App;
