import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className='w-full  flex  h-10 items-center  '>
        <div className='border w-96 rounded-3xl bg-blue-100 flex justify-between items-center h-full mx-6' >
            
            <h4 className='mx-3 text-lg text-cyan-400'>Suchen</h4> 
        <IoIosSearch className='mr-3 size-6 text-cyan-400'  /> 
        </div>
        <div className='flex justify-around w-3/5 '>
         <div className='flex gap-2 items-center  ' >
        <div  className="w-5 h-5 bg-cyan-200  rounded-[20px_0px_20px_0px] "></div>
        <h4 className='text-cyan-400 hover:font-bold text-lg'>Rezept einlösen</h4>
        </div>

        <div className='flex gap-2'>
        <div  className="w-5 h-5 bg-cyan-200 rounded-[20px_0px_20px_0px] "></div>
        <h4 className='text-cyan-400  hover:font-bold text-lg'>Videosprechstunde</h4>
        </div>

        <div className='flex gap-2'>
        <div  className="w-5 h-5 bg-cyan-200 rounded-[20px_0px_20px_0px] "></div>
        <h4 className='text-cyan-400 hover:font-bold text-lg'>FAQs</h4>
        </div>

        <div className='flex gap-2'>
        <div  className="w-5 h-5 bg-cyan-200 rounded-[20px_0px_20px_0px] "></div>
        <h4 className='text-cyan-400 hover:font-bold text-lg'>Kontakt</h4>
        </div>
        </div>  
       <div className=' flex justify-between gap-5 h-full items-center'>
       <BsCart2 className='text-cyan-200 size-7 '/>
       <div className='w-40 bg-yellow-100  h-full rounded-[20px_0px_20px_0px] flex justify-center '>
       <h4 className='text-center mt-2 hover:font-bold'>Almenden</h4>
       </div>
       </div>   
    </div>
  )
}

export default Navbar