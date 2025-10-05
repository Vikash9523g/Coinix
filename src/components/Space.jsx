import React from 'react'
import "./space.css";
import Spacecard from './Spacecard';
import trusted from './trusted.png';
import global from './global.png'

function Space() {
  return (
    <div className='mains'>
        <div className="box">
            <div className="heading">
                <h2>We’ve been around the block</h2>
                <h6>Coinix has been innovating since 2023, and remains a trusted guide in the crypto space.</h6>
            </div>
            <div className="cards">
            <Spacecard trustedImage={trusted} cardHeading={"Fully verified and trusted"}/>
            <Spacecard trustedImage={global} cardHeading={"Global Availability"}/>
            </div>
        </div>
      
    </div>
  )
}

export default Space
