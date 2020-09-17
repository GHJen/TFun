import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const fiveGesture = new fp.GestureDescription('five');

// thumb:
fiveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// index:
fiveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
fiveGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
fiveGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky:
fiveGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);


export default fiveGesture;
