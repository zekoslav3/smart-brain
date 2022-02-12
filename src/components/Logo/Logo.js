import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilty className='tilty br2 shadow-2' glare scale={1.1} maxGlare={0.5}>
        <div className='tilty-inner pa3'>
          <img alt='logo' src={brain} />
        </div>
      </Tilty>
    </div>
  )
}

export default Logo;