import React from 'react';
import BeHostNav from '../../../components/user/Host/BeHostNav';
import HostLocation from '../../../components/user/Host/HostLocation';
import Progress from '../../../components/user/Host/ProgressComponent';

function HostLocations() {
  return (
    <div>
        <BeHostNav/>
        <HostLocation/>
        <Progress/>
    </div>
  )
}

export default HostLocations;