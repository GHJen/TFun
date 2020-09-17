import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const oneGesture = new fp.GestureDescription('one');

// thumb:
oneGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
oneGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
oneGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// ring:
oneGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
oneGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


// give additional weight to index finger
oneGesture.setWeight(Finger.Index, 2);

export default oneGesture;
