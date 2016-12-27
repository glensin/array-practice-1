var input =  [1, 'a', 'A', 'b', 2, 2]
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

  // else {
  // inputStringMap.push(inputString[i])
  // }

console.log(output)

// console.log(typeof 1 === "number");
