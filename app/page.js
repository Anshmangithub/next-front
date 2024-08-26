"use client"
import Navbar from '@/components/Navbar'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
import { TfiMenuAlt } from "react-icons/tfi";
import Sidebar from '@/components/Sidebar';
import Medicine from '@/components/Medicine';
import PageArrow from '@/components/PageArrow';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <>
    <div className='container p-14'>
   <Navbar/>

  {/* 1st part */}
<div className='flex justify-between  '>
   <div className='mt-20 w-1/3 flex justify-between items-center  h-8'>
  <h4 className='text-cyan-300 text-lg font-semibold'>Home</h4>
  <FaArrowRightLong className='size-5 text-cyan-200' />
  <h4 className='text-cyan-300 text-lg font-semibold'>Livebestand</h4>
  <FaArrowRightLong className='size-5 text-cyan-200'  />
  <h4 className='text-cyan-800 text-lg font-bold'>Cannabis Blüten</h4>
  </div>

  <div className='mt-20 w-1/6  h-20'>
  <h4 className='text-center mb-1 text-cyan-300'>GKV mit Kostenübernahme?</h4>
  <div className=' h-12 rounded-[20px_0px_20px_0px] border-solid border-2 border-cyan-300 '>
    <h4 className='text-center mt-2 text-lg text-cyan-300'>Preisoptionen</h4>
  </div>
  </div>
   </div>
   
  {/* 2nd part  */}
<div className='flex justify-between'>
  <div className='flex w-40 h-12 mt-5 items-center' >
  <div  className="w-6 h-6 bg-cyan-400  rounded-[20px_0px_20px_0px] mx-2"></div>
  <h1 className='text-4xl text-cyan-800 font-semibold'>Blüten</h1>
  </div>

  <div className='w-3/5 h-10 mt-6  flex justify-between' >
  <div className='border w-80 rounded-3xl bg-slate-200 flex justify-between items-center h-full ' >
            <h4 className='mx-3 text-lg text-cyan-400'>Suchen</h4> 
        <IoIosSearch className='mr-3 size-6 text-cyan-400'  /> 
        </div>

        <div className='w-40 bg-blue-100 h-full rounded-sm  flex'>
          <h4 className='text-cyan-700 text-lg font-semibold mx-2 mt-1' >Sortieren nach</h4>
          <IoIosArrowDown className='size-5 text-teal-800 mt-2'  />
        </div>

        <div className='w-48 bg-blue-100 h-full rounded-sm  flex'>
          <h4 className='text-cyan-700 text-lg font-semibold mx-4 mt-1' >Verfügbarkeit</h4>
          <RxSwitch className='size-6 text-teal-800 mt-2 mx-2'  />
        </div>

        <div className='w-14  bg-blue-100 h-full rounded-sm flex items-center justify-center'>
        <TfiMenuAlt className='size-7 text-teal-800 '/>
        </div>
  </div>
  </div>

 <div className='flex justify-between mt-20 gap-28'>
 <Sidebar/>
 <Medicine/>
 </div>
 <PageArrow/>
   </div>
   <div className='w-full'>
    <Footer/>
   </div>
   </>

  )
}
