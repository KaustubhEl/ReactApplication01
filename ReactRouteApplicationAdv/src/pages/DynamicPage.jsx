import React from 'react'
import { useParams } from 'react-router-dom'

const DynamicPage = () => {
    const data = useParams();
    console.log(data);
  return (
    <div>
      <h1>Dynamic Page of {data.id}</h1>
    </div>
  )
}

export default DynamicPage