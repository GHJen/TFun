import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const eightGesture = new fp.GestureDescription('eight');

// thumb:
eightGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
eightGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
eightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
eightGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.5);
eightGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.5);

// ring:
eightGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
eightGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);


// give additional weight to index and ring fingers
// eightGesture.setWeight(Finger.Middle, 2);
// eightGesture.setWeight(Finger.Thumb, 2);

export default eightGesture;
