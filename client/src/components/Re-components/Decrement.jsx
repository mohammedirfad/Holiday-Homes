import React from 'react'

function Decrement(props) {
  return (
    <button className='w-7 h-7 justify-center mt-[-4] flex text-gray-500 font-bold -mt-[7px] text-3xl' onClick={props.onClickFunc}>
    -
    </button>
  )
}

export default Decrement
