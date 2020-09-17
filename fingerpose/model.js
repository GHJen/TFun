const handpose = require('@tensorflow-models/handpose');
require('@tensorflow/tfjs-backend-webgl');
const fp = require('fingerpose');

import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten
} from './gestures'

export const GE = new fp.GestureEstimator([
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten
]);
