import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const style = {
  width: "70%",
  height: "50%",
};

function MapContainer(props) {
  const { google } = props;
  const [selectedPlace, setSelectedPlace] = useState(null);
  const markerPosition = { lat: 23.249827157854142, lng: 77.49482374643704 };
  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <Map
      google={google}
      zoom={14}
      containerStyle={style}
      initialCenter={markerPosition}
    >
      <Marker
        position={markerPosition}
        onClick={onMarkerClick}
        name={"My Location"}
        icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
      />
      <InfoWindow
        marker={selectedPlace}
        visible={Boolean(selectedPlace)}
        onClose={onInfoWindowClose}
      >
        <div>
          <h4>{selectedPlace && selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA5OdwmghrVNmbG5nrkUXVf3yGYapO9tFk",
})(MapContainer);
