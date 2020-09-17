import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const sixGesture = new fp.GestureDescription('six');

// thumb:
sixGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
sixGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
sixGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
sixGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
sixGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
sixGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.5);
sixGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.5);


// give additional weight to index and ring fingers
// sixGesture.setWeight(Finger.Ring, 2);
// sixGesture.setWeight(Finger.Thumb, 2);

export default sixGesture;
