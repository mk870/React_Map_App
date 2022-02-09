import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import "mapbox-gl-infobox/styles.css"
import { MapStyles } from '../Styles/MapStyles';
import { Button } from '../Styles/Button';
import { useNavigate } from 'react-router';
import { MapContext } from './AppContext/MapContext';
import { Globalstyles } from '../Styles/Globalstyles';


import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
mapboxgl.accessToken = 'pk.eyJ1IjoibWtodWUiLCJhIjoiY2t6NW51bHg1MG5rMDJ2cWY1b29sMXh6NiJ9.odKJLdrSituS0gMVIgcNQA'

export default function Map(){
  const{lat} = useContext(MapContext)
  const{lng} = useContext(MapContext)
  const{mapstyle} = useContext(MapContext)
  const{zoomlevel} = useContext(MapContext)
  const{setzoomlevel} = useContext(MapContext)
  const{mapsize} = useContext(MapContext)
  const mapContainer = useRef(null);
  const map = useRef(null);
  const[toggle,settoggle] = useState(true)
  const navigate = useNavigate()
  const [long, setLong] = useState(lng);
  const [lati, setLati] = useState(lat);
  
  
  useEffect(() => {
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapstyle,
      center: [long,lati],
      zoom: zoomlevel
    });
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLong(map.current.getCenter().lng.toFixed(4));
    setLati(map.current.getCenter().lat.toFixed(4));
    setzoomlevel(map.current.getZoom().toFixed(2));
    });

    if (!map.current) return;
    map.current.addControl(new mapboxgl.NavigationControl(),  position());

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      
      })
    
    

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });
    
    toggle? map.current.addControl(geocoder,'top-left'):map.current.addControl(directions, 'top-left')
    
    console.log(mapstyle)

    return () => map.current.remove();
    
  },[mapsize,mapstyle,toggle]);
  
    const mapstyleEval = ()=>{
      if(mapstyle=== 'mapbox://styles/mapbox/streets-v11'){
        return 'street style'
      }else if(mapstyle==='mapbox://styles/mapbox/outdoors-v11'){
        return 'outdoor style'
      }else if(mapstyle==='mapbox://styles/mapbox/light-v10'){
        return 'lightstyle'
      }else if(mapstyle==='mapbox://styles/mapbox/dark-v10'){
        return 'dark style'
      }else if(mapstyle==='mapbox://styles/mapbox/satellite-v9'){
        return 'satellite style'
      }else if(mapstyle==='mapbox://styles/mapbox/satellite-streets-v11'){
        return 'satellite street style'
      }else if(mapstyle==='mapbox://styles/mapbox/navigation-day-v1'){
        return 'navigation day style'
      }else if(mapstyle==='mapbox://styles/mapbox/navigation-night-v1'){
        return 'navigation night style'
      }
    }
    const mapsizeEval=()=>{
      if(mapsize[0] === 200){
        return 'large'
      }else if(mapsize[0] === 105){
        return 'medium'
      }else if(mapsize[0]=== 80){
        return 'small'
      }
    }
    const position = ()=>{
      if(mapsize[0] === 80){
        return 'bottom-right'
      }else{
        return 'top-right'
      }
    }
    return (
    <MapStyles mapsize={mapsize}>
      <Globalstyles/>
      <Button onClick={()=>settoggle(!toggle)}>{toggle? 'Get Directions':'Search Location'}</Button>
      
      <div className="sidebar">
        Longitude: {long} | Latitude: {lati} | Zoom: {zoomlevel} | Mapsize: {mapsizeEval()} | Mapstyle: {mapstyleEval()}
      </div>
      
      <div ref={mapContainer} className="map-container" />
    </MapStyles>
  );
}
