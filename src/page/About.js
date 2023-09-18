import React from 'react'
import Index from '../component/Index'
import Section8 from '../component/Section8';
import './TopTitle.css'

function About() {
  const name = "About Us"
  return (
    <div>
    <div className='topcontact'></div>
    <Index title={name}/>
    <Section8 />
    </div>
  )
}

export default About