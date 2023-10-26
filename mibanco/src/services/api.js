const BCP_API_URL = 'https://www.viabcp.com/wcm/connect/resources/userstories/JSON/dataJSON_ubicanos_grupo1.json?subtype=json';
const KASNET_API_URL = "https://ubicatuagente.agentekasnet.com/ubicatuagente/Home/AgentesAKNGet?q=0";
const MIBANCO_API_URL = './agencias.json';

export async function getCajerosBcp() {
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

export async function getAgentesKasnet() {
    try {
      const response = await fetch(KASNET_API_URL);
      if (!response.ok) {
        throw new Error('Error al obtener datos de Kasnet');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
export async function getAgenciasMibanco() {
    try {
      const response = await fetch(MIBANCO_API_URL);
      if (!response.ok) {
        throw new Error('Error al obtener datos de Mibanco');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
