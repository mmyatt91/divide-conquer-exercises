function binarySearch(arr, leftIdx = 0, rightIdx = arr.length -1) {
  
  if (rightIdx >= leftIdx) {
    // Create variable for middle index by splitting the array down the middle
    let midIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
    console.log(midIdx)
    // Conditional to check if middle index is equal to 0 or 1, and if middle index value is equal to 0
    if((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
      return midIdx;
    // Conditional to check if middle index value is equal to 1
    } else if (arr[midIdx] === 1) {
      return binarySearch(arr, midIdx + 1, rightIdx)
    }
    return binarySearch(arr, leftIdx, midIdx - 1)
  }
  return -1;
}

function countZeroes(arr) {

  let index = binarySearch(arr);
  
  // Conditional to check if index is present 
  if(index === -1) return 0;

  return arr.length - index;
}

module.exports = countZeroes