// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

// export default function Mapa() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <div>Mapa</div>;
// }

import maps from "../assets/maps.jpg";

const Mapa = () => {
  return (
    <>
      <div className="container-fluid">
        <img src={maps} alt="" />
      </div>
    </>
  );
};

export default Mapa;
