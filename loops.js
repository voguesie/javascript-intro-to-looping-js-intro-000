// forLoop takes an array as an input, and adds strings with a for loop.

function forLoop (loopArray) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      loopArray.push("I am 1 strange loop.");
    }
    else {
      loopArray.push(`I am ${i} strange loops.`);
    }
  }
  return loopArray
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
  return "done"
}
