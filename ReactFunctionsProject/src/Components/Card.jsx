import React from 'react'

const Card = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-between shadow-md">
    <div className="overflow-hidden rounded-t-lg">
    <img className='w-full h-fit rounded-sm' src="https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image" />
    </div>
     <div className="p-4">
       <h2 className="text-xl font-semibold mb-2 bg-white rounded-full text-black">1</h2>
      <p className="text-gray-600">This is a sample card component.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Satisfied</button>
    </div>
   </div>
  )
}

export default Card
