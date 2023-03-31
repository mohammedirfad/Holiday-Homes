import React,{useState} from 'react';

import BeHostNav from '../../../components/user/Host/BeHostNav';
import Description from  '../../../components/user/Host/Description';
import Progress from '../../../components/user/Host/ProgressComponent';




function Descriptions(){
 return(
  <div>
  <BeHostNav/>
  <Description/>
  <div className='relative bottom-0'>
  <Progress/>
  </div>
</div>
    )
}

export default Descriptions;