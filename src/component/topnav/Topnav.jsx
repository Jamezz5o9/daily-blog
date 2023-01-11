import React from 'react'
import { useNavigate } from 'react-router-dom';
import './topnav.css'

const Topnav = () => {
    const navigate = useNavigate();

    const home = () =>{
        navigate("/")
    }
  return (
    <div className="nav">
        <ul>            
            <li onClick={home} className='home'>Home</li>                
            <li className="about">About us</li>
            <li className="contact">Contact</li>
            <li className="service">Service</li>
        </ul>      
    </div>
  )
}

export default Topnav