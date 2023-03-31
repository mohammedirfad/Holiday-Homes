import React,{useState} from 'react';


function Additionaltext(){

    const [text, setText] = useState('Youll have a great time at this comfortable place to stay.');
    const [count, setCount] = useState(52);

    const handleTextChange = event => {
       const value = event.target.value;
    
      if (value.length <= 100) {
        setText(value);
        setCount(value.length);
      }
    };

    return(
        <div className='w-full'>
              <div className='justify-center items-center flex flex-col my-16'>
              <div className='justify-center'>
              <h1 className='text-3xl md:text-4xl w-full font-semibold font-sans'>
              Create your description
                </h1>
                <h1 className='tex-2g md:text-xl text-gray-500 mt-5'>
                Share what makes your place special.

                </h1>
                <textarea className='border border-gray-500 w-[40rem] h-48 mt-8 rounded-md' value={text} onChange={handleTextChange} />
                <div className='font-semibold'> {count}/100</div>


              </div>
              </div>
        </div>
    )
}

export default Additionaltext;