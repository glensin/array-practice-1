// importing our helper method, helper.test()
var helper = require('./test-helper-functions')

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function dash (numString) {
  // define your function here
  var numStr = numString
var numStrArrMinus = []

for (var i = 0; i < numStr.length ; i++)
if (numStr[i]%2===0 && numStr[i+1]%2 ===0 ){
numStrArrMinus.push(numStr[i]+"-")
}
else {
numStrArrMinus.push(numStr[i])
}

return(numStrArrMinus.join(''))
}

helper.test(dash('025486'), '0-254-8-6') // check that your function works as expected

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem (arr) {

  var input = arr.sort()
  var freq = 1
  for (var i = 0 ; i < input.length ; i++)
  if(input[i] === input [i+1]){
  var total = (input.lastIndexOf(input[i])-input.indexOf(input[i]))+1
  if (total>freq)
  {
  freq = total;
  mostFreq = input[i]
  i = input.lastIndexOf(input[i])+1
  }
  }

  // return (mostFrequnetItem + "(" + mostFrequnet+" times)"
  return (mostFreq + " (" + total+" times)")
}

// uncomment the following test to run it
helper.test(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 9, 3]), 'b (5 times)')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems (arr) {
  var input = arr
  var inputLower = []
  output = []
  for (var i = 0; i < input.length; i++) {
  if ( typeof input[i] === 'string') {
    inputLower.push(input[i].toLowerCase())
  }
  else {
    inputLower.push(input[i])
  }
  }

  for (var i = 0; i < inputLower.length ; i++)
    { if (inputLower [i] !== inputLower[i+1])
      output.push(inputLower[i])
  }


return(output)
}

helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union (arr1,arr2) {
  var input1 = arr1
  var input2 = arr2

  var output = []
  var combine = input1.concat(input2)
  var combineSort = combine.sort(function(a,b){return a-b})


  for (var i = 0 ; i < combineSort.length ; i++) {
    if (combineSort[i] !== combineSort[i+1] )
    output.push(combineSort[i])
  }

  return(output)

}

helper.test(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a JavaScript function to merge two arrays and removes all duplicates elements.
// (Sample input: mergeArray([1, 2, 3], [2, 30, 1]), expected output: [3, 2, 30, 1])
function mergeArray (arr1, arr2) {
var input1 = arr1
var input2 = arr2

var input1Last = input1.slice(-1)

var combine = input1Last.concat(input2)

return(combine)
}

helper.test(mergeArray([1, 2, 3], [2, 30, 1]), [3, 2, 30, 1])
