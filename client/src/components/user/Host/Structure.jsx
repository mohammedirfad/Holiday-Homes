import React,{useRef ,useEffect} from 'react'

function Structure() {
  const vidRef=useRef();

   useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div className='w-full'>
        <div className=' py-6 md:flex gap-2  mx-6 mt-8 relative'>
        <div className=' flex-col mx-auto bg-red width-full justify-center md:w-3/5 p-32'>
          <h1 className='text-xl font-sans font-bold'>Step 1</h1>
          <h1 className='text-5xl max-width font-semibold mt-3 '>Tell us about your place</h1>
          <h1 className='text-xl text-black-400 font-lg mt-6'>In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</h1>
        </div>




        <div className='flex mb-5 flex-col mx-16 p-12 mt-[-34px] selection: w-full md:w-2/5 '>
          
            <div className=''>
           

            <video
  src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
  ref={ vidRef }
  muted
  autoPlay
 
/>
            </div>

        </div>
      </div>
      
    </div>
  )
}

export default Structure
