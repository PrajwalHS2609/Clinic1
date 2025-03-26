import React from 'react'
import "./HomeSpecialist.css"
import HomeSpecialistHead from './HomeSpecialistHead'
import Dashboard from './Dashboard/Dashboard'

const HomeSpecialist = () => {
  return (
    <div className='homeSpecialty-container'>
      <HomeSpecialistHead/>
      <Dashboard/>
    </div>
  )
}

export default HomeSpecialist
