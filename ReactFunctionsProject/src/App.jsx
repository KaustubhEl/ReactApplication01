import React from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Components/Card'
import { useState } from 'react'

const App = () => {

      const [name, setName] = useState("")

     

       const SubmitForm = (e) => {
        e.preventDefault();
        console.log("Submitted Name: ", name);
      }



  return (
    <div >
        <form onSubmit={(e) => {
            SubmitForm(e)
        }} className='Container'>
         <label className='field'>
            Name: 
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
         </label>
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button>
        </form>
      </div>
  )
}

export default App
