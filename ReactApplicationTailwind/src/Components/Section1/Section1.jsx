import React from 'react'
import NavBar from './NavBar'
import LeftContent from './leftContent'
import RightContent from './RightContent'
import Content1 from './Content1'

const Section1 = () => {
  return (
    <div id='Section1' className='h-screen w-full flex flex-col'>
           <NavBar />
            <Content1 />
    </div>
  )
}

export default Section1
