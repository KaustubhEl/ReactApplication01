import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const App = () => {

    const [currentPage, setCurrentPage] = useState(1)


const [finalData, setFinalData] = useState([])
const emptyData = "Loading..."

useEffect(() => {   
    getData();
},[currentPage])

const getData = async () => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=15`)
        // const data = await response.json()
       
        setFinalData(response.data)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Welcome to the React Gallery Project</h1>
    <div className='flex flex-wrap'>
      {finalData.length === 0 ? (
        <p>{emptyData}</p>
      ) : (
        finalData.map((item) =>{ 
            debugger;   
            return(
          <div key={item.id} className="p-2">
            <a href={item.url} target="_blank">

            <img src={item.download_url} alt={item.author} className="object-cover h-50 w-70 rounded" />
            </a>
            <p className="text-center mt-2 font-bold">Photo by: {item.author}</p>
          </div>
        )})
      )}
    </div>
    <div className="flex justify-center items-center mt-8 gap-4">
       <button
       style={{opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer'}}
       onClick={()=>{
        if(currentPage > 1)
            {
            setCurrentPage(currentPage - 1)
        }
       }}
       className="active:scale-95 bg-blue-500 text-white font-bold py-2 px-4 rounded ">Prev</button>
       <h2 className="mx-2 font-bold">Page:{currentPage}</h2>
       <button 
       onClick={()=>{
        setCurrentPage(currentPage + 1)
       }}
       className="active:scale-95 bg-blue-500 text-white font-bold py-2 px-4 rounded">Next</button>
        </div>
    </div>
  )
}

export default App
