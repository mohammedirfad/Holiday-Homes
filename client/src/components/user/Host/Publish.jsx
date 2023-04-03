import React,{useRef ,useEffect} from 'react'


function Publish(){
    const videoRef = useRef(null);
    useEffect(() => { videoRef.current.play(); },[]);
    return(
        <div className='w-full'>
            <div className='md:flex gap-2 relative'>
            <div className=' bg-red width-full justify-center md:w-1/2'>
            <video
        className="w-screen object-cover h-screen"
        src="https://stream.media.muscache.com/aRvUnNwsZ4XCcjkXwSXwP1jcO7oZcLszmCZjN7pbG200.mp4?v_q=high"
        
        ref={videoRef}
        muted
        autoplay
      />
            </div>
                <div className='bg-black flex mb-5   selection: w-full md:w-1/2 justify-center '>
                    <div className=' items-center flex flex-row bg-white justify-center mx-40 h-auto'>
                   <div className='justify-start flex flex-col '>
                   <h1 className='text-black font-semibold text-5xl text-start'>Congratulations,</h1>
                   <h1 className='text-black font-semibold text-5xl text-start mt-2'>Mohammed!</h1>
                   <h1 className='text-black text-lg mt-5  font-normal '>From one Host to another – welcome aboard. Thank you for sharing your home and helping to create incredible experiences for our guests.</h1>
                   </div>
                    </div>
                </div>





            </div>

        </div>
    )
}

export default Publish;

{/* <div className='justify-center flex flex-col items-center'>
<h1 className='text-white font-semibold text-5xl text-start'>Congratulations,</h1>
<div className='justify-start flex flex-col '>
<h1 className='text-white font-semibold text-5xl text-start'>Mohammed!</h1>
</div>

</div> */}