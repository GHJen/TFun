const handpose = require('@tensorflow-models/handpose');
require('@tensorflow/tfjs-backend-webgl');
require('@tensorflow/tfjs')
const fp = require('fingerpose');
import {GE} from '../../fingerpose/model';

/**
 * ACTION TYPES
 */
const GET_MODEL = 'GET_MODEL';
const GET_PREDICTIONS = 'GET_PREDICTIONS'

/**
 * INITIAL STATE
 */
const defaultModel = {
  model: null,
  prediction: 0
};

/**
 * ACTION CREATORS
 */
const getModel = model => ({type: GET_MODEL, model})
const getPredictions = (gesture) => ({type: GET_PREDICTIONS, gesture})

/**
 * THUNK CREATORS
 */
export const gotModel = () => async dispatch => {
  try {
    const model = await handpose.load();
    dispatch(getModel(model))
  } catch (err) {
    console.error(err)
  }
}
export const gotPredictions = (model, video) => async dispatch => {
  try {
    if (video) {
      async function predict() {
        const predictions = await model.estimateHands(video, true);
        if (predictions.length>0) {
          const estimatedGestures = GE.estimate(predictions[0].landmarks, 7.5).gestures
          let matchGesture = 0;
          for (const gesture of estimatedGestures) {
            // if (gesture.confidence > matchGesture.confidence) matchGesture = gesture
          }
          console.log(estimatedGestures);
          dispatch(getPredictions(matchGesture.name));
        }
        // reqAnim =
        requestAnimationFrame(predict);
      }
      predict();
    }
  } catch (err) {
    console.error(err)
  }
}


/**
 * REDUCER
 */
export default function(state = defaultModel, action) {
  switch (action.type) {
    case GET_MODEL:
      return {...state, model: action.model}
    case GET_PREDICTIONS:
      if (state.prediction !== action.gesture) return {...state, prediction: action.gesture}
      default:
      return state
  }
}
