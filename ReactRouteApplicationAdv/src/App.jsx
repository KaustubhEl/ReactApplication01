import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/aboutus'
import Contact from './pages/contact'
import Products from './pages/Products'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import NotFound from './pages/NotFound'
import DynamicPage from './pages/DynamicPage'


const App = () => {
  return (
    <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<DynamicPage />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/products" element={<Products />}>
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
            <Route path="kids" element={<Kids />} />
            </Route>
          </Routes>
          <Footer />
    </div>
  )
}

export default App