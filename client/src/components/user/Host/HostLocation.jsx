import React from 'react';
import {Box} from '@mui/material';
import ReactMapGL,{GeolocateControl, Marker, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../../Store/features/UserLocationSlice';
import Geocoder from './Geocoder';

function HostLocation() {

    const dispatch = useDispatch();
    const {longitude,latitude,name} = useSelector(state => state.Location);
    console.log(longitude ,name)


  return (
   <div className='w-full'>
    <div className='justify-center items-center flex flex-col my-12'>
    <div className='justify-center '>
    <h1 className='text-2xl md:text-3xl font-semibold font-sans '>
                Share some basics about your place
                </h1>
                <h1 className='text-md md:text-lg text-gray-500 mt-2'>You'll add more details later, such as bed types</h1>



                <Box
    sx={{
        height:580,
        width:500,
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



    </div>

    </div>


    
   </div>
  )
}

export default HostLocation;