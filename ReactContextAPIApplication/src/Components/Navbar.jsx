import React from 'react'
import Navbarleft from './Navbarleft'
import Navbarright from './Navbarright'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      <Navbarleft/>
      <Navbarright/>
    </div>
  )
}

export default Navbar