function binarySearch(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {

  if (arr.length === 0) return -1;
  
  if (num < arr[leftIdx] || num > arr[rightIdx]) {
    return -1;
  } 

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);
    if (arr[midIdx] === num) {
      return midIdx;
    } else if (num < arr[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
    return - 1;
  }

function findPivot(arr) {
  
  if(arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
  
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[midIdx] > arr[midIdx + 1]) {
      return midIdx + 1;
    } else if (arr[leftIdx] <= arr[midIdx]) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx -1
    }
  }
}


function findRotatedIndex(arr, n) {

  let pivot = findPivot(arr)

  if (pivot > 0 && n >= arr[0] && n <= arr[pivot -1]) {
    return binarySearch(arr, n, 0, pivot - 1);
  } else {
    return binarySearch(arr, n, pivot, arr.length -1)
  }
}

module.exports = findRotatedIndex