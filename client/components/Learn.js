import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { getRandomGesture } from '../utils';
import GestureImg from './GestureImg';

const learn = () => {
  const [gesture, setGesture] = useState(getRandomGesture);
  const prediction = useSelector(state => state.model.prediction);
  return (
    <div id='learn' >
      {gesture === prediction ?
      <div id='congrats'>
        <h4>That's right!</h4>
        <p onClick={()=> setGesture(getRandomGesture)}> Click to guess again! </p>
      </div> : <div id='task'>
      <h4> Try to make: {gesture}</h4>
      <GestureImg gesture={gesture} />
      </div> }
    </div>
  )
}

export default learn
