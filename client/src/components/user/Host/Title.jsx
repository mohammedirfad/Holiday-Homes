import React,{useState} from 'react';


function Title(){
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

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
              <h1 className='text-2xl md:text-3xl font-semibold font-sans'>
              Now, let's give your casa particular a title
                </h1>
                <h1 className='tex-lg md:text-lg text-gray-500 mt-5'>
                Short titles work best. Have fun with it – you can always change it later.

                </h1>
                <textarea className='border border-gray-500 w-full h-40 mt-8 rounded-md' value={text} onChange={handleTextChange} />
                <div className='font-semibold'> {count}/100</div>


              </div>
              </div>
        </div>
    )
}

export default Title;