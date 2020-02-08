import React, { createRef } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

import { Box } from '@material-ui/core';

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;

const Map = withScriptjs(withGoogleMap(props => {
  const {
    googleMapRef,
    markers
  } = props;

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.6892, lng: 51.3890 }}
      ref={googleMapRef}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          // label={marker.label}
          position={{ lat: marker.value.lat, lng: marker.value.long }} />
      ))}
    </GoogleMap>
  )
}));

function MapField({ coords = [], propsRest }) {
  const googleMapRef = createRef();

  return (
    <Box>
      <Map
        googleMapURL={GOOGLE_MAP_URL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}

        // Custom props
        markers={coords}
        googleMapRef={googleMapRef}

        {...propsRest}
      />
    </Box>
  )
}

export default MapField;