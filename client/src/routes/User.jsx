import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/user/Home/Home';
import HostHomePg from '../pages/user/Hosting/HostmainPg';
import Login from '../pages/user/Login/Login';
import Text from '../../src/components/user/Test.jsx';
import BeHost from '../pages/user/Hosting/BeHost';
import HostOverView from '../pages/user/Hosting/HostOverView';
import  Structures from '../pages/user/Hosting/Structure';
import  Place from '../pages/user/Hosting/Place';
import  FloorPlan from '../pages/user/Hosting/FloorPlan';
import  Location from '../pages/user/Hosting/HostLocation';
import  Image from '../pages/user/Hosting/Image';
import  Title from '../pages/user/Hosting/Title';
import  Description from '../pages/user/Hosting/Description';
import  Additionaltext from '../pages/user/Hosting/AdditionalText';
import  FinishSetup from '../pages/user/Hosting/FinishSetup';
import  Price from '../pages/user/Hosting/Price';
import  Standouts from '../pages/user/Hosting/Standout';
import  Publish from '../pages/user/Hosting/Publish';

function User() {
  return (
    <Routes>
     
        <Route path='/home' element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/test' element={<Text/>}/>
        <Route path='/host' element={<HostHomePg/>}/>
        <Route path='/become-a-host' element={<BeHost/>}/>
        <Route path='/become-a-host/Overview' element={<HostOverView/>}/>

        <Route path='/become-a-host/about-your-place' element={<Structures/>}/>
        <Route path='/become-a-host/structure' element={<Place/>}/>
        <Route path='/become-a-host/floor-plan' element={<FloorPlan/>}/>
        <Route path='/become-a-host/location' element={<Location/>}/>

        <Route path='/become-a-host/Standouts' element={<Standouts/>}/>

        <Route path='/become-a-host/photos' element={<Image/>}/>
        <Route path='/become-a-host/title' element={<Title/>}/>
        <Route path='/become-a-host/description' element={<Description/>}/>
        <Route path='/become-a-host/additional-description' element={<Additionaltext/>}/>
        
        <Route path='/become-a-host/FinishSetup' element={<FinishSetup/>}/>
        <Route path='/become-a-host/Price' element={<Price/>}/>
        <Route path='/become-a-host/Publish-celebration' element={<Publish/>}/>
        

        <Route path='/*' element={<div>404! <br>Page Not found </br></div>} />

    </Routes>
  )
}

export default User