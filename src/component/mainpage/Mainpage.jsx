import React from 'react'
import Topnav from '../topnav/Topnav'
import Herosection from '../herosection/Herosection'
import "./mainpage.css";
import Cardfeature from '../cardSection/Cardfeature';

const Mainpage = () => {
  return (
   <div className="main">
        <Topnav />
        <Herosection />
        <Cardfeature />
   </div>
  )
}

export default Mainpage