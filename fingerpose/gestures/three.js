import * as fp from 'fingerpose';
import {Finger, FingerCurl, FingerDirectrion} from 'fingerpose';


const threeGesture = new fp.GestureDescription('three');

// thumb:
threeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

// index:
threeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

// middle:
threeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring:
threeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// pinky:
threeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


// give additional weight to index and ring fingers
threeGesture.setWeight(Finger.Thumb, 2);
threeGesture.setWeight(Finger.Index, 2);
threeGesture.setWeight(Finger.Middle, 2);

export default threeGesture;
