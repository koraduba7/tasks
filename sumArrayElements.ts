function sumArrayElements(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrayElements([1, 2 - 100, 5, 7, 8, 124]));
console.log(sumArrayElements([1, 2, 3, 4]));
