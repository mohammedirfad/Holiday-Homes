import React, {useState} from 'react';
import Modal from '../Re-components/Modal.jsx'

function Test() {
    const [isOpen, setOpen] = useState(false)
    console.log("isopen=",isOpen)
    const a = "tittle"
  return (
    <div>
      <h1>this is for sample test ... !</h1>
      <button onClick={()=>setOpen(true)}>opens</button>
      <Modal isOpen={isOpen} close={()=>setOpen(false)} title={a}>
      <h1>hello from mohammed irfad</h1>
      <p>ref4g5eyt  wogreut5ch uu 34uthiuweurhuejwhrwg 
      uhhuyhiureh hhguqh948htaeewtw3etvc etebtrt 4ertvyt rtve5rt 4rtvert t4ierjtv 4w wetv4csdryt t4etvg5ygtr tert 5grt eritjv45re rejtjui  jiurt h4erudtsereyerdhrdhwjruaetu fgjytghju  fhtgifht89 fue6tftfsdhfgfdhg</p>

      </Modal>
    </div>
  )
}

export default Test;
