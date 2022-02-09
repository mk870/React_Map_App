import React from 'react';
import { InfoStyles } from '../Styles/InfoStyles';
import { useNavigate } from 'react-router';
import { Button } from '../Styles/Button';
import image from '../Images/world1.jpg'

export default function Info() {
  const navigate = useNavigate()
  return (
    <InfoStyles>
      <span className='header'>Welcome to NextGenMaps</span>
      <span className='second-header'>The world at your fingertips</span>
      <img src={image} alt="image" className='image2'/>
      <ul>
        <li>Search for any location on the globe</li>
        <li>Find distances between cities and towns</li>
        <li>Find the estimated time it takes to travel between places</li>
        <li>Zoom in and out of the maps and navigate around.</li>
      </ul>
      
      <Button onClick={()=>navigate('/map')}>Go to Map</Button>
    </InfoStyles>
  )
}
