import React, { useEffect } from "react";


function Geolocation() {
  useEffect(() => {
    // Comprobar si el navegador admite la API de geolocalización
    if ("geolocation" in navigator) {
      // Obtener la ubicación del usuario
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Haz algo con la latitud y longitud, como mostrarla en la página
        console.log("Latitud: " + latitude);
        console.log("Longitud: " + longitude);
      }, function (error) {
        // En caso de error al obtener la ubicación
        console.error("Error al obtener la ubicación: " + error.message);
      });
    } else {
      // El navegador no admite la API de geolocalización
      console.error("El navegador no admite la geolocalización.");
    }
  }, []);

  return (
    <div>
      {/* Puedes mostrar la información de geolocalización aquí si lo deseas */}
    </div>
  );
}

export default Geolocation;
