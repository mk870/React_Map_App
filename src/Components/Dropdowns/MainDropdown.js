import React, { useState } from 'react';
import { DropdownStyles } from '../../Styles/DropdownStyles';
import Mapsize from './Mapsize';
import MapstyleDropdown from './MapstyleDropdown';


export default function MainDropdown() {
  const [mapstyle, setmapstyle] = useState(false)
  const [mapsize, setmapsize] = useState(false)
  
  return (
    <DropdownStyles >
      <span onMouseEnter={()=>setmapstyle(true)} onClick={()=>setmapstyle(true)} onMouseLeave={()=>setmapstyle(false)}>
        Map style 
        {mapstyle && <MapstyleDropdown/>} 
        </span>
      <span onMouseEnter={()=>setmapsize(true)} onClick={()=>setmapsize(true)} onMouseLeave={()=>setmapsize(false)}>
        Map Size
        {mapsize && <Mapsize/>} 
      </span>
      
      
    </DropdownStyles>
  )
}
