import React, { useState } from 'react';
import './App.css';
import logo from './image/logo.gif';

const App = () => {
  const [clickPosition, setClickPosition] = useState({ x: 600, y: 500 });
  const [scale, setScale] = useState(-1)
  const handleClick = (e) => {
    const { clientX, clientY } = e;
    if (clickPosition.x <= clientX) {
      setScale(-1);
    }
    else if (clickPosition.x > clientX) {
      setScale(1);
    }
    setClickPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="App" onClick={handleClick}>
      <img
        src={logo}
        alt="gif logo"
        className='gif-image'
        style={{
          position: 'absolute',
          left: clickPosition.x,
          top: clickPosition.y,
          transition: 'left 10s, top 10s',
          transform: `translate(-50%, -50%) scaleX(${scale})`,
          width: '100px',
          height: '100px'
        }}
      />
    </div>
  );
};

export default App;
