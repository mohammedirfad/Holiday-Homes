import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home/Home'
import LandingPage from '../pages/user/LandingPage/LandingPage'

function User() {
  return (
    <Routes>
     
        <Route path='/home' element={<Home/>} />
        <Route path='/*' element={<div>404</div>} />

    </Routes>
  )
}

export default User