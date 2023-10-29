import React, { useState, useEffect } from "react";

function WazeLink() {
  // Coordenadas de ejemplo
//   const latitude = 37.7749;
//   const longitude = -122.4194;
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

  const handleOpenWaze = () => {
    if (latitud !== null && longitud !== null) {
        //consumiendo urlWaze
        const url = `https://www.waze.com/ul?ll=${latitud},${longitud}&navigate=yes`;
        window.open(url, '_blank');
      } else {
        console.error("Coordenadas no disponibles. Espere a que se obtenga la ubicación.");
      }
  };

  return (
    <div>
      <button onClick={handleOpenWaze}>Waze</button>
    </div>
  );
}

export default WazeLink;
