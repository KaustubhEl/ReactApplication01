import React from 'react'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1>Profile Co.</h1>
      <nav>
        <ul style={{listStyleType: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
