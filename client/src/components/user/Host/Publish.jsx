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

            </div>

        </div>
    )
}

export default Publish;