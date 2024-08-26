import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const PageArrow = () => {
  return (
    <div className='relative mt-3'>
    <div className=' w-60 h-7 absolute right-0  '>
        <div className='flex justify-between items-center'>
    <FaArrowLeftLong  className='size-6 text-cyan-200'/>
    <h4 className='text-xl text-teal-900 font-bold'>1</h4>
    <h4 className='text-xl text-teal-900 font-bold'>2</h4>
    <h4 className='text-xl text-teal-900 font-bold'>3</h4>
    <BsThreeDots className='text-xl text-teal-900 font-bold mt-3'/>
    <h4 className='text-xl text-teal-900 font-bold'>12</h4>
    <FaArrowRightLong className='size-6 text-cyan-200' />
    </div>
    </div>
    </div>
  )
}

export default PageArrow