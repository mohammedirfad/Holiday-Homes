import React,{useState} from 'react';

import BeHostNav from '../../../components/user/Host/BeHostNav';
import FloorPlan from  '../../../components/user/Host/FloorPlan';
import Progress from '../../../components/user/Host/ProgressComponent';




function FloorPlans(){
 return(
  <div>
  <BeHostNav/>
  <FloorPlan/>
  <div className='relative bottom-0'>
  <Progress/>
  </div>
</div>
    )
}

export default FloorPlans;