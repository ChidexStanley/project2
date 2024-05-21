import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
function Home() {

  const navigate = useNavigate(); 

  return (
    <div className='mainHome'>
      <h1 className='headingHome'>Welcome to my to do list APP</h1>
      <Button variant="outline-primary" className='btn1' onClick={()=>{navigate('/new')}}>Get Started</Button>
    </div>
  )
}

export default Home
