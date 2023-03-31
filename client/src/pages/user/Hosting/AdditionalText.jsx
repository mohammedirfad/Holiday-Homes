import React from 'react';
import BeHostNav from '../../../components/user/Host/BeHostNav';
import AdditionalText from  '../../../components/user/Host/Additionaltext';
import Progress from '../../../components/user/Host/ProgressComponent';

function Additionaltext(){

    return(
        <div className=''>
          <BeHostNav/>
  <AdditionalText/>
  <div className='relative bottom-0'>
  <Progress/>
  </div>
        </div>
    )
}

export default Additionaltext;