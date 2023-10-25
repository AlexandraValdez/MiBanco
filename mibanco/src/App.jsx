import { useState } from "react";

import "./App.css";
import GoogleMapReact from "./maps";
import markerImageAgencia from "./img/agencias.svg";
import markerImageAgentes from "./img/agentes.svg";
import markerImageCajeros from "./img/cajeros.svg";

function App() {
  const [count, setCount] = useState(0);
  // -77,000444	-12,048099
  // let imagen= 'agencias'
  // markerImage={require(`./img/${imagen}.svg`)}
  const markers = [
    { lat: -12.048099, lng: -77.000444, image:  markerImageAgentes},
    { lat: -12.049, lng: -77.001, image: markerImageCajeros },
    { lat: -12.05, lng: -77.002, image: markerImageAgencia },
    // Agrega más marcadores aquí
  ];

  return (
    <>
      <div className="App">
        <GoogleMapReact
          lat={-12.048099}
          lng={-77.000444}
         // markerImage={markerImageAgencia}
          markers={markers}
          //markerImage={agencias}
        />
      </div>
    </>
  );
}

export default App;
