const BCP_API_URL = 'https://www.viabcp.com/wcm/connect/resources/userstories/JSON/dataJSON_ubicanos_grupo1.json?subtype=json';

export async function getAgenciasBcp() {
    try {
      const response = await fetch(BCP_API_URL);
      if (!response.ok) {
        throw new Error('Error al obtener datos de BCP');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
