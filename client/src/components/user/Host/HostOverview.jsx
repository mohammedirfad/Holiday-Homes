import React, { useState } from 'react';
import overview1 from '../../../../src/Asset/overview1.jpeg';
import overview2 from '../../../../src/Asset/overview2.jpeg';
import overview3 from '../../../../src/Asset/overview3.jpeg';
import {useNavigate} from 'react-router-dom'

function HostOverview() {
  const Navigate = useNavigate()
  return (
    <div className='w-full'>


      <div className=' py-6 md:flex gap-2  mx-6 mt-8 relative'>
        <div className='mx-auto bg-red width-full justify-center md:w-1/2 p-32'>
          <h1 className='text-5xl font-sans font-bold'>It’s easy to get started on Holiday Homes</h1>

        </div>

        <div className='flex mb-5 flex-col mx-16 p-12 mt-[-34px] selection: w-full md:w-1/2 '>
            <div className='flex gap-3'>
              <div className='flex gap-3 text-2xl font-semibold'>1</div>
               <div className='flex flex-col gap-3'>
                <h1 className='text-2xl  font-sans font-semibold flex'>Tell us about your place</h1>
                <h3 className='text-xl font-sans font-lg text-gray-500'>Share some basic info, such as where it is and how many guests can stay.</h3>
               </div>
               <div className='flex justify-center'>
                <img className='h-36 w-36 justify-center mt-[-5px]' src={overview1} alt="setuping" ></img>
               </div>
            </div>
            <div className='border-b-2 border-gray-200'></div>
            <div className='flex gap-3 mt-3'>
              <div className='flex gap-3 text-2xl font-semibold'>2</div>
               <div className='flex flex-col gap-3'>
                <h1 className='text-2xl  font-sans font-semibold flex'>
Make it stand out</h1>
                <h3 className='text-xl font-sans font-lg text-gray-500'>Add 5 or more photos plus a title and description – we’ll help you out.</h3>
               </div>
               <div className='flex justify-center'>
                <img className='h-36 w-40 justify-center mt-[-5px]' src={overview2} alt="setuping" ></img>
               </div>
            </div>
            <div className='border-b-2 border-gray-200'></div>
            <div className='flex gap-3 mt-3'>
              <div className='flex gap-3 text-2xl font-semibold'>3</div>
               <div className='flex flex-col gap-3'>
                <h1 className='text-2xl  font-sans font-semibold flex'>
Finish up and publish</h1>
                <h3 className='text-xl font-sans font-lg text-gray-500'>Choose if you'd like to start with an experienced guest, set a starting price and publish your listing.</h3>
               </div>
               <div className='flex justify-center'>
                <img className='h-36 w-40 justify-center mt-[-5px]' src={overview3} alt="setuping" ></img>
               </div>
            </div>
            <div className='border-b-2 border-gray-200'></div>

        </div>
      </div>

      <div className='border border-gray-200 h-2 mt-[-14px] bg-gray-300'></div>
      <button className=' bg-primary text-white absolute right-0 rounded-md mt-4 justify-center mx-10  w-40 h-11 font-semibold' onClick={()=>Navigate('/become-a-host/about-your-place')}>Get Started</button>

    </div>
  )
}

export default HostOverview