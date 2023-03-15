import React from 'react';
import { GiBurningForest } from 'react-icons/gi';

function Sidebar() {
  return (
    <div className="flex">
        <div className='w-48 h-screen '>
            <a href='' className='flex items-center gap-1 '>
               <h3 className='font-bold'><GiBurningForest /></h3>
               <span className='font-bold text-md text-black-500'>Holiday Homes</span>
            </a>
        </div>
        
    </div>
  )
}

export default Sidebar
