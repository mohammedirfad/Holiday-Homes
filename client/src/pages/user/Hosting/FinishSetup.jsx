import React from 'react';
import BeHostNav from '../../../components/user/Host/BeHostNav';
import FinishSetup from '../../../components/user/Host/FinishSetup';
import Progress from '../../../components/user/Host/ProgressComponent';
import { PRICE } from "../../../../src/Constants/HostLinks";


function FinishSetups() {
  return (
    <div>
        <BeHostNav/>
        <FinishSetup/>
        <Progress link={PRICE}/>
    </div>
  )
}

export default FinishSetups;