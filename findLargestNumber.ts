function findLargestNumber(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0) {
    return 0;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargestNumber([1, 2, 7, -1, -124, -20, 42, 6, 0, 100]));
