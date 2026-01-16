import React from 'react'
import LeftContent from './leftContent'
import RightContent from './RightContent'

const Content1 = () => {
  return (
    <div className='flex flex-row h-screen pb-10 w-full'>
      <LeftContent />
        <RightContent />
    </div>
  )
}

export default Content1