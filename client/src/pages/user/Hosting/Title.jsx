import React,{useState} from 'react';
import BeHostNav from '../../../components/user/Host/BeHostNav';
import Title from  '../../../components/user/Host/Title';
import Progress from '../../../components/user/Host/ProgressComponent';
import { HOME_LINK } from "../../../../src/Constants/HostLinks";




function Titles(){
 return(
  <div className='h-full'>
  <BeHostNav/>
  <Title/>
  
  <Progress link={HOME_LINK} step={1}/>

</div>
    )
}

export default Titles;