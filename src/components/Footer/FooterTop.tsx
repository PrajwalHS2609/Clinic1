import React from 'react'
import FooterContact from './FooterContact'
import FooterTiming from './FooterTiming'
import FooterMap from './FooterMap'
import  "./Footer.css"
const FooterTop = () => {
  return (
    <div className='footerTop-container'>
      <FooterContact/>
      <FooterTiming/>
      <FooterMap/>
    </div>
  )
}

export default FooterTop
