import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { getColor, gestures } from '../utils';
import SingleColor from './SingleColor'

const color = () => {
  const prediction = useSelector(state => state.model.prediction);
  const selection = getColor(prediction)
  return (
    <div id='colors' className={selection ? selection : 'white'}>
      {gestures.map((gesture, ix) => {
      if (ix>0) return <SingleColor key={gesture} selection={selection} gesture={gesture} />
      })}
    </div>
  )
}

export default color
