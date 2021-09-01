import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.9468086,
  lng: -73.8865702
};
 

function Map() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB2gI00wGXQVdEeEayhJ6neQEt1AKDTIs4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={map}
      onUnmount={map}
      marker={map}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <div></div>
    </GoogleMap>
) : <div></div>


}

export default Map;

