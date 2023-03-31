import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { IoHomeOutline } from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'

function BeHostBdy() {
    const navigate=useNavigate();
        return (

        <div class="flex justify-center mt-4">
            <div className=''>
                <div className="font-semibold text-4xl font-sans leading-9 mt-6">Welcome, Mohammed</div>
                <div className='font-semibold text-2xl font-sans leading-9 mt-4'>Finish your listing</div>
                <div className="mt-4">
                    Opps! no listing created .....
                </div>



                <div className=''>
                    <h1 className='font-semibold text-2xl font-sans leading-9 mt-8'>Start a new listing</h1>
                    <div className='mt-4 border-b-2 border-gray-400 flex p-4 'onClick={()=>navigate('/become-a-host/Overview')} >

                        <IoHomeOutline className='text-4xl ml-[-12px] ' /> <span className='justify-center ml-6 text-lg text-black-400 mt-2'  > Create a new listing </span>

                        <div className='right-0 justify-center flex '><MdOutlineArrowForwardIos className='text-lg mt-4 relative flex left-32' /></div>
                    </div>

                    <div className='mt-2 border-b-2 border-gray-400 flex p-4'>

                        <IoHomeOutline className='text-4xl ml-[-12px] ' /> <span className='justify-center ml-6 text-lg text-black-400 mt-2' onClick> Duplicate the listing </span>

                        <div className='right-0 justify-center flex '><MdOutlineArrowForwardIos className='text-lg mt-4 relative flex left-32' /></div>
                    </div>
                </div>

            </div>
        </div>







    )
}

export default BeHostBdy