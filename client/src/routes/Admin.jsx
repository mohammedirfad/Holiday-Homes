import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainBg from '../pages/admin/MainBg'

function Admin() {
    return (
        <div className="bg-gradient-to-r from-regal-blue via-regal-blue1 to-regal-blue2 h-screen flex justify-center  items-center font-sans">
            <div className="grid h-[97%] w-[97%] rounded-3xl bg-black-rgba overflow-hidden">

              <Routes>
                 <Route path="/home" element={<MainBg />} />
              </Routes>
            </div>
        </div>
    )
}

export default Admin;