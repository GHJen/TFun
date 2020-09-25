import React, {useState} from 'react';
import {getColor} from '../utils';

const singleColor = (props) => {
  const {gesture, selection} = props;
  const color = getColor(gesture)
  return (
    <div id='singleColor'>
      <div id='square' className={color}></div>
      <h4 className={selection===color ? 'selected' : ''}>{color}</h4>
      <p>Make gesture {gesture} </p>
    </div>
  )
}

export default singleColor
