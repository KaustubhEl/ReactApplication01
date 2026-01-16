import React, { useState } from 'react'
import { useEffect } from 'react';
const App = () => {


const GetData = async () => {
    const data =await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const response = await data.json();
    console.log(response);
}


    const [num1, setNum1] = useState(0); 
    const [num2, setNum2] = useState(100); 

    const changeNum1 = () => {
        const newLocal = num1 + 1;
        setNum1(newLocal);
        // console.log(typeof num1);
    }

     const changeNum2 = () => {
        setNum2(num2 - 1);
        // console.log(typeof num2);
    }

    useEffect(() => {
        GetData();
    }, [num1]);


  return (
    <div>
      <h1>Welcome to the React Hook Application</h1>
  <div style={{display:'flex'}}>  
    <button onClick={()=>{
        changeNum1();
    }}>Change Num1:</button>
    <h2>{num1}</h2>
    </div>
    <div style={{display:'flex'}}>  
    <button onClick={()=>{
        changeNum2();
    }}>Change Num2:</button>
    <h2>{num2}</h2>
    </div>

    </div>
  )
}

export default App
