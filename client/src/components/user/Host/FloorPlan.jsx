import React ,{useState}from 'react';
import Button from '../../Re-components/Increment'
import Display from '../../Re-components/Display'
import Dbutton from '../../Re-components/Decrement'




function FloorPlan(){
    const [counter, setCounter] = useState(1);
    const [bedroom, setBedroom] = useState(1);
    const [beds, setBeds] = useState(1);
    const [bathroom, setBathrooms] = useState(1);



  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  const incrementCounter1 = () => setBedroom(counter + 1);
  let decrementCounter1 = () => setBedroom(counter - 1);

  const incrementCounter2 = () => setBeds(counter + 1);
  let decrementCounter2 = () => setBeds(counter - 1);

  const incrementCounter3 = () => setBathrooms(counter + 1);
  let decrementCounter3 = () => setBathrooms(counter - 1);



  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
  if(bedroom<=0) {
    decrementCounter1= () => setBedroom(1);
  }
  if(beds<=0) {
    decrementCounter2 = () => setBeds(1);
  }
  if(bathroom<=0) {
    decrementCounter3 = () => setBathrooms(1);
  }
    return(
        <div className='w-full'> 
            <div className='justify-center items-center flex flex-col my-12'>
            <div className='justify-center '>
                <h1 className='text-2xl md:text-3xl font-semibold font-sans '>
                Share some basics about your place
                </h1>
                <h1 className='text-md md:text-lg text-gray-500 mt-2'>You'll add more details later, such as bed types</h1>
                {/* <div className='flex justify-center p-4 '> */}
                <div className=' flex flex-row justify-between gap-4 mx-4 mt-10'>
                    <div className=' justify-center ml-0 text-start'>
                        Guest
                    </div>
                    <div className='flex right-0'>
                    <div className='mx-2 border border-gray-400 rounded-full justify-center'> <Button  className='' onClickFunc={incrementCounter}/></div>
                  <Display message={counter}/>
                  <div className='mx-2 border border-gray-400 rounded-full justify-center'>  <Dbutton onClickFunc={decrementCounter}/></div>
                
                    </div>
                        {/* <div className='border flex flex-col border-gray-700'></div> */}
                    {/* </div> */}
                </div>

                <div className=' flex flex-row justify-between gap-4 mx-4 mt-10'>
                    <div className=' justify-center ml-0 text-start'>
                        Bedrooms
                    </div>
                    <div className='flex right-0'>
                    <div className='mx-2 border border-gray-400 rounded-full justify-center'> <Button  className='' onClickFunc={incrementCounter1}/></div>
                  <Display message={bedroom}/>
                  <div className='mx-2 border border-gray-400 rounded-full justify-center'>  <Dbutton onClickFunc={decrementCounter1}/></div>
                
                    </div>
                        
                    {/* </div> */}
                </div>

                <div className=' flex flex-row justify-between gap-4 mx-4 mt-10'>
                    <div className=' justify-center ml-0 text-start'>
                        Bathrooms
                    </div>
                    <div className='flex right-0'>
                    <div className='mx-2 border border-gray-400 rounded-full justify-center'> <Button  className='' onClickFunc={incrementCounter2}/></div>
                  <Display message={beds}/>
                  <div className='mx-2 border border-gray-400 rounded-full justify-center'>  <Dbutton onClickFunc={decrementCounter2}/></div>
                
                    </div>
                        
                    {/* </div> */}
                </div>

                <div className=' flex flex-row justify-between gap-4 mx-4 mt-10'>
                    <div className=' justify-center ml-0 text-start'>
                        Beds
                    </div>
                    <div className='flex right-0'>
                    <div className='mx-2 border border-gray-400 rounded-full justify-center'> <Button  className='' onClickFunc={incrementCounter3}/></div>
                  <Display message={bathroom}/>
                  <div className='mx-2 border border-gray-400 rounded-full justify-center'>  <Dbutton onClickFunc={decrementCounter3}/></div>
                
                    </div>
                        
                    {/* </div> */}
                </div>
                
            </div>
            <div className='justify-center border-b-2 border-black-400 flex flex-col mt-4'>
              
             
            </div>


            </div>
        
        </div>

    )
}

export default FloorPlan;
      {/* <Increment onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      <Decrement onClickFunc={decrementCounter}/> */}