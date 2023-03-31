import React from 'react';

import { GiBurningForest } from 'react-icons/gi';
import { CgHome } from 'react-icons/cg';


function BeHostNav() {
    return (
        <div className=''>

       <header className='mx-auto p-5  items-center justify-between border border-gray-200'>
        <div className="mx-8 flex relative">

          <a href='/home' className=' px-5 flex items-center gap-2 '>
            <h3 className='font-bold '><GiBurningForest className="text-3xl h-8" /></h3>

          </a>
          <button className='mx-auto border border-gray-300 hover:border-black absolute right-0 flex rounded-full justify-center items-center h-9 w-16 '>
<span className='text-black font-semibold mx-1 justify-center items-center '>Exit</span>
          </button>
        </div>
      </header>
           
        </div>
    )
}

export default BeHostNav ;