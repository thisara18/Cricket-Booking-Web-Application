import React from 'react'
import './Ground.css'
import gallery_1 from '../../assets/net.jpg'
import gallery_2 from '../../assets/ball.jpg'
import gallery_3 from '../../assets/bat.jpg'


const Ground = () => {
  return (
    <div className='ground'>
        <div className='gallery'>
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            
        </div>
        <button className='btn dark-btn'>See more here</button>

    </div>
  )
}

export default Ground