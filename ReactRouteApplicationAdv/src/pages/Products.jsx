import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Our Products</h1>
      <p>Explore our wide range of products.</p>
    <div className='flex justify-center gap-6 mt-4 text-xl font-bold'>
      <Link to="/products/mens" >Men's Collection</Link>
      <Link to="/products/womens" >Women's Collection</Link>
      <Link to="/products/kids" >Kid's Collection</Link>

    </div>
    <Outlet/>
    </div>
  )
}

export default Products