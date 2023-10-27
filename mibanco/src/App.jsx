import { useState } from 'react'
import GoogleMapReact from "./maps";
import markerImageAgencia from "./img/agencias.svg";
import markerImageAgentes from "./img/agentes.svg";
import markerImageCajeros from "./img/cajeros.svg";
import './App.css'
import Buscador from './components/Buscador';
import BannerApp from './components/BannerApp';
import Contactanos from "./components/Contactanos";
import Siguenos from "./components/Siguenos";
import Carousel from "./components/carrusel";
import Footer from "./components/footerfuncion";
import Header from "./components/Header";

function App() {
  const [markersAgentes, setMarkersAgentes] = useState([]);

// api.js
//const BCP_API_URL = 'https://www.viabcp.com/wcm/connect/resources/userstories/JSON/dataJSON_ubicanos_grupo1.json?subtype=json';
//const KASNET_API_URL = "https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgentesAKNGet?q=0";
const MIBANCO_API_URL = './agencias.json';

  fetch(MIBANCO_API_URL)
    .then(response => response.json())
    .then(data => {
        const marcadores = data.map(item => {
            return {
                ...item,
                image: markerImageAgentes
            };
        });
        setMarkersAgentes([marcadores[0].Y_LATITUD,marcadores[0].X_LONGITUD])
      //  console.log(marcadores[0].image); // Verás tu array lleno de datos del JSON
    })
    .catch(error => console.error('Error:', error));
  // -77,000444	-12,048099
  // let imagen= 'agencias'
  // markerImage={require(`./img/${imagen}.svg`)}
  // const markersAgentes = [
  //   { lat: -12.048, lng: -77.004, image:  markerImageAgentes},
  //   { lat: -12.049, lng: -77.001, image: markerImageAgentes },
  //   // { lat: -12.05, lng: -77.002, image: markerImageAgentes },
  //   // Agrega más marcadores aquí
  // ];
  const markersAgencias = [
     { lat: -12.05, lng: -77.002, image:  markerImageAgencia},
    // {lat: -12.10, lng: -77.010, image: markerImageAgencia },
 
    // Agrega más marcadores aquí
  ];


  return (
    <>
    < Header />
    <Buscador />
         <div className="App">
         <GoogleMapReact
          lat={-12.048099}
          lng={-77.000444}
         // markerImage={markerImageAgencia}
         markersAgentes={markersAgentes}
         markersAgencias={markersAgencias}
          //markerImage={agencias}
        />
      </div>
      <BannerApp />
      <Carousel />
      <Contactanos />
      <Siguenos />
    <Footer />
    
    </>
  )
}

export default App
