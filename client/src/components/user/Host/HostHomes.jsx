import React, { useState } from 'react';
import { CgHome } from 'react-icons/cg';
import { GiBurningForest } from 'react-icons/gi';
import 'mapbox-gl/dist/mapbox-gl.css';
import Location from '../Host/Location';
import host from '../../../Asset/host.jpg';
import {useNavigate} from 'react-router-dom'



function HostHomes() {
  const Navigate = useNavigate()
  const [open , setOpen] = useState(false)

  return (
    <div className='w-full '>
      <header className='mx-auto p-5  items-center justify-between border border-gray-200'>
        <div className="mx-10 flex relative">

          <a href='/home' className=' px-5 flex items-center gap-2 '>
            <h3 className='font-bold '><GiBurningForest className="text-3xl h-8" /></h3>
            <span className='font-bold text-3xl text-rose-500 hidden sm:block'>Holiday Homes</span>
          </a>
          <button className='bg-button border border-gray absolute right-0 hidden sm:flex rounded-md h-3rem -mt-2 justify-center items-center w-48'>
            <CgHome className="mx-1 text-2xl text-white h-8 justify-center items-center " /><span className='text-white font-bold mx-1 justify-center items-center 'onClick={()=>Navigate('/become-a-host')}>Holiday Setup</span>
          </button>
        </div>
      </header>



      <div className=' py-6 md:flex gap-2  mx-6 mt-8 relative'>
        <div className='mx-auto bg-red width-full justify-center md:w-1/2 p-32'>
          <div className='bg-red justify-center items-center flex '>
            <a href='/home' className=' px-5 flex justify-center items-center gap-2'>
              <span className='font-bold text-3xl text-rose-500 font-sans'>Holiday Homes</span>
            </a>

          </div>
          <div className='flex justify-center md:justify-center'>
            <h1 className='font-semibold text-5xl font-sans'>You could earn</h1>
          </div>
          <div className='flex justify-center md:justify-center'>
            <h1 className='font-bold text-5xl mt-4 '>₹ 4000</h1>
          </div>
          <div className='flex justify-center md:justify-center'>

          </div>
        </div>

        <div className='flex mx-auto  w-full md:w-1/2 '>
          <div className='bg-red'>
            <Location className="rounded-full" />
          </div>

        </div>
      </div>


      <div className='justify-center items-center md:flex mt-7'>
        <h1 className='justify-center items-center px-6 font-bold text-2xl md:text-5xl leading-10'>Setup Home with Holiday-Homes</h1>
      </div>
      <div className='mx-auto p-5 mt-5 object-cover'>
        <img src={host} alt="host image" className='object-cover h-full w-full'></img>

      </div>
      <div className='p-10  mx-10 sm:flex sm:justify-center sm:items-center justify-center items-center gap-5'>
        <div className='mx-auto items-center mb-5'>
          <h1 className='text-xl font-semibold'>One-to-one guidance from a Superhost</h1>
          <p className='w-auto'>We’ll match you with a Superhost in your area, who’ll guide you  from your first question to your first guest – by phone, video call or chat.</p>
        </div>

        <div className='mx-auto items-center mb-5'>
          <h1 className='text-xl font-semibold'>One-to-one guidance from a Superhost</h1>
          <p className=''>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
        </div>

        <div className='mx-auto items-center mb-5'
        ><h1 className='text-xl font-semibold'>One-to-one guidance from a Superhost</h1>
          <p className='flex-wrap'>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
        </div>
      </div>

      <div className='justify-center items-center flex-col mb-6'>
        <h1 className='text-2xl font-semibold items-center flex justify-center mt-3 mb-4'>Ready to get started ?</h1>
        <div className='justify-center flex'>
          <button className='bg-button border border-gray flex rounded-md h-3rem mt-2 justify-center items-center w-48 mt-2'>
            <CgHome className="mx-1 text-2xl text-white h-8 justify-center items-center " /><span className='text-white font-bold mx-1 justify-center items-center '>Holiday Setup</span>
          </button>
        </div>

      </div>
    </div>

  )

}

export default HostHomes