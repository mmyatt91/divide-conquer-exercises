function findFloor(arr, x, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) {
    return -1;
  }

  if (x >= arr[rightIdx]) {
    return arr[rightIdx];
  }

  let midIdx = Math.floor((leftIdx + rightIdx) / 2);

  if(arr[midIdx] === x) {
    return arr[midIdx];
  }

  if(midIdx > 0 && arr[midIdx - 1] <= x && x < arr[midIdx]) {
    return arr[midIdx - 1];
  }

  if (x < arr[midIdx]) {
    return findFloor(arr, x, leftIdx, midIdx - 1)
  } else {
    return findFloor(arr, x, midIdx + 1, rightIdx)
  }
}

module.exports = findFloor