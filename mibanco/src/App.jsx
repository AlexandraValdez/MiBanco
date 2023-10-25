import { useEffect } from "react";
import "./App.css";
// import { getBCPAgencies } from "./services/Bcp";
import { getAgenciasBcp } from "./services/api";
// import Agencias from "./components/Agencias";
import BannerApp from "./components/BannerApp";
import Contactanos from "./components/Contactanos";
import Siguenos from "./components/Siguenos";

function App() {
  useEffect(() => {
    getAgenciasBcp()
    .then((response) => {
      console.log("aqui:   ",response);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  // const getAgencias = async () => {
  //   try {
  //     const response = await getBCPAgencies();
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error al obtener pedidos", error);
  //     // Trata el error de acuerdo a tus necesidades
  //   }
  // };

  return (
    <>
      <BannerApp />
      <Contactanos />
      <Siguenos />
      {/* <Agencias /> */}
    </>
  );
}

export default App;
