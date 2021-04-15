function firstBSearch(arr, x, leftIdx = 0, rightIdx = arr.length - 1) {
  
  // Conditional to check if x is present; if so return the index of the first x 
  if (rightIdx >= leftIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2)
    if((midIdx === 0 || x > arr[midIdx - 1]) && arr[midIdx] === x) {
      return midIdx;
    // Conditional to check if middle index value is equal to 1
    } else if (x > arr[midIdx]) {
      return firstBSearch(arr, x, midIdx + 1, rightIdx)
    }
    return firstBSearch(arr, x, leftIdx, midIdx - 1)
  }
  return -1;
}

function lastBSearch(arr, x, leftIdx = 0, rightIdx = arr.length - 1) {
  
  if (rightIdx >= leftIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2)
    if((midIdx === arr.length - 1 || x < arr[midIdx + 1]) && arr[midIdx] === x) {
      return midIdx;
    // Conditional to check if middle index value is equal to 1
    } else if (x < arr[midIdx]) {
      return lastBSearch(arr, x, leftIdx, midIdx - 1)
    }
    return lastBSearch(arr, x, midIdx + 1, rightIdx)
  }
  return -1;
}


function sortedFrequency(arr, x) {
  
  let first = firstBSearch(arr, x)
  if (first === -1) return first;

  let last = lastBSearch(arr, x)
  
  return last - first + 1;

}

module.exports = sortedFrequency