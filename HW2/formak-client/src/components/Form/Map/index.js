import React, { useState } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const Map = withScriptjs(withGoogleMap(props => {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latLng;
    const newMarkers = [
      ...markers,
      {
        label: "TODO",
        value: {
          lat: lat(),
          long: lng()
        }
      }
    ];
    setMarkers(newMarkers);
    props.handleChange(props.name, newMarkers);
  }

  const handleMarkerRemove = (index) => {
    const newMarkers = [...markers]
    newMarkers.splice(index, 1);
    setMarkers(newMarkers);
    props.handleChange(props.name, newMarkers);
  }

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.6892, lng: 51.3890 }}
      onClick={handleMapClick}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.value.lat, lng: marker.value.long }}
          onDblClick={() => handleMarkerRemove(index)} />
      ))}
    </GoogleMap>
  )
}));

function MapField(props) {
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;

  return <Map
    googleMapURL={googleMapURL}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    {...props}
  />
}

export default MapField;