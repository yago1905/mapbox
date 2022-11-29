import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import { MapView, FirstPersonView } from '@deck.gl/core';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoieWFnb3podmFuaXlhIiwiYSI6ImNsYjI0Nzh2djAwdHQzdm9hMmZqbDNua3cifQ.VaAU9l7njzNUIAqoWDSa2w';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 54.3758,
  latitude: 37.7853,
  zoom: 1,
  pitch: 0,
  bearing: 0,
};

const we = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

function App({ data }) {
  const layers = [new LineLayer({ id: 'line-layer', we })];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <MapView id="map" width="50%" controller={true}>
        <Map
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </MapView>
      <FirstPersonView width="50%" x="50%" fovy={50} />
    </DeckGL>
  );
}

export default App;
