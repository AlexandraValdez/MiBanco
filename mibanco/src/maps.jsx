/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import markerImageAgencia from "./img/agencias.svg";
import markerImageAgentes from "./img/agentes.svg";
import markerImageCajeros from "./img/cajeros.svg";

//https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgenteUbiGet?q=-11.896579686970234%26-77.04242582549773

let CustomMarker = ({ imageSrc }) => (
  <div style={{ width: "30px", height: "30px" }}>
    <img
      src={imageSrc}
      alt="Marker"
      style={{ width: "100%", height: "100%" }}
    />
  </div>
);

function Maps({ markersAgentes, markersAgencias, markersCajeros }) {
  //console.log('Agencia-maps',markersAgencias);
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Comprobar si el navegador admite la API de geolocalización
    if ("geolocation" in navigator) {
      // Obtener la ubicación del usuario
      navigator.geolocation.watchPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // latitud y longitud
          // console.log("Latitud: " + latitude);
          // console.log("Longitud: " + longitude);

          // Actualiza los estados con las coordenadas
          setLatitud(latitude);
          setLongitud(longitude);
          setLoading(false); // Establecer el estado de carga en falso cuando se obtienen las coordenadas
        },
        function (error) {
          // En caso de error al obtener la ubicación
          console.error("Error al obtener la ubicación: " + error.message);
          setLoading(false); // Establecer el estado de carga en falso en caso de error
        }
      );
    } else {
      // El navegador no admite la API de geolocalización
      console.error("El navegador no admite la geolocalización.");
      setLoading(false); // Establecer el estado de carga en falso en caso de falta de soporte
    }
  }, []);

  // const latFija = -12.030362;
  // const lngFija = -77.029317;
  const latFija = -12.063285;
  const lngFija =  -77.097447;


  const defaultProps = {
    center: {
    //  lat: latitud, // Usa latitud obtenida  -33.4102528
   //   lng: longitud, // Usa longitud obtenida  -70.5789952
      lat: latFija, 
       lng: lngFija
    },
    zoom: 16,
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markersAgencias.map((markerA, indexA) => (
          <CustomMarker
            key={indexA}
            lat={markerA.lat}
            lng={markerA.lng}
            imageSrc={markerImageAgencia}
          />
        ))}

        {markersAgentes.map((markerAg, index) => (

          <CustomMarker
            key={index}
            lat={(markerAg.lat)}
            lng={(markerAg.lng)}
            imageSrc={markerImageAgentes}
          />
        ))}
        {markersCajeros.map((markerCaj, indexCaj) => (

          <CustomMarker
            key={indexCaj}
            lat={(markerCaj.lat)}
            lng={(markerCaj.lng)}
            imageSrc={markerImageCajeros}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Maps;
