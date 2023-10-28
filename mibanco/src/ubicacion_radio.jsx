// Función para calcular la distancia haversine entre dos puntos geográficos
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = radioTierra * c;
    return distancia;
  }
  
  // Lugar de referencia para el cálculo de distancia
  const lugarReferencia = {
    lat: latitudReferencia, // Latitud del punto de referencia
    lng: longitudReferencia, // Longitud del punto de referencia
  };
  
  // Filtrar marcadores cercanos
  const marcadoresCercanos = marcadoresAgencias.filter((marcador) => {
    const distancia = calcularDistancia(
      lugarReferencia.lat,
      lugarReferencia.lng,
      marcador.lat,
      marcador.lng
    );
    return distancia <= distanciaMaxima; // distanciaMaxima es la distancia máxima permitida
  });
  
  // Ahora, marcadoresCercanos contiene los marcadores cercanos a lugarReferencia
  