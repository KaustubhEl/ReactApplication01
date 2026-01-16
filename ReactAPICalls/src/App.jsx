import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [data, setData] = useState('')


    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        const afterData = await response.json()
        // setData(afterData)
        console.log(afterData);
    }

     const getAllData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response);
         const afterData = await JSON.stringify(response)
        setData(afterData)
        console.log(afterData);
    }



  return (
    <div>
      <h1>Welcome to React API Calls App</h1>
      <h2>Data from API:</h2>
      <p>{data}</p>
      <button onClick={getData}>Get Data</button>
      <button onClick={getAllData}>Get Axios Data</button>
    </div>
  )
}

export default App