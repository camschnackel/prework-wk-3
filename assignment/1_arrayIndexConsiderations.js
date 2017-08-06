// remember! array indices start at 0

var colors = ['red', 'blue', 'yellow'];

// using array indices, write an expression that will evaluate to the color described by these variable names
// for example var theColorBlue = colors[1];
// uncomment the next two lines and replace ____ with the appropriate code
var theColorRed = colors[0];
var theColorYellow = colors[2];

// what happens if we access an index that has no element? It will say undefined
// uncomment the following line and replace ____ with the appropriate code
var fortyThirdColor = colors[42];

function lastItem( lastItemArray ) {
  // this function accepts an array (lastItemArray) as an argument
  // have it return the last item in the array
  var lastItem = lastItemArray[lastItemArray.length - 1]
  return lastItem

}

// test your function lastItem by calling it below and logging the result
// for ex. console.log(lastItem(colors));
console.log(lastItem(colors));
console.log(fortyThirdColor);
