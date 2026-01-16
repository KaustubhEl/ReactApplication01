import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/ContactUs.jsx'
import About from './pages/AboutUs.jsx'
import Navbar from './components/Navbar.jsx'
import Pricing from './pages/Pricing.jsx'

const App = () => {
  return (
    <div>
<Navbar />
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </div>
  )
}

export default App
