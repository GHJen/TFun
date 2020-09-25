export const gestures = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
export const predictionIndex = {
  'zero' : 0,
  'one' : 1,
  'two' : 2,
  'three' : 3,
  'four' : 4,
  'five' : 5,
  'six' : 6,
  'seven' : 7,
  'eight' : 8,
  'nine' : 9,
  'ten' : 10
}
export const colors = ['white', 'red', 'pink', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'magenta', 'black']
export const gestureImgs = [];

export const getRandomGesture = () => {
  const i = Math.floor((Math.random() * 10) + 1);
  return gestures[i];
}
export const getI = (prediction) => {
  return predictionIndex[prediction]
}
export const getColor = (prediction) => {
  const i = getI(prediction);
  return colors[i];
}

export const playGame = () => {
  const gesture = getRandomGesture();

  //for learn, want to generate pick, set it on state, reset when gesture matches what we've input

}

