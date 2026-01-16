import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Components/Form'
import ImageSection from './Components/ImageSection'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='bg-blue-200 p-5 text-center'>
            <h1 className='text-black text-3xl'>Notes Application</h1>
        </div>
      <div className='h-screen flex flex-row'>
       <Form />
       
        </div>
    </>
  )
}

export default App
