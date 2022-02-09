import React,{useState} from 'react';
import { FaHome, FaServicestack } from 'react-icons/fa';
import {SiMapbox} from 'react-icons/si';
import {FiSettings} from 'react-icons/fi'
import { useNavigate } from 'react-router';
import { NavbarStyles } from '../Styles/NavbarStyles';
import MainDropdown from '././Dropdowns/MainDropdown';

export default function Navbar() {
  const [mainDropdown,setMainDropdown] = useState(false)
  const navigate = useNavigate()
  return(
    <>
    <NavbarStyles>
      <div className='logo'>
        <SiMapbox fontSize={21}/>
        <h4>NextGenMaps</h4>
      </div>

      <div className='info'>
        <span onClick={()=>navigate('/')}><FaHome /> Home</span>
        <span onClick={()=>navigate('/services')}><FaServicestack/> Services</span>
        <span onClick={()=>setMainDropdown(true)} onMouseEnter={()=>setMainDropdown(true)} onMouseLeave={()=>setMainDropdown(false)}>
          <FiSettings/>
          Settings 
          {mainDropdown && <MainDropdown/>}
          </span>
      </div>
    </NavbarStyles>
    
    </>
  )
}
