
function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length -1) {
  if (rightIdx < leftIdx) {
    return 0;
  }

  if(rightIdx === leftIdx) {
    return leftIdx;
  }

  let midIdx = Math.floor((leftIdx + rightIdx) / 2);

  if (midIdx < rightIdx && arr[midIdx + 1] < arr[midIdx]) {
    return midIdx + 1;
  } 
  
  if (midIdx > leftIdx && arr[midIdx] < arr[midIdx - 1]) {
    return midIdx;
  }

  if (arr[rightIdx] > arr[midIdx]) {
    return findRotationCount(arr, leftIdx, midIdx - 1);
  }
  return findRotationCount(arr, midIdx + 1, rightIdx)
}

module.exports = findRotationCount