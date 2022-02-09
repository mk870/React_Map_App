import React,{ useContext }  from 'react';
import { ImageStyles } from '../Styles/ImagesStyles';
import map from '../Images/map1.webp'
import newyork from '../Images/newyork.jpg'
import paris from '../Images/paris.jpg'
import sao from '../Images/saopaulo.jpg'
import syndey from '../Images/syndey.jpg'
import tyoko from '../Images/tyoko.jpg'
import capetown from '../Images/cape.jpg'
import { MapContext } from './AppContext/MapContext';
import { useNavigate } from 'react-router';

const cities = [
  {name: 'Newyork', pic: newyork,coord:[40.73,-73.94]},
  {name: 'Paris', pic: paris,coord:[48.86,2.35]},
  {name: 'Sao Paulo', pic: sao,coord:[-23.55,-46.63]},
  {name: 'Sydney', pic: syndey,coord:[-33.86,151.21]},
  {name: 'Tokyo', pic: tyoko,coord:[35.65,139.84]},
  {name: 'Capetown', pic: capetown,coord:[-33.92,18.42]}
]
export default function Images() {
  const{setLat} = useContext(MapContext)
  const{setLng} = useContext(MapContext)
  const navigate = useNavigate()

  const checklocation = (coord)=>{
    setLat(coord[0])
    setLng(coord[1])
    navigate('/map')
  }
  return (
    <ImageStyles>
      <img src={map} alt="world map" className='image1' />
      <span className='header'>Cities</span>
      <div className='cities'>
        {cities.map((city)=>(
          <div className='city'onClick={()=>checklocation(city.coord)}>
            <img src={city.pic} alt={city.name} index={city.name}/>
            <span index={city.name}>{city.name}</span>
          </div>
        ))}
      </div>
      
    </ImageStyles>
  )
}
