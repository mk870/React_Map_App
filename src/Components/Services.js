import React from 'react';
import { ServicesStyles } from '../Styles/ServicesStyles';
import {FaDirections, FaMap, FaMapSigns, FaSearch} from 'react-icons/fa';
import image from '../Images/im2.jpg'
import { Globalstyles } from '../Styles/Globalstyles';

export default function Services() {
  return (
    <ServicesStyles>
      <Globalstyles/>
      <div className='intro'>
        <h1>Services</h1>
        <span>We offer a lot of Mapping services in this platform.Your Location and search data is secure and protected as per company policy.</span>
      </div>
      <div className='container'>
        <div className="mapPic">
          <img src={image} alt="map"  />
        </div>
        <div className='service-cards'>
          <div className="search">
            <h4>Search-Service</h4>
            <div className="icons"><FaSearch fontSize={29} color='blue'/><FaMap fontSize={29} color='blue'/></div>
            <span>Search any street,city from any country and continent</span>
          </div>
          <div className="directions">
            <h4>Directions and Distance Services</h4>
            <div className="icons"><FaDirections fontSize={29} color='blue'/> <FaMap fontSize={29} color='blue'/></div>
            <span>Get directions between 2 places while also getting the distance between them in different modes of transport like driving,cycling and walking</span>
          </div>
          <div className="navigation">
            <h4>Map Navigation</h4>
            <div className="icons"><FaMapSigns fontSize={29} color='blue'/> <FaMap fontSize={29} color='blue'/></div>
            <span>Navigate around the map by dragging your mouse across the map,zoom in and out</span>
          </div>
          <div className="styles">
            <h4>Map Styles</h4>
            <div className="icons"><FaMap fontSize={29} color='blue'/></div>
            <span>You can access different Map styles that suit your business needs.There are upto 8 styles to choose from</span>
          </div>
        </div>
      </div>
    </ServicesStyles>
  )
}
