import React,{useContext, useEffect}from 'react';
import { HomeStyles } from '../Styles/HomeStyles';
import {Globalstyles} from '../Styles/Globalstyles'
import Info from './Info';
import { ContainerStyles } from '../Styles/ContainerStyles';
import Images from './Images';
import { MapContext } from './AppContext/MapContext';

export default function Home() {
  const{setLng} = useContext(MapContext)
  const{setLat} = useContext(MapContext)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})
  }, []);
  const successLocation = position =>{
    setLng(position.coords.longitude)
    setLat(position.coords.latitude)
  }
  const errorLocation = () =>{
    setLng(-0.12)
    setLat(51.51)
  }
  return(
    <HomeStyles>
      <Globalstyles/>
      <ContainerStyles>
        <Info/>
        <Images/>
      </ContainerStyles>
    </HomeStyles>
  ) 
} 
