import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const twoGesture = new fp.GestureDescription('two');

// thumb:
twoGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
twoGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
twoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
twoGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
twoGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
twoGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


// give additional weight to index and ring fingers
twoGesture.setWeight(Finger.Index, 2);
twoGesture.setWeight(Finger.Middle, 2);

export default twoGesture;
