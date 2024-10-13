function removeDuplicates(arr: number[]) {
  let cleanArr = new Set(arr);
  return cleanArr;
}

console.log(removeDuplicates([1, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([1, 2, 2, 2, 1, 1, 3, 4, 5, 6]));
