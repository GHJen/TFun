import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const nineGesture = new fp.GestureDescription('nine');

// thumb:
nineGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
nineGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
nineGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.5);
nineGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5);

// middle:
nineGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
nineGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
nineGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);


// give additional weight to index and ring fingers
nineGesture.setWeight(Finger.Middle, 2);
nineGesture.setWeight(Finger.Ring, 2);
nineGesture.setWeight(Finger.Pinky, 2);

export default nineGesture;
