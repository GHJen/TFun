import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';

const zeroGesture = new fp.GestureDescription('zero');


// all fingers:
// - curled
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  zeroGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}
// give additional weight to thumb
// zeroGesture.setWeight(Finger.Thumb, 2);

export default zeroGesture;
