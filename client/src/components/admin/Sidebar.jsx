import React,{useState} from 'react';
import { GiBurningForest } from 'react-icons/gi';
import { RxDashboard } from 'react-icons/rx';
import { FiUsers } from 'react-icons/fi';
import { AiOutlinePullRequest } from 'react-icons/ai';



function Sidebar() {
    const [state, setstate] = useState(true)

    // const setup ()=>{

    // }
  return (
    <div className='relative flex'>
    <button className='absolute ml-48 md:hidden mt-6 bg-red reounded-full' onClick={()=>setstate(!false)}>h</button>
    <div className="relative flex-col flex w-52  py-4 ">
    {/* <button className='absolute right-0 text-red ' onClick={()=>setState(true)}>h</button> */}
        <div className='px-4'>
            <a href='' className='flex items-center gap-2'>
               <h2 className='font-bold'><GiBurningForest/></h2>
               <span className='font-bold text-md text-black-500'><span className='text-primary text-xl italic font-black'>H</span>oliday <span className='text-primary italic font-black text-xl'>H</span>omes</span>
               
            </a>
        </div>
        <div className='mt-5 flex items-center justify-center'><p className='text-primary justify-center font-sans text-ellipsis'>-- ADMIN PANEL --</p></div>
        
        <div className='mt-6 flex flex-col gap-3'>
            <div className='flex items-center justify-center gap-1'>
                <div className='flex items-center gap-2'>
                   <RxDashboard/>
                </div>
                <span className='text-md font-md'>Dashborad</span>

            </div>
            <div className='flex items-center justify-center gap-1'>
                <div className='flex items-center gap-2'>
                    <FiUsers/>
                </div>
                <span className='text-md font-md'>Users</span>
                

            </div>
            <div className='flex items-center justify-center gap-1'>
                <div className='flex items-center gap-2'>
                <AiOutlinePullRequest/>
                </div>
                <span>Request</span>
                

            </div>
        </div>
        
              
    
    </div>

    </div>
  )
}

export default Sidebar
