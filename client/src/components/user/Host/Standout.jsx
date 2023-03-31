import React,{useRef ,useEffect} from 'react'

function Standout(){
    const vidRef=useRef();

   useEffect(() => { vidRef.current.play(); },[]);
    return (
        <div className='w-full'>
        <div className=' py-6 md:flex gap-2  mx-6 mt-8 relative'>
        <div className=' flex-col mx-auto bg-red width-full justify-center md:w-3/5 p-32'>
          <h1 className='text-xl font-sans font-bold'>Step 2</h1>
          <h1 className='text-5xl max-width font-semibold mt-3 '>Make your place <br></br> stand out</h1>
          <h1 className='text-xl text-black-400 font-lg mt-6'>In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then you’ll create a title and description.</h1>
        </div>




        <div className='flex mb-5 flex-col mx-16 p-12 mt-[-34px] selection: w-full md:w-2/5 '>
          
            <div className=''>
           

            <video
  src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high"
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

export default Standout;