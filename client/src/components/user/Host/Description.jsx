import React,{useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {RiFootprintLine} from 'react-icons/ri'
import {GiEvilTower} from 'react-icons/gi'
import {MdFamilyRestroom} from 'react-icons/md'
import {SiStylelint} from 'react-icons/si'
import {GoLocation} from 'react-icons/go'
import {TbBrandSpacehey} from 'react-icons/tb'




function Description(){
//     const [selectedButtons, setSelectedButtons] = useState([]);

//     const handleButtonClick = buttonValue => {
//   if (selectedButtons.length < 2 || selectedButtons.includes(buttonValue)) {
//     const newSelectedButtons = selectedButtons.includes(buttonValue)
//       ? selectedButtons.filter(button => button !== buttonValue)
//       : [...selectedButtons, buttonValue];
//     setSelectedButtons(newSelectedButtons);
//   }
// };
const [selectedOption, setSelectedOption] = useState('');

const handleOptionChange = (event) => {
    console.log("bdjgsbfugf hur")
  setSelectedOption(event.target.value);
  console.log(selectedOption,"...........................")
};
    return(
        <div className='w-full'>
            <div className='justify-center items-center flex flex-col my-16'>
            <div className='justify-center'>
            <h1 className='text-2xl md:text-3xl font-semibold font-sans'>
                  Next, let's describe your casa particular </h1>
            <h1 className='tex-lg md:text-lg text-gray-500'>
                Choose up to 2 highlights. We'll use these to get your description started.</h1>






{/*            
                /* {[  { value: 'Button 1' },  { value: 'Button 2' },  { value: 'Button 3' },  { value: 'Button 4' },].map(button => (
  {/* <button
    key={button.value}
    onClick={() => handleButtonClick(button.value)}
    className={selectedButtons.includes(button.value) ? 'selected' : ''}
  >
    {button.value}
  </button>
))} */}
            


            </div>
            <div className='flex flex-col gap-3 mt-8 ml-24 '>
            <div className='flex flex-row gap-3 ml-[-43px]'>
                <div className='flex flex-col gap-3 border border-gray-300 hover:border-black w-48 h-12 rounded-full p-4'>
                        <button claasName='flex flex-row w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <RiFootprintLine className='text-xl'/>
                            <h1 className='font-semibold text-lg mt-[-23px]'>Peacefull</h1>
                        </button>
                   </div>
                   <div className='flex flex-col gap-3 border border-gray-300 hover:border-black w-48 h-12 rounded-full p-4'>
                        <button claasName='flex flex-row w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <GiEvilTower className='text-xl'/>
                            <h1 className='font-semibold text-lg mt-[-23px]'>Unique</h1>
                        </button>
                   </div>
                   <div className='flex flex-col gap-3 border border-gray-300 hover:border-black w-48 h-12 rounded-full p-4'>
                        <button claasName='flex flex-row w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <MdFamilyRestroom className='text-xl'/>
                            <h1 className='font-semibold text-lg mt-[-23px]'>Family-freindly</h1>
                        </button>
                   </div>
                </div>



                <div className='flex flex-row gap-3 mt-4 ml-[-43px]'>
                <div className='flex flex-col gap-3 border border-gray-300 hover:border-black w-48 h-12 rounded-full p-4'>
                        <button claasName='flex flex-row w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <SiStylelint className='text-xl'/>
                            <h1 className='font-semibold text-lg mt-[-23px]'>Stylish</h1>
                        </button>
                   </div>
                   <div className='flex flex-col gap-3 border border-gray-300 hover:border-black w-48 h-12 rounded-full p-4'>
                        <button claasName='flex flex-row w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <TbBrandSpacehey className='text-xl'/>
                            <h1 className='font-semibold text-lg mt-[-23px]'>Spacious</h1>
                        </button>
                   </div>
                   <div className='flex flex-col gap-3 border border-gray-300 hover:border-black w-48 h-12 rounded-full p-4'>
                        <button claasName='flex flex-row w-ful p-16 justify-center
                        ' type="radio"
          value="House"
          checked={selectedOption === 'House'}
          onChange={handleOptionChange}>
                            <GoLocation className='text-xl'/>
                            <h1 className='font-semibold text-lg mt-[-23px]'>Centrel</h1>
                        </button>
                   </div>
                </div>
            </div>

          
               
               




            </div>

        </div>
    )
}

export default Description;