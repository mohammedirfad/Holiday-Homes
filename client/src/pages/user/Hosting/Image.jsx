import React from 'react';
import BeHostNav from '../../../components/user/Host/BeHostNav';
import Image from  '../../../components/user/Host/Image';
import Progress from '../../../components/user/Host/ProgressComponent';

function Images(){
    return (
        <div>
        <BeHostNav/>
        <Image/>
        <div className='relative bottom-0'>
        <Progress/>
        </div>
      </div>
    )
}

export default Images;