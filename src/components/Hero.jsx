import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="main">
    <div className='container'>
        <div className="left">
            <h2 className="hero-text">
            Your all-in-one crypto platform to research the market trend of cryptocurrencies¹
            </h2>
            <p>
            we are helping global users to  analyse the digital assets
            </p>
            <Link to='/coins' style={{textDecoration: "none", color:"white"}}> 
            <div className='btns-2 btns-0' style={{marginTop:"15px"}}>
               <button >Get Started</button>
            </div>
            </Link>
      </div>
        <div className="right">
            <img className='portfolio-image' src="/portfolio.svg" alt='Portfolio' width={'80%'} />
            
        </div>
        </div>
      
    </div>
  )
}

export default Hero
