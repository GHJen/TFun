import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const sevenGesture = new fp.GestureDescription('seven');

// thumb:
sevenGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
sevenGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

// index:
sevenGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
sevenGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
sevenGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.5);
sevenGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.5);

// pinky:
sevenGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);


// give additional weight to index and ring fingers
// sevenGesture.setWeight(Finger.Ring, 2);
// sevenGesture.setWeight(Finger.Thumb, 2);

export default sevenGesture;
