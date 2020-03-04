////////// PROBLEM 1 //////////

// Do not edit the code below.
var arr = [10, 20, 30];
// Do not edit the code above.

/*
  Create a function named 'first' that is given 'arr' as an argument.
  Return the first item in the given array.
*/

//Code Here
function first(arr) {
  return arr[0];
}

////////// PROBLEM 2 //////////

// Do not edit the code below.
var arr = [40, 50, 60];
// Do not edit the code above.

/*
  Create a function named 'last' that is given 'arr' as an argument. 
  Return the last item in the given array.
*/

//Code Here
function last(arr) {
  return arr[2];
}

////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ["Tyler", "Jordyn", "Ryan", "Chelsey", "Ireland"];
// Do not edit the code above.

/*
  Create a function named 'looper' that is given family as it's only argument. 
  Loop through the given array and alert every item in the array.
*/

//Code Here
function looper(family) {
  for (let i = 1; i <= family.length; i++) {
    alert(i);
  }
}

////////// PROBLEM 4 //////////

// Do not edit the code below.
var letters = ["A", "B", "C", "D", "E"];
// Do not edit the code above.

/*
  Write a function called reversedLooper that is given letters as it's only argument. 
  Loop backwards, starting at the end of the letters array, alerting every item in the array.
*/

//Code Here
function reversedLooper(letters) {
  for (let i = letters.length; i >= 1; i--) {
    alert(i);
  }
}

////////// PROBLEM 5 //////////

// Do not edit the code below.
var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
// Do not edit the code above.

/*
  Write a function named evenFinder that is given nums as it's only argument.
  Return an array that contains the even numbers from the nums array.
*/

//Code Here
function evenFinder(nums) {
  let arr = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}
