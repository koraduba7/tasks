function arrayFiltering(arr: number[]): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arrayFiltering([1, 2, 3, 4, 5, 6, 7, 10, 12, 200]));
