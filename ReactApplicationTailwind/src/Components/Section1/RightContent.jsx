import React from 'react'
import Card from './Card'

const RightContent = () => {
var dataArr = [1,2,3];



  return (
    <div className='w-2/3  m-12 text-white rounded-2xl  flex gap-6'>
      <Card profileNum = {dataArr[0]}/>
      <Card profileNum = {dataArr[1]}/>
      <Card profileNum = {dataArr[2]}/>  
    </div>
  )
}

export default RightContent
