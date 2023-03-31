import React from 'react';
import BeHostNav from '../../../components/user/Host/BeHostNav';
import Standout from '../../../components/user/Host/Standout';
import Progress from '../../../components/user/Host/ProgressComponent';

function Standouts() {
  return (
    <div>
        <BeHostNav/>
        <Standout/>
        <Progress/>
    </div>
  )
}

export default Standouts;