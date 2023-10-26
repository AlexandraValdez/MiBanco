/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { FaSearch } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";  
import useQuery from "../hooks/useQuery";

function Search() {
  const location = useLocation(); // Usa useLocation para acceder a la ubicación actual
  const query = useQuery(location.search);
  const searchText = query.get("search"); // Cambia "useQuery" a "query"

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText);
  };

  return (
    <form className='searchContainer' onSubmit={handleSubmit}>
      <div className='searchBox'>
        <input
          className='searchInput'
          type="text"
          value={searchText ?? ""}
          autoFocus
          placeholder="Ingresa la calle o distrito"
          aria-label="Search"
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value, { replace: true });
          }}
        />
        <FaSearch size={20} color="red" className='searchButton'  />
      </div>
    </form>
  );
}

export default Search;