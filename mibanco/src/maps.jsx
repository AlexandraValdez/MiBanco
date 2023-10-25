import React from "react";
import GoogleMapReact from "google-map-react";

const CustomMarker = ({ imageSrc }) => (
  <div style={{ width: "30px", height: "30px" }}>
    <img
      src={imageSrc}
      alt="Marker"
      style={{ width: "100%", height: "100%" }}
    />
  </div>
);

function Maps({ lat, lng, markerImage, markers }) {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 16,
  };

  return (
    <div style={{ height: "50vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

        {markers.map((marker, index) => (
          <CustomMarker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            imageSrc={marker.image}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Maps;
