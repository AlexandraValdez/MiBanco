import React, { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de búsqueda
const [distritos,setDistritos]=useState([]);
const [agencias, setAgencias] = useState([]); // Estado para almacenar los datos de agencias

// useEffect(() => {
//   // Cargar los datos desde el archivo agencias.json
//   fetch("./agencias.json")
//     .then((response) => response.json())
//     .then((data) => {
//       setAgencias(data);
//       console.log(distritos)
//     })
//     .catch((error) => console.error('Error:', error));
// }, []);


  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);




    const sampleData = [
      { id: 1, name: "Lima" },
      { id: 2, name: "San Miguel" },
      { id: 3, name: "San Isidro" },
    ];

    // Filtrar los resultados que coinciden con el término de búsqueda
    const results = sampleData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))
        ) : (
          <li>No se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
}

export default Search;
