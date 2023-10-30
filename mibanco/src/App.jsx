// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import GoogleMapReact from "./maps";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import markerImageAgencia from "./img/agencias.svg";
import markerImageAgentes from "./img/agentes.svg";
import markerImageCajeros from "./img/cajeros.svg";
import "./App.css";
import Buscador from "./components/buscadorMapa";
import BannerApp from "./components/BannerApp";
import Contactanos from "./components/Contactanos";
import Siguenos from "./components/Siguenos";
import Carrusel from "./components/carrusel";

import Footer from "./components/footerfuncion";
import Header from "./components/Header";
import WazeLink from "./waze";
import { calcularDistancia } from "./calcula_distancia";

function App() {
  const [markersAgencias, setMarkersAgencias] = useState([]);
  const [markersAgentes, setMarkersAgentes] = useState([]);
  const [markersCajeros, setMarkersCajeros] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [latitudRef, setLatitudRef] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [longitudRef, setLongitudRef] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  //   Agencia = Mibanco
  //  Agentes = kasnet
  // Cajeros = bcp

  //const BCP_API_URL = 'https://www.viabcp.com/wcm/connect/resources/userstories/JSON/dataJSON_ubicanos_grupo1.json?subtype=json';
  const BCP_API_URL = "./bcp_api.json ";
  //const KASNET_API_URL = "https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgentesAKNGet?q=0";
  const KASNET_API_URL = "./agentes.json";
  const MIBANCO_API_URL = "./agencias.json";

  useEffect(() => {
    //######################################################33
    // Comprobar si el navegador admite la API de geolocalización
    // if ("geolocation" in navigator) {
    //   // Obtener la ubicación del usuario
    //   navigator.geolocation.getCurrentPosition(
    //     function (position) {
    //       const latitudRef = position.coords.latitude;
    //       const longitudRef = position.coords.longitude;

    //       // latitud y longitud
    //       // console.log("Latitud: " + latitude);
    //       // console.log("Longitud: " + longitude);

    //       // Actualiza los estados con las coordenadas
    //       setLatitudRef(latitudRef);
    //       setLongitudRef(longitudRef);
    //       setLoading(false); // Establecer el estado de carga en falso cuando se obtienen las coordenadas
    //     },

    //     function (error) {
    //       // En caso de error al obtener la ubicación
    //       console.error("Error al obtener la ubicación: " + error.message);
    //       setLoading(false); // Establecer el estado de carga en falso en caso de error
    //     }

    //   );
    // } else {
    //   // El navegador no admite la API de geolocalización
    //   console.error("El navegador no admite la geolocalización.");
    //   setLoading(false); // Establecer el estado de carga en falso en caso de falta de soporte
    // }
    //#####################################
    // "X_LONGITUD": -77.029317,
    // "Y_LATITUD": -12.030362

    // lat -8.819135133
    // lng  -77.460973087

    const latitudRef = -12.063285;
    const longitudRef = -77.097447;

    // Crear una matriz de promesas para todas las solicitudes fetch
    const fetchPromises = [
      fetch(MIBANCO_API_URL).then((response) => response.json()),
      fetch(KASNET_API_URL).then((response) => response.json()),
      fetch(BCP_API_URL).then((response) => response.json()),
    ];

    // Usar Promise.all para esperar a que todas las promesas se resuelvan
    Promise.all(fetchPromises)
      .then((responses) => {
        const [dataMibanco, dataKasnet, dataBcp] = responses;

        // Filtrar elementos nulos, indefinidos y no numéricos en marcadores de Mibanco
        const marcadoresMibanco = dataMibanco
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
            image: markerImageAgencia,
          }));
        //   console.log('Agencia',marcadoresMibanco);

        // Filtrar elementos nulos, indefinidos y no numéricos en marcadores de Kasnet
        const marcadoresKasnet = dataKasnet
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
            image: markerImageAgentes,
          }));

        // Filtrar elementos nulos, indefinidos y no numéricos en marcadores de BCP
        const marcadoresBcp = dataBcp
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
            image: markerImageCajeros,
          }));
        // Distancia máxima en kilómetros
        const distanciaMaxima = 2

        // Filtrar marcadores cercanos para cada tipo
        const marcadoresCercanosMibanco = marcadoresMibanco.filter(
          (marcador) => {
            const distancia = calcularDistancia(
              // lugarReferencia.lat,
              // lugarReferencia.lng,
              latitudRef,
              longitudRef,
              marcador.lat,
              marcador.lng
            );
            return distancia <= distanciaMaxima;
          }
        );

        const marcadoresCercanosKasnet = marcadoresKasnet.filter((marcador) => {
          const distancia = calcularDistancia(
            // lugarReferencia.lat,
            // lugarReferencia.lng,
            latitudRef,
            longitudRef,
            marcador.lat,
            marcador.lng
          );
          return distancia <= distanciaMaxima;
        });

        const marcadoresCercanosBcp = marcadoresBcp.filter((marcador) => {
          const distancia = calcularDistancia(
            // lugarReferencia.lat,
            // lugarReferencia.lng,
            latitudRef,
            longitudRef,

            marcador.lat,
            marcador.lng
          );
          return distancia <= distanciaMaxima;
        });

        // Configurar los estados una vez que todos los datos estén disponibles
        setMarkersAgencias(marcadoresCercanosMibanco);
        setMarkersAgentes(marcadoresCercanosKasnet);
        setMarkersCajeros(marcadoresCercanosBcp);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  //console.log("markersAgencias", markersAgencias);

  // eslint-disable-next-line no-unused-vars
  const markersAgenciasFijo = [
    { lat: -12.05, lng: -77.002, image: markerImageAgencia },
    // Agrega más marcadores aquí
  ];

  return (
    <>
      <div className="App">

        <Header />
        <Buscador />
        <div className="google-map-container">
          <GoogleMapReact
            markersAgentes={markersAgentes}
            markersAgencias={markersAgencias}
            markersCajeros={markersCajeros}
          />
          <WazeLink />
          <BannerApp />
          <Carrusel />
          <Contactanos />
          <Siguenos />


          <Footer />
        </div>


      </div>
    </>
  );
}

export default App;
