import React, { useContext, useState } from 'react';
import { MapstyleDropdownStyles } from '../../Styles/MapstyleDropdownStyles';
import { MapContext } from '../AppContext/MapContext';

export default function MapstyleDropdown() {
  const{setmapstyle} = useContext(MapContext)
  const[classname,setclass] = useState(0)
  return (
    <MapstyleDropdownStyles>
      <span className={classname===1?'clicked':'normal'} onClick={()=>{
        setclass(1)
        setmapstyle('mapbox://styles/mapbox/streets-v11')}}>
          street style</span>
      <span className={classname===2?'clicked':'normal'} onClick={()=>{
        setclass(2)
        setmapstyle('mapbox://styles/mapbox/outdoors-v11')}}>
          outdoor style</span>
      <span className={classname===3?'clicked':'normal'} onClick={()=>{
        setclass(3)
        setmapstyle('mapbox://styles/mapbox/light-v10')}}>
          light style</span>
      <span className={classname===4?'clicked':'normal'} onClick={()=>{
        setclass(4)
        setmapstyle('mapbox://styles/mapbox/dark-v10')}}>
          dark style</span>
      <span className={classname===5?'clicked':'normal'} onClick={()=>{
        setclass(5)
        setmapstyle('mapbox://styles/mapbox/satellite-v9')}}>
          satellite style</span>
      <span className={classname===6?'clicked':'normal'} onClick={()=>{
        setclass(6)
        setmapstyle('mapbox://styles/mapbox/satellite-streets-v11')}}>
          satellite street style</span>
      <span className={classname===7?'clicked':'normal'} onClick={()=>{
        setclass(7)
        setmapstyle('mapbox://styles/mapbox/navigation-day-v1')}}>
          navigation day style</span>
      <span className={classname===8?'clicked':'normal'} onClick={()=>{
        setclass(8)
        setmapstyle('mapbox://styles/mapbox/navigation-night-v1')}}>
          navigation night style</span>
    </MapstyleDropdownStyles>
  )
}
