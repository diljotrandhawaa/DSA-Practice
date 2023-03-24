// This requires SORTED ARRAY
// Time Complexity -->  O(log n)
// This is binary search, in which we Divide and Conquer
// Divide the existing array into two halves and
// check if you value is greater than or less than the middle value
// and check according to that (if less than middle, check from lower half of the array)

// 1. Better than the latter
// provides index of the element in the array you are looking for
// Goes by using two-pointer method
// if middle value < value,  upper pointer becomes equal to one less than middle value index
// if middle value > value,  lower pointer becomes equal to one plus than middle value index

function improvedBinarySearch (array, value) {
  var i = 0;
  var j = array.length-1;
  while (i <= j) {
    var middleIndex = Math.floor((i+j)/2);
    // console.log(middleIndex)
    if (array[middleIndex] < value) {
      i = middleIndex + 1;
    } else if (array[middleIndex] > value) {
      j = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

var numsArr1 = [1, 5, 7, 8, 9, 10, 35, 65, 90];

console.log(improvedBinarySearch(numsArr1, 9));


// 2. The second approach
// only returns true or false (if element exist or not)
// goes by dividing and cutting the array into halves
// until the element is found or array is reduced to single element.

function binarySearch(array, value) {
  array = array.sort((a, b) => a - b);
  var valueFound = false;
  while (!valueFound) {
    if (array.length === 1) {
      return false;
    }
    // console.log(array);
    var middleIndex = Math.floor(array.length/2);
    var middleValue = array[middleIndex];
    if (middleValue > value) {
      array = array.slice(0, middleIndex);
    } else if (middleValue < value) {
      array = array.slice(middleIndex);
    } else {
      return true;
    }
  }
}

var num1 = [2, 4, 1, 3, 82, 12, 5532, 2345, 2445322, 23719, 4, 589892, 245, 76, 456];

var output = binarySearch(num1, 2341);

// console.log(output);

// console.log(true && false)