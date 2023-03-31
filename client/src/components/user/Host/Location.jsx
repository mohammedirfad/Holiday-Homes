import React from 'react';
import {Box} from '@mui/material';
import ReactMapGL,{GeolocateControl, Marker, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../../Store/features/UserLocationSlice';
import Geocoder from './Geocoder';

function Location() {

    const dispatch = useDispatch();
    const {longitude,latitude,name} = useSelector(state => state.Location);
    console.log(longitude ,name)


  return (
    <Box
    sx={{
        height:580,
        width:700,
        position:'relative',
        borderRadius: 1
    }}
    >
      <ReactMapGL
      mapboxAccessToken='pk.eyJ1IjoibW9oZGlyZmFkIiwiYSI6ImNsZmhicm81YzN2N20zc280dXZqcDNtbTEifQ.gIGMpWrnsi_UTlVjTlRaWw'
      initialViewState={{
        longitude:longitude,
        latitude:latitude,
        zoom:8
      }}

    mapStyle="mapbox://styles/mapbox/satellite-streets-v12
    "
        >
        <Marker
        latitude={longitude}
        longitude={latitude}
        draggable
        onDragEnd={(e) => dispatch(
            setLocation({
                longitude:e.lngLat.longitude,
                latitude:e.lngLat.latitude
            })
        )}

        />
        <NavigationControl position='bottom-right' />
        <GeolocateControl 
            position='top-left'
            trackUserLocation
            onGeolocate={(e)=>setLocation()}
        />

        <Geocoder/>
      </ReactMapGL>
    </Box>
  )
}

export default Location
