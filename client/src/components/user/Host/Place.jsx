import React, { useState } from 'react';

import {AiOutlineHome} from 'react-icons/ai'


function Place() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        console.log("bdjgsbfugf hur")
      setSelectedOption(event.target.value);
      console.log(selectedOption,"...........................")
    };
    return(
        <div className=''>
            <div className=' items-center flex flex-col mt-6  duration-75 '>
                <div className='justify-center flex delay-1000'>
                    <h1 className='font-semibold text-4xl  font-sans'>Which of these best describes <br></br>your place?</h1>
                </div>
                <div className='flex flex-col gap-3 mt-8 ml-24  h-96'>
                <div className='flex flex-row gap-3'>
                <div className='flex gap-3 border border-gray-300 hover:border-black w-48 h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>House</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Flat"
          checked={selectedOption === 'Flat'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Flat</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Barn"
          checked={selectedOption === 'Barn'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Barn</h1>
                        </button>
                   </div>
                </div>

                <div className='flex flex-row gap-3'>
                <div className='flex gap-3 border border-gray-300 hover:border-black w-48 h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16 justify-center'
                         type="radio"
          value="Cabin"
          checked={selectedOption === 'Cabin'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Cabin</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Motorhome"
          checked={selectedOption === 'Motorhome'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Motorhome</h1>
                        </button>
                   </div>

                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Motorhome"
          checked={selectedOption === 'Motorhome'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Castle</h1>
                        </button>
                   </div>
           
                </div>

                
                <div className='flex flex-row gap-3'>
                <div className='flex gap-3 border border-gray-300 hover:border-black w-48 h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16 justify-center'
                         type="radio"
          value="Cave"
          checked={selectedOption === 'Cave'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Cave</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Tent"
          checked={selectedOption === 'Tent'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Tent</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Hotel"
          checked={selectedOption === 'Hotel'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Hotel</h1>
                        </button>
                   </div>
                </div>

                
                <div className='flex flex-row gap-3'>
                <div className='flex gap-3 border border-gray-300 hover:border-black w-48 h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16 justify-center'
                         type="radio"
          value="Tree house"
          checked={selectedOption === 'Tree house'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Tree house</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Yurt"
          checked={selectedOption === 'Yurt'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Yurt</h1>
                        </button>
                   </div>
                   <div className=' border border-gray-300 hover:border-black w-48  h-24 rounded-md p-4'>
                        <button claasName='flex w-ful p-16'
                         type="radio"
          value="Houseboat"
          checked={selectedOption === 'Houseboat'}
          onChange={handleOptionChange}>
                            <AiOutlineHome className='text-4xl'/>
                            <h1 className='font-semibold text-lg'>Houseboat</h1>
                        </button>
                   </div>
                </div>
               
                 
                 
                </div>
           
            </div>
        </div>

    )
}

export default Place;