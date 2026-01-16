import React, { useContext } from 'react'
import { context } from '../Context/ThemeContext'

const Navbarright = () => {

const [theme, setTheme] = useContext(context)


// console.log(data[0]);

  return (
    <div className='flex gap-5 pr-5'>
     <h2>Theme :{theme}</h2>
   
    </div>
  )
}

export default Navbarright
