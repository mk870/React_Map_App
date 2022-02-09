import React,{useState} from 'react';
import Map from './Components/Map.js'
import Home from './Components/Home.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Errorpage from './Components/Errorpage.js';
import { MapContext } from './Components/AppContext/MapContext.js';
import Navbar from './Components/Navbar.js';
import Services from './Components/Services.js';
import Footer from './Components/Footer.js';


export default function App() {
  const [lng, setLng] = useState(-0.12)
  const [lat, setLat] = useState(51.51)
  const [mapstyle,setmapstyle] = useState('mapbox://styles/mapbox/streets-v11')
  const [zoomlevel,setzoomlevel] = useState(8)
  const [mapsize,setmapsize] = useState([200,97.5])
  
  return (
    <MapContext.Provider value={
      {setLng,setLat,lat,lng,mapstyle,setmapstyle,zoomlevel,setzoomlevel,mapsize,setmapsize}
      }>
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </MapContext.Provider>
    )
}
