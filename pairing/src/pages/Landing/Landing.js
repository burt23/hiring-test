import React, { useState } from 'react'
import './Landing.scss'
import Navbar from '../../components/NavBar/Navbar'
import Section from '../../components/Section/Section'

function Landing () {
  const [mattressCount, setMattressCount] = useState(0)

  return (
    <div className='landing'>
      <Navbar mattressCount={mattressCount} />
      <Section setMattressCount={setMattressCount} mattressCount={mattressCount} />
    </div>
  )
}

export default Landing
