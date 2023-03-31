import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    const { progress, numSteps } = props;
  
    return (
      <div className="progress-bar">
        <div
          className="progress-bar__inner"
          style={{ width: `${(progress / numSteps) * numSteps}%` }}
        ></div>
      </div>
    );
  }
  export default ProgressBar;