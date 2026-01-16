import React from 'react'
import { useContext } from 'react'
import { context } from '../Context/ThemeContext'

const Changebutton = () => {
const [theme , setTheme] = useContext(context)



  return (
    <div className='flex justify-center'>
          <button onClick={()=>{
            if(theme == 'light')
            setTheme('dark')
            else
            setTheme('light')
          }} className='active:scale-95 text-white p-4 text-xl rounded-md'>Change Theme</button>
    </div>
  )
}

export default Changebutton