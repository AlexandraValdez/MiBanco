import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import markerImageAgencia from "./img/agencias.svg";
import markerImageAgentes from "./img/agentes.svg";

const CustomMarker = ({ imageSrc }) => (
  <div style={{ width: "30px", height: "30px" }}>
    <img
      src={imageSrc}
      alt="Marker"
      style={{ width: "100%", height: "100%" }}
    />
  </div>
);

function Maps({ lat, lng, markersAgentes, markersAgencias }) {
  const [latitud, setLatitud] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Comprobar si el navegador admite la API de geolocalización
    if ("geolocation" in navigator) {
      // Obtener la ubicación del usuario
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Haz algo con la latitud y longitud, como mostrarla en la página
          console.log("Latitud: " + latitude);
          console.log("Longitud: " + longitude);

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

  const defaultProps = {
    center: {
      lat: latitud || lat, // Usa latitud obtenida o lat por defecto -33.4102528
      lng: longitud || lng, // Usa longitud obtenida o lng por defecto -70.5789952
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
        {markersAgencias.map((marker, index) => (
          <CustomMarker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            imageSrc={marker.image}
          />
        ))}
        {markersAgentes.map((marker, index) => (
          <CustomMarker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            imageSrc={markerImageAgentes}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Maps;
