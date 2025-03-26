import React from 'react'
import FooterTop from './FooterTop'
import FooterBelow from './FooterBelow'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-container'>
      <FooterTop/>
      <FooterBelow/>
    </div>
  )
}

export default Footer
