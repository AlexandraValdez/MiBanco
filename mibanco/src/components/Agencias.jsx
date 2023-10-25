// // src/components/AgenciesMap.js
// import { useEffect, useState } from 'react';
// import { getKasnetAgencies } from '../services/Kasnet';

// const Agencias = () => {
//   const [agencies, setAgencies] = useState([]);

//   useEffect(() => {
//     async function fetchAgencies() {
//       const data = await getKasnetAgencies();
//       setAgencies(data);
//     }
//     fetchAgencies();
//   }, []);

//   // Render the map with agencies using a mapping library like Leaflet or Google Maps
//   return (
//     <div>
//       {/* Render the map here */}
//       {agencies.map((agency) => (
//         <div key={agency.id}>
//           <p>{agency.name}</p>
//           {/* Display other agency information */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Agencias;


