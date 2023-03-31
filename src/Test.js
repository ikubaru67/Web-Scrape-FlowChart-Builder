import React, { useState } from 'react';

import './Test.css';

function Test() {
    const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ height: '100vh' }}>
      <div onClick={handleClick}>Toggle Flowchart</div>
      {isExpanded && (
        <div className="flowchart-container">
          <div className="flowchart-box">Step 1</div>
          <div className="flowchart-box">Step 2</div>
          <div className="flowchart-box">Step 3</div>
          <div className="flowchart-box">Step 4</div>
          <svg className="flowchart-line">
            <path d="M 150 60 L 150 100 L 250 100" />
          </svg>
          <svg className="flowchart-line">
            <path d="M 150 180 L 150 220 L 250 220" />
          </svg>
          <svg className="flowchart-line">
            <path d="M 250 140 L 200 140" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Test;