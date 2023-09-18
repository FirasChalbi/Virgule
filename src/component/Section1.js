import React from 'react';
import './Section1.css'
// import marketing from '../image/marketing.jpg'
import banner from '../image/banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Section1 = () => {
  return (
    <div className="first-section">
      <div className="left-content1">
        <h1>Builtding <span style={{color:"#E4287C"}}>Digital<br/>Product,</span> Brand<br/>and Experience</h1>
        <p>Choose Upnex as your digital marketing agency and propel your<br/> business to new heights with our award-winning digital marketing</p>
        <div className='btn'>
        <button className='btn1'>Get Started</button>
        <button className='btn2' ><span class="text"><FontAwesomeIcon icon={faCirclePlay} /> Get Started</span></button>
        </div>
      </div>
      <div className="right-content1">
        <div className='cen'>
        <img src={banner} alt="marketing" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
