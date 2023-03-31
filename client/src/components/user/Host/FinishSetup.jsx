import React,{useRef ,useEffect} from 'react'

function FinishSetup(){
    const vidRef=useRef();

   useEffect(() => { vidRef.current.play(); },[]);
    return (
        <div className='w-full'>
        <div className=' py-6 md:flex gap-2  mx-6 mt-8 relative'>
        <div className=' flex-col mx-auto bg-red width-full justify-center md:w-3/5 p-32'>
          <h1 className='text-xl font-sans font-bold'>Step 3</h1>
          <h1 className='text-5xl max-width font-semibold mt-3 '>Finish up and publish</h1>
          <h1 className='text-xl text-black-400 font-lg mt-6'>Finally, you’ll choose if you'd like to start with an experienced guest, then you'll set your nightly price. Answer a few quick questions and publish when you're ready.</h1>
        </div>




        <div className='flex mb-5 flex-col mx-16 p-12 mt-[-34px] selection: w-full md:w-2/5 '>
          
            <div className=''>
           

            <video
  src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"
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

export default FinishSetup;