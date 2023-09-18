import React from 'react'
import './Section8.css'
import phone from '../image/phone2.png'

function Section8() {
  return (
    <div className='section8'>
        <div className='left8'>
            <div className='cercle'></div>
            <img className="phone8" src={phone} alt="phone"/>
            
        </div>
        <div className='right8'>
          <div className='container8'>
            <h5>ABOUT US</h5>
            <h1>Build your dream website today</h1>
            <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
            <ul>
      <li>
        <div className="u-text-palette-1-base">
          <div className="u-svg-content8">
            ►
          </div>
        </div>
        <div className='txt'>Support via E-mail and Phone</div>
      </li>
      <li>
        <div className="u-list-icon u-text-palette-1-base">
          <div className="u-svg-content8">
            ►
          </div>
        </div>
        <div className='txt'>Multi-Language Support</div>
      </li>
    </ul>
            <a class="thm-btn8 bgclr-8" href="index.html">Read more</a>
            </div>
        </div>
    </div>
  )
}

export default Section8