import React from 'react'
import './Slider.css'
import next_icon from '../../assets/rig.png'
import back_icon from '../../assets/back.png'
import user_1 from '../../assets/bat.jpg'
import user_2 from '../../assets/bat.jpg'
import user_3 from '../../assets/bat.jpg'
import user_4 from '../../assets/bat.jpg'
import { useRef } from 'react'

const Slider = () => {

     const slider = useRef();
     let tx = 0;

const sliderForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const sliderBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}





  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sliderForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={sliderBackward} />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                             <h3>Hashintha Chanuka</h3>
                             <span>Kandy</span>
                             </div>
                             <p>This is the best club to cricket and i played good cricket here
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                             <h3>Hashintha Chanuka</h3>
                             <span>Kandy</span>
                             </div>
                             <p>This is the best club to cricket and i played good cricket here</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                             <h3>Hashintha Chanuka</h3>
                             <span>Kandy</span>
                             </div>
                             <p>This is the best club to cricket and i played good cricket here</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                             <h3>Hashintha Chanuka</h3>
                             <span>Kandy</span>
                             </div>
                             <p>This is the best club to cricket and i played good cricket here</p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

    </div>
  )
}

export default Slider