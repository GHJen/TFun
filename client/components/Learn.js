import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { getRandomGesture } from '../utils';

const learn = () => {
  const [gesture, setGesture] = useState(getRandomGesture);
  const prediction = useSelector(state => state.model.prediction);
  return (
    <div id='learn' >
      {gesture === prediction ?
      <div id='congrats'>
        <h4>That's right!</h4>
        <p onClick={()=> setGesture(getRandomGesture)}> Click to guess again! </p>
      </div> : <h4> Try to make: {gesture}</h4> }
    </div>
  )
}

export default learn
