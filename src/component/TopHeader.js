import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import { Link } from 'react-router-dom';
import './TopHeader.css'
import virgule from '../image/virgule.png'
import virgule2 from '../image/virgule2.png'
import dlogo from '../image/dlogo.png'

function TopHeader() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={Close} />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <div className="nav-logo">
          <img src={dlogo} alt="marketing" className='logo' />  
          </div>
          <div className="nav-logo2">
          <img src={dlogo} alt="marketing" className='logo2' /> 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='navpush' style={{width:"6px",paddingRight:"0%"}}></div> 
            <li className="nav-item">
            <Link className='navword' to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className='navword' to="/About">About</Link>
            </li>
            <li className="nav-item">
            <Link className='navword' to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
            <Link className='navword' to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
            <Link className='navword' to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className='rightnav'>
          
          <button className='btn1'>Let's Talk Us</button>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopHeader;
