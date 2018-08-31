
/* For each example of code please identy 
   the higher order function and the callback function(s) */
   
/* For both types of functions, you will describe the 
   parameters and return values (if any) */

// Question 1:

function returned() {
  console.log("The king hath returned from the hunt!");
}

function death() {
  console.log("The king is dead!");
}

function birth() {
  console.log("An heir has been born today!");
}

function announce(cb) {
  console.log("Hear ye! Hear ye!");
  cb();
}

announce(returned);
announce(birth);
announce(death);

/**
  1a) What is the higher order function is this example? List the parameters and return values.
      HIGHER: function announce();
      PARAMETER: a callback function
      RETURN VALUE: string - "Hear ye! Hear ye!" and the callback function
  
  1b) What are the callbacks in this example? List the parameters and return values for each.
      CALLBACKS: function returned(); function death(); function birth();
      PARAMETERS: No parameters
      RETURN VALUES:
                    function returned();
                    string - 'The king hath returned from the hunt!'
                    
                    function death();
                    string - 'An heir has been born today!'
                    
                    function birth();
                    string - 'The king is dead!'
*/

// Question 2:

function addFn(x, y) {
  return x + y;
}

function subtractFn(x, y) {
  return x - y;
}

function combine(x, y, cb) {
  return cb(x, y);
}

const result1 = combine(1, 4, addFn);
const result2 = combine(9, -2, subtractFn);
const result3 = combine(2, 3, function(x, y) {
  return x * y;
})

/**
  2a) What is the higher order function? List the parameters and return values.
      HIGHER: function combine();
      PARAMETER: PARAM1 - x | PARAM2 - y | PARAM3 - a callback function
      RETURN VALUE: the callback function using the arguments x and y
      
  2b) What are the callbacks? List the parameters and return values for each.
      CALLBACKS: function addFn(); function subtractFn(); and an anonymous function();
      PARAMETERS: PARAM1 - x | PARAM2 - y 
      RETURN VALUES:
                    function addFn();
                    the SUM of PARAM1 and PARAM2
                    
                    function subtractFn();
                    the SUBTRACTION of PARAM1 and PARAM2
                    
                    anonymous function();
                    the MULTIPLICATION of PARAM1 and PARAM2
*/


// Question 3:

function addExcitement(string) {
  return 'string' + '!';
}

const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
const excitedPhrases = phrases.map(addExcitement);

/**
  3a) What is the higher order function? List the parameters and return values.
      HIGHER: .map();
      PARAMETER: a callback function and a array
      RETURN VALUE: a new array where the CB runs for each index of the array provided.
      
  3b) What are the callbacks? List the parameters and return values for each.
      CALLBACKS: function addExcitement();
      PARAMETERS: PARAM1 - string *(this parameter is not used in the return value of the function)
      RETURN VALUES: string - 'string!'
*/


// Stretch Question 4:

function findLongest(str1, str2) {
  const firstLonger = str1.length >= str2.length;

  if (firstLonger) {
    return str1;
  } else {
    return str2;
  }
}

const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];

/**const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];

const longestWord = words.reduce(findLongest);
const longestPhrase = phrases.reduce(findLongest);


  4a) What is the higher order function? List the parameters and return values.
      HIGHER: .reduce();
      PARAMETER: a callback function and a array
      RETURN VALUE: one value that was the result of the CB executed for each element
                    of the array until only one value was produced.
      
  4b) What are the callbacks? List the parameters and return values for each.  
      CALLBACKS: findLongest();
      PARAMETERS: PARAM1 - first string, PARAM2 - second string, 
      RETURN VALUES: the longest string between the two parameters.
    
*/
