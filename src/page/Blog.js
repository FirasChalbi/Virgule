import React from 'react'
import Index from '../component/Index'
import Section8 from '../component/Section8';
import './TopTitle.css'

function Blog() {
  const name = "Blog"
  return (
    <div>
    <div className='topcontact'></div>
    <Index title={name}/>
    <Section8 />
    </div>
  )
}

export default Blog