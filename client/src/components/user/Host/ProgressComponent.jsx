import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import {useNavigate} from 'react-router-dom'
import './ProgressBar.css';

function ProgressComponent({link,step}) {

  const navigate = useNavigate()

  console.log(link,"L<<<<<<<<<<<<<<<<<<LLLLLLLLLLLLLL",step )

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  function handleNext() {

    setCurrentStep(currentStep + 1);
    setProgress(progress + (100 / numSteps));
    navigate({link})
  }
  
  function handlePrevious() {
    setCurrentStep(currentStep - 1);
    setProgress(progress - (100 / numSteps));
  }
  const numSteps = 10; 
  return (
   
    
    <div className='bottom-0 relative'>

     
      <ProgressBar progress={progress} numSteps={numSteps} />
      <div className='left-0 bg-primary flex mx-20'>
        {currentStep > 1 && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        
        
      </div>

     <div className='absolute right-0 bg-black flex mx-10 justtify-center mt-5 w-24 h-10 rounded-md'>
     {currentStep < numSteps && (
        <a href={link}>
        <button className='text-white font-lg justify-center item-center mx-8 h-10 mt-0' onClick={handleNext}>Next</button>
        </a>
        )}
     </div>

    </div>
    
    
   
  )
}

export default ProgressComponent