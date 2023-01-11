import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ScrolltotheTop from '../component/ScrollToTop'
import Mainpage from '../component/mainpage/Mainpage'
import Homepage from '../component/homepage/Homepage'

const AllRoute = () => {
  return (    
        <Router>
          <ScrolltotheTop />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="/mainpage" element={<Mainpage />} />  
          </Routes>                       
        </Router>    
  )
}

export default AllRoute