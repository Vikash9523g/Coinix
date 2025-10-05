import React from 'react'
import "./Spacecard.css"

const Spacecard = ({trustedImage, cardHeading}) => {
  return (
    <div className='card'>
        <div className='text'>
            <h3>{cardHeading}</h3>
        </div>
        <div>
          <img src={trustedImage} alt="" style={ {width:"90%", height :"100%"}}/>
        </div>
      
    </div>
  )
}

export default Spacecard
