import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
            <div className='flex p-5 mx-8 justify-between'>
            <h2 className='text-5xl font-bold '>Titans</h2>
            <div className='flex gap-5 pr-5 text-2xl font-bold items-center '>
              <Link to='/'>Home</Link>
              <Link to='/Contact'>Contact</Link>
              <Link to='/About'>About</Link>
              <Link to='/Pricing'>Pricing</Link>    
                {/* <a href='/'>Home</a>
                <a href='/Contact'>Contact</a>
                <a href='/About'>About</a>
                <a href='/Pricing'>Pricing</a> */}
            </div>
        </div>
  )
}

export default Navbar
