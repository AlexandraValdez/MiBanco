import { useEffect } from "react";
import "./App.css";
import { getCajerosBcp, getAgentesKasnet, getAgenciasMibanco } from "./services/api";
import BannerApp from "./components/BannerApp";
import Contactanos from "./components/Contactanos";
import Siguenos from "./components/Siguenos";
import Mapa from "./components/Mapa.jsx";
import Buscador from "./components/Buscador";

function App() {
  useEffect(() => {
    getAgentesKasnet()
      .then((response) => {
        console.log("KASNET:   ", response);
      })
      .catch((error) => {
        console.log(error);
      }),
      getCajerosBcp()
        .then((response) => {
          console.log("BCP:   ", response);
        })
        .catch((error) => {
          console.log(error);
        }),
        getAgenciasMibanco()
        .then((response) => {
          console.log("MIBANCO:   ", response);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  // useEffect(() => {
  //   Promise.all([getAgentesKasnet(), getCajerosBcp(), getAgenciasMibanco()])
  //     .then(([kasnetData, bcpData, mibancoData]) => {
  //       console.log("KASNET:   ", kasnetData);
  //       console.log("BCP:   ", bcpData);
  //       console.log("MIBANCO:   ", mibancoData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);


  return (
    <>
      <Buscador />
      <Mapa />
      <BannerApp />
      <Contactanos />
      <Siguenos />
      {/* <Agencias /> */}
    </>
  );
}

export default App;
