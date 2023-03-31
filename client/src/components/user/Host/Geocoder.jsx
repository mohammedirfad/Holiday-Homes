import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React from 'react'

function Geocoder() {
    const dispatch = useDispatch();

    const ctrl = new MapBoxGeocoder({
        accessToken:"pk.eyJ1IjoibW9oZGlyZmFkIiwiYSI6ImNsZmhicm81YzN2N20zc280dXZqcDNtbTEifQ.gIGMpWrnsi_UTlVjTlRaWw",
        marker:true,
        collapsed:true,
    });
    useControl(()=> ctrl);
    ctrl.on('result' , (e)=>{
        const coords = e.result.geometry.coordinates;

    });

  return null;
}

export default Geocoder