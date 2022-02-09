import React, { useContext,useState } from 'react';
import { MapsizeStyles } from '../../Styles/MapsizeStyles';
import { MapContext } from '../AppContext/MapContext';

export default function Mapsize() {
  const{setmapsize} = useContext(MapContext)
  
  const [color,setcolor] = useState(0)
  

  
  return (
    <MapsizeStyles color={color}>
      <span onClick={()=>{
        setcolor(1)
        setmapsize([80,80])}}
        className={color===1?'clicked': 'normal'}>
          small
      </span>
      <span onClick={()=>{
        setcolor(2)
        setmapsize([105,95])}}
        className={color===2?'clicked': 'normal'}>
          medium
      </span>
      <span onClick={()=>{
        setcolor(3)
        setmapsize([200,97.5])}}
        className={color===3?'clicked': 'normal'}>
          Large
      </span>
    </MapsizeStyles>
  )
}
