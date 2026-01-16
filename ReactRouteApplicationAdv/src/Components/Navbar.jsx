import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-500 p-4'>
                <ul className='flex space-x-4'>
                    <li>
                        <Link to="/" className='text-white hover:text-gray-200'>Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className='text-white hover:text-gray-200'>About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='text-white hover:text-gray-200'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/products" className='text-white hover:text-gray-200'>Products</Link>
                    </li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar