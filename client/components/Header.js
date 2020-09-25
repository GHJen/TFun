import React, {Component} from 'react';
import Navbar from './Navbar';

const header = () => {
  return (
    <header className='header'>
      <h1>TFFun: Strike a (hand)Pose</h1>
      <p>Learn ASL counting to ten and play games with your new knowledge!</p>
      <Navbar />
    </header>
  )
}
export default header;
