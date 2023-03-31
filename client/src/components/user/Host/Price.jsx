import React ,{useState}from 'react';

function Price(){
    const [price,setPrice]=useState(1400);

    const Incrementprice = () => setPrice(price + 1);
    const Decrementprice = () => setPrice(price - 1);

    if(price<=0) {
        Decrementprice = () => setPrice(1);
      }

    return(
        <div className='w-full items-center justify-center'>
       <div className='  flex flex-col my-12 w-[630px] mx-auto'>
       <div className=' '>
       <h1 className='text-2xl md:text-4xl font-semibold font-sans '>
       Now, set your price
                </h1>
                <h1 className='text-xl md:text-xl text-gray-500 mt-2'>You can change it anytime.</h1>


 <div className='w-[630px] bg-gray-200 rounded-md mt-12 border border-black  ustify-between flex flex-row gap-20'>
      <div className='justify-center '>
      <div className='rounded-full flex  items-center  mt-14 justify-center mx-10 my-10 w-[42px] border border-black-500 bg-white h-[42px]' onClick={Decrementprice} >
        <h1 className='text-2xl font-semibold flex  items-center'>
            -
        </h1>

       </div>
      </div>
     <div className='justify-center'>
     <div className='flex mx-10 my-10 mt-14 items-center justify-center'>
       <h1 className='text-4xl font-bold flex  items-center '> ₹{price}</h1> 
       </div>
     </div>
     <div className='justify-center '>
      <div className='rounded-full flex  items-center  mt-14 justify-center mx-10 my-10 w-[42px] border border-black-500 bg-white h-[42px]' onClick={Incrementprice} >
        <h1 className='text-2xl font-semibold flex  items-center'>
            +
        </h1>

       </div>
      </div>

       </div>
       <div className='flex items-center justify-center'>
        <h1 className='font-semibold ml-[-35px]'>per night</h1>
       </div>


       </div>
       
       </div>

        </div>
    )
}

export default Price;