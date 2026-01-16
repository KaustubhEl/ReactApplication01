import React, { useEffect, useState } from 'react'

// REMOVED 'async' keyword here
const App = () => { 
    localStorage.setItem('name', 'Kaustubh Borse');
    localStorage.setItem('Age', '25');
    localStorage.removeItem('name');
    const userName = localStorage.getItem('name') || 'Guest';
    const Age = localStorage.getItem('Age');
    localStorage.clear();


const Data = [{"name":"Kaustubh Borse","age":"25"},{"name":"Omkar Lande","age":"27"},{"name":"Bhushan Darekar","age":"28"}]
   const FinalData = JSON.stringify(Data);
localStorage.setItem('userData', FinalData);

  return (
    <div className='p-5'>
      <h2 className='text-xl font-bold mb-4'>Local Storage Data</h2>
      <h2 className='text-xl font-bold mb-4'>User Name: {userName},{Age}</h2>
    </div>
  )
}

export default App