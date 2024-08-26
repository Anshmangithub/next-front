import React from 'react'

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckboxOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className='w-1/5 '>
   <div className='w-full h-10 bg-cyan-50 flex justify-center items-center  '>
     <h3 className='text-3xl font-semibold text-teal-800'>Filter</h3>
   </div>


   <div className='mt-10  w-full h-36 border-b-2 border-cyan-100'>
     <h4 className='text-center text-teal-800 text-xl font-semibold'>Preis</h4>
     
     <div className='w-full h-10 mt-1 flex justify-center items-center relative' > 
        <div className='w-full h-2 bg-cyan-100   ' > </div>
            <div className=' absolute right-28 flex items-center'>
            <div  className="w-5 h-5 relative left-2  bg-cyan-400  rounded-[20px_0px_20px_0px] "></div>
            <div className='w-20 h-2  bg-cyan-400'></div>
            <div  className="w-5 h-5 mr-2 right-2 relative bg-cyan-400  rounded-[20px_0px_20px_0px] "></div>
            </div>
    
            </div>
        <div className='mt-1 flex justify-between gap-3 h-8'>
            <div className='w-1/2 rounded-lg bg-slate-100 p-1 '>
            <h3 className='text-xl mx-1 text-slate-500'>5 €</h3>
            </div>
            <h5 className='text-2xl'>-</h5>
            <div className='w-1/2 rounded-lg bg-slate-100 p-1 '>
            <h3 className='text-xl mx-1 text-slate-500'>10 €</h3>
            </div>
        </div>
   </div>


   <div className='mt-8 w-full h-72 border-b-2 border-cyan-100 '>
    <div className='flex'>
  <div className='flex justify-center w-full'>
    <h4 className=' text-cyan-800 text-2xl'>Hersteller</h4>
    </div>
    <IoIosArrowUp className='size-7 text-cyan-200 mt-1 '  />
   </div>
    <ul className='p-4'>
        <div className='flex items-center gap-3  '>
        <MdCheckBoxOutlineBlank className='text-cyan-300 size-5'/>
        <li className='text-teal-800 font-semibold'>ADREXpharma</li>
        </div>
        <div className='flex items-center gap-3 mt-2 '>
        <MdCheckBoxOutlineBlank className='text-cyan-300 size-5'/>
        <li className='text-teal-800 font-semibold'>Aurora</li>
        </div>
        
        <div className='flex items-center gap-3 mt-2' >
        <IoCheckboxOutline className='text-cyan-300 size-5'/>
        <li className='text-teal-800 font-semibold'>Avaay</li>
        </div>
        <div className='flex items-center gap-3 mt-2'>
        <IoCheckboxOutline className='text-cyan-300 size-5'/>
        <li className='text-teal-800 font-semibold'>Bedrocan</li>
        </div>
        <div className='flex items-center gap-3 mt-2'>
        <MdCheckBoxOutlineBlank className='text-cyan-300 size-5'/>
        <li className='text-teal-800 font-semibold'>Cannamedical</li>
        </div>
       </ul>

       <button className='w-full h-10 border-yellow-200 border-2 rounded-[20px_0px_20px_0px] '>
        <h3 className='text-teal-700'>mehr anzeigen</h3>
       </button>
   </div>

   <div className='mt-10  w-full h-36 border-b-2 border-cyan-100'>
     <h4 className='text-center text-teal-800 text-xl font-semibold'>THC Gehalt</h4>
     
     <div className='w-full h-10 mt-1 flex justify-center items-center relative' > 
        <div className='w-full h-2 bg-cyan-100   ' > </div>
            <div className=' absolute right-28 flex items-center'>
            <div  className="w-5 h-5 relative left-2  bg-cyan-400  rounded-[20px_0px_20px_0px] "></div>
            <div className='w-20 h-2  bg-cyan-400'></div>
            <div  className="w-5 h-5 mr-2 right-2 relative bg-cyan-400  rounded-[20px_0px_20px_0px] "></div>
            </div>
    
            </div>
        <div className='mt-1 flex justify-between gap-3 h-8'>
            <div className='w-1/2 rounded-lg bg-slate-100 p-1 '>
            <h3 className='text-xl mx-1 text-slate-500'>11 %</h3>
            </div>
            <h5 className='text-2xl'>-</h5>
            <div className='w-1/2 rounded-lg bg-slate-100 p-1 '>
            <h3 className='text-xl mx-1 text-slate-500'>18 %</h3>
            </div>
        </div>
   </div>

   <div className='mt-10  w-full h-36 border-b-2 border-cyan-100'>
     <h4 className='text-center text-teal-800 text-xl font-semibold'>CBD Gehalt</h4>
     
     <div className='w-full h-10 mt-1 flex justify-center items-center relative' > 
        <div className='w-full h-2 bg-cyan-100   ' > </div>
       
            <div className=' absolute right-28 flex items-center'>
            <div  className="w-5 h-5 relative left-2  bg-cyan-400  rounded-[20px_0px_20px_0px] "></div>
            <div className='w-20 h-2  bg-cyan-400'></div>
            <div  className="w-5 h-5 mr-2 right-2 relative bg-cyan-400  rounded-[20px_0px_20px_0px] "></div>
            </div>
    
            </div>
        <div className='mt-1 flex justify-between gap-3 h-8'>
            <div className='w-1/2 rounded-lg bg-slate-100 p-1 '>
            <h3 className='text-xl mx-1 text-slate-500'>1 %</h3>
            </div>
            <h5 className='text-2xl'>-</h5>
            <div className='w-1/2 rounded-lg bg-slate-100 p-1 '>
            <h3 className='text-xl mx-1 text-slate-500'>5 %</h3>
            </div>
        </div>
   </div>

   
   <div className='mt-10  w-full h-36 border-b-2 border-cyan-100'>
     <h4 className='text-center text-teal-800 text-xl font-semibold'>Genetik</h4>
     
     <div className='w-full h-9 mt-4 flex justify-between gap-1'>
     <div className='w-1/3 bg-cyan-300 rounded-md flex justify-center items-center'>
     <h4 className='text-white'>Indica</h4>
     </div>
     <div className='w-1/3 bg-blue-100 rounded-md flex justify-center items-center'>
     <h4 className='text-teal-800 font-semibold'>Sativa</h4>
     </div>
     <div className='w-1/3 bg-blue-100 rounded-md flex justify-center items-center'>
     <h4 className='text-teal-800 font-semibold'>Hybrid</h4>
     </div>
     </div>
         
   </div>

   <div className='mt-10  w-full h-36 border-b-2 border-cyan-100'>
     <h4 className='text-center text-teal-800 text-xl font-semibold'>Bestrahltung</h4>
     
     <div className='w-full h-9 mt-4 flex justify-between gap-1'>
     <div className='w-1/2 bg-cyan-300 rounded-md flex justify-center items-center'>
     <h4 className='text-white'>bestrahlt</h4>
     </div>
     <div className='w-1/2 bg-blue-100 rounded-md flex justify-center items-center'>
     <h4 className='text-teal-800 font-semibold'>nicht bestrahlt</h4>
     </div>
     </div>
     </div>

    <div className='w-full h-16 border-b-2 mt-6 border-cyan-100'>

    <div className='flex'>
  <div className='flex justify-center w-full'>
    <h4 className=' text-cyan-800 text-2xl'>Terpene</h4>
    </div>
    <IoIosArrowDown className='size-7 text-cyan-200 mt-1 '  />
   </div>
    </div>

    <div className='w-full h-16 flex justify-center items-center'>
        <div className='flex items-center gap-2 '>
        <RxCross2 className='text-cyan-400 size-5' />
        <h4 className='text-black font-semibold'>alle Filter zurücksetzen</h4>
        </div>
    </div>
    </div>
  )
}

export default Sidebar