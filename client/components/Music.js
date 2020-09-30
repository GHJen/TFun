import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {getMusic, tones} from '../utils';


const music = () => {
  const prediction = useSelector(state => state.model.prediction);
  const selection = getMusic(prediction)
  if (!selection) return '';
  return (
    <div id='music' >
      <img src='/keyboard.jpg'/>
      <audio src={`/PianoChords/Piano${selection}Chord.m4a`} autoPlay={true} />
    </div>
  )
}

export default music
