import React, { useState, useEffect } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda
  const [agencias, setAgencias] = useState([]); // Estado para almacenar las agencias

  const MIBANCO_API_URL = './agencias.json';

  useEffect(() => {
    fetch(MIBANCO_API_URL)
      .then(response => response.json())
      .then(data => {
        setAgencias(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Comprobar si agencias se ha cargado correctamente antes de filtrar
    if (!agencias) {
      return;
    }

    // Filtrar los resultados que coinciden con el término de búsqueda en el campo "distrito"
    const results = agencias.filter((agencia) => {
      return (
        agencia.DISTRITO &&
        agencia.DISTRITO.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por distrito..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {searchTerm !== "" && (
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <li key={index}>
                <p>Distrito: {result.DISTRITO}</p>
                <p>Dirección: {result.DIRECCION}</p>
              </li>
            ))
          ) : (
            <li>No se encontraron resultados</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;

