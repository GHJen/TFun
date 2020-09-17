import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const fourGesture = new fp.GestureDescription('four');

// thumb:
fourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
fourGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
fourGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
fourGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
fourGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
fourGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);


// give additional weight to non-thumb fingers
fourGesture.setWeight(Finger.Index, 2);
fourGesture.setWeight(Finger.Middle, 2);
fourGesture.setWeight(Finger.Ring, 2);
fourGesture.setWeight(Finger.Pinky, 2);

export default fourGesture;
