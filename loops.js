// forLoop takes an array as an input, and adds strings with a for loop.

var forLoop = function (loopArray) {
  var newArray;
  for (var i = 1; i <= 25; i++) {
    if i === 1 {
      newArray = loopArray.push("I am 1 strange loop.");
    }
    else {
      newArray = loopArray.push(`I am ${i} strange loops.`);
    }
  }
  return newArray
}
