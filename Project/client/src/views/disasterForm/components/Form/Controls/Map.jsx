import React, { useState, createRef } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import {
  Box,
  Button,
  Typography
} from '@material-ui/core';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;

const Map = withScriptjs(withGoogleMap(props => {
  const {
    googleMapRef,
    markers,
    handleMapClick,
    handleMarkerRemove
  } = props;

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.6892, lng: 51.3890 }}
      onClick={handleMapClick}
      ref={googleMapRef}
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

function MapField({ name, title, form, setForm, ...propsRest }) {
  const googleMapRef = createRef();

  const [markers, setMarkers] = useState([]);
  const [myLocation, setMyLocation] = useState(null);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latLng;
    const newMarkers = [
      ...markers,
      {
        label: "Picked Location",
        value: {
          lat: lat(),
          long: lng()
        }
      }
    ];
    setMarkers(newMarkers);
    setForm({
      ...form,
      [name]: newMarkers
    });
  }

  const handleMarkerRemove = (index) => {
    const newMarkers = [...markers]
    newMarkers.splice(index, 1);
    setMarkers(newMarkers);
    setForm({
      ...form,
      [name]: newMarkers
    });
  }

  const handleAddMyLocation = () => {
    if (myLocation) return;

    function success(position) {
      const { latitude: lat, longitude: lng } = position.coords;

      googleMapRef.current.panTo({ lat, lng });

      setMyLocation({ lat, lng });

      const newMarkers = [
        ...markers,
        {
          label: "My Location",
          value: {
            lat,
            long: lng
          }
        }
      ];

      setMarkers(newMarkers);
      setForm({
        ...form,
        [name]: newMarkers
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  }

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}>
        <Typography>{title}</Typography>

        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleAddMyLocation}>
          My Location
        </Button>
      </Box>

      <Map
        googleMapURL={GOOGLE_MAP_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}

        // Custom props
        markers={markers}
        handleMapClick={handleMapClick}
        handleMarkerRemove={handleMarkerRemove}
        googleMapRef={googleMapRef}

        {...propsRest}
      />
    </Box>
  )
}

export default MapField;