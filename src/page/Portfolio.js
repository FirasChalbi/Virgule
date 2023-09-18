import React from 'react'
import Index from '../component/Index'

import './TopTitle.css'
import Section12 from '../component/Section12';

function Portfolio() {
  const name = "Portfolio"
  return (
    <div>
    <div className='topcontact'></div>
    <Index title={name}/>
    <Section12 />
    </div>
  )
}

export default Portfolio