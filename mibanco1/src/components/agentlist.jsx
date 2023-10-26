import React, { useEffect, useState } from "react";

function AgentList() {
  const [data, setData] = useState(null);
console.log(React)
  useEffect(() => {
   const apiUrl = "/api/ubicatuagente/Home/AgenteUbiGet?q=-11.896579686970234%26-77.04242582549773";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div>
      {data && Array.isArray(data) ? ( // Verificar que data sea un arreglo
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Código: {item.codigo}, Latitud: {item.latitud}, Longitud: {item.longitud}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron datos o los datos no son válidos.</p>
      )}
    </div>
  );
}

export default AgentList;

