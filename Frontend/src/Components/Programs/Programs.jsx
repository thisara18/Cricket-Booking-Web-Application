import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Programs.css';
import program_1 from '../../assets/bat.jpg';
import program_2 from '../../assets/cri.jpg';
import program_3 from '../../assets/b.jpg';

const Programs = () => {
  const navigate = useNavigate();

  const handleButtonClick = (programName) => {
    navigate('/booking', { state: { program: programName } }); // Pass the program name to the booking form
  };

  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt="" />
            <div className="caption">
                <button className='program-button' onClick={() => handleButtonClick('Outdoor Ground')}>Outdoor Ground</button>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt="" />
            <div className="caption">
                <button className='program-button' onClick={() => handleButtonClick('Net practice')}>Net practice</button>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt="" />
            <div className="caption">
                <button className='program-button' onClick={() => handleButtonClick('Coaching Session')}>Indoor Ground</button>
            </div>
        </div>
    </div>
  );
};

export default Programs;
