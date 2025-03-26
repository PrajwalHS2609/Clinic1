import React from 'react'
import "./HomeService.css"
import HomeServiceHead from './HomeServiceHead'
import HomeServiceCard from './HomeServiceCard'
const HomeService = () => {
  return (
    <div className='homeService-container'>
      <HomeServiceHead/>
      <HomeServiceCard/>
    </div>
  )
}

export default HomeService
