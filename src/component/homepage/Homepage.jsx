import React from 'react'
import "./homepage.css"
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();
  const mainPage = () => {
    navigate("/mainpage")
  }
  return (
    <div class="container">      
          <button onClick={mainPage} className="button">click me</button>           
    </div>
  )
}

export default Homepage