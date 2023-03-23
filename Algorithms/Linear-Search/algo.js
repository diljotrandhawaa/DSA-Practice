
// This is the Linear Search Algorithm
// In this algo, we search for our var through the array or string
// one by one, searching every single element.
// from start to end  or  end to start, every single element.

// JS examples of this algo are includes, indexOf, index

var parentArr = [1, 4, 2, 6, 2, 6, 22, 5, 10];
var parentStr = ['hello', 'random', 'string', 'Jay', 'Kind'];

function linearSearchAlgo(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

var result = linearSearchAlgo('hell', parentStr);



// first sorting and then searching algorithm
// sort the array in numerical order if in numbers or in alphabetical if in string

function numOrder(a, b) {
  return a - b;
}

var sortAndSearch = function(value, array) {
  if (typeof array[0] == 'string') {
    array = array.sort();
  } else if (typeof array[0] == 'number') {
    array = array.sort(numOrder);
  }
  var filArray = array.filter((word) => {
    return word[0] === value[0];
  });
  return linearSearchAlgo(value, filArray);
}
var str = ['ant', 'van', 'cat', 'ceiling', 'dog', 'dump'];

var numsArr = [1, 5, 2, 5, 2, 56, 221, 3];

console.log(sortAndSearch('dog', str));
console.log(sortAndSearch(222, numsArr));
