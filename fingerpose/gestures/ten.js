import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';

const tenGesture = new fp.GestureDescription('ten');

// thumb:
// - not curled
tenGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  tenGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default tenGesture;
