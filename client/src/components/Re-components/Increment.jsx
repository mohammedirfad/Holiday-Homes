import React from 'react'

function Increment(props) {
  return (
    <button className='w-7 h-7 justify-center  flex text-gray-500 font-bold ' onClick={props.onClickFunc}>
    +
    </button>
  )
}

export default Increment
