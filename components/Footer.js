import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 bg-teal-600 h-52 px-14 py-5 flex' >
        <div className='w-28 h-14  mt-10 mx-5 whitespace-pre' >
          <h5 className="text-xs mt-2 text-white font-light opacity-75">AGB</h5>
          <h5 className="text-xs mt-2 text-white font-light opacity-75">Impressum</h5>
          <h5 className="text-xs mt-2 text-white font-light opacity-75">Datenschutz</h5>
        </div>

        <div className='w-96 h-40 mx-40 mt-5'>
          <div className='w-3/4 h-12   flex justify-between items-center'>
            <div className='flex gap-2' >
          <div  className="w-5 h-5 bg-cyan-500  rounded-[20px_0px_20px_0px] "></div>
            <h4 className='text-lg text-white font-light '>Rezept einlösen</h4>
            </div>

            <div className='flex gap-2' >
          <div  className="w-5 h-5 bg-cyan-500  rounded-[20px_0px_20px_0px] "></div>
            <h4 className='text-lg text-white font-light '>Live Bestand</h4>
            </div>
           
          </div>
          <div className='w-full h-12 mt-4  flex justify-between items-center'>
          <div className='flex gap-2' >
          <div  className="w-5 h-5 bg-cyan-500  rounded-[20px_0px_20px_0px] "></div>
            <h4 className='text-lg text-white font-light '>Videosprechstunde</h4>
            </div>
            <div className='flex gap-2' >
          <div  className="w-5 h-5 bg-cyan-500  rounded-[20px_0px_20px_0px] "></div>
            <h4 className='text-lg text-white font-light '>FAQs</h4>
            </div>

            <div className='flex gap-2' >
          <div  className="w-5 h-5 bg-cyan-500  rounded-[20px_0px_20px_0px] "></div>
            <h4 className='text-lg text-white font-light '>Kontakt</h4>
            </div>
          </div>
        </div>

        <div className='w-40 h-36  mt-6 -mx-20'>
             <h6 className='text-xs opacity-75 font-light text-white'>Standort</h6>
             <h3 className='text-white font-semibold mt-3 '>Bergstraße 49 - 57 69469 Weinheim (3 Glocken Quartier)</h3>
        </div>
        <div className="w-28 h-20  mt-5 mx-36">
          <h6 className='text-xs opacity-75 font-light text-white'>Telefon</h6>
          <h3 className='text-white font-semibold mt-3 '>0223 545 5250</h3>
        </div>

        <div className='w-52 h-32  mt-5 -mx-14'>
          <h6 className='text-xs opacity-75 font-light text-white'>Öffnungszeiten</h6>
          <h6 className='text-xs opacity-75 font-light text-white mt-2'>Mo-Fr</h6>
          <h3 className='text-white font-semibold mt-2 '>09:00 – 18:00 Uhr</h3>
          <h6 className='text-xs opacity-75 font-light text-white mt-2'>Sa</h6>
          <h3 className='text-white font-semibold mt-2 '>09:00 – 14:00 Uhr</h3>
        </div>
    </div>
  )
}

export default Footer