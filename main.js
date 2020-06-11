/*******************************************************************************
 * Your code here!
 ******************************************************************************/
//#1

function getInput(n) {
  return process.argv[n + 2];
}
//--the 'input' variable below stores the return value into a variable.
//--You don't need to write two functions because each 'let' statement is running off the one function --
let FirstName = getInput(0);
console.log(FirstName)
let LastName = getInput(1);
console.log(LastName)

//#2
//the function grabs the first initial of the first and last name inputs and applies a period after each initial.
function getInitials(FirstName, LastName){
  return FirstName[0] + '.' + LastName[LastName.indexOf(' ')+1] + '.';
}

//#3
// 'Initials' variable stores the initials produced in Step 2
let Initials = getInitials(FirstName, LastName);


//#4
//the function calculates the length of the input, in this case the Full Name.
function nameLength(a, b){
return a.length + b.length;
}
let Length = nameLength(FirstName, LastName);


//#5
//The variable creates a message that takes in the info stored in 'Initials' and 'Length'
let Response = 'Hey, ' + Initials + ' ' + 'Mind if I call you that? ' + 
'Your full name is ' + Length + ' letters long!';

//Console.log takes the above variable and displays the output in Terminal
console.log(Response);





/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined
 ******************************************************************************************/

function getInput(n) {
  return process.argv[n + 2];
}
