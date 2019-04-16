function findDifference (numbers) {
  let arr = numbers.toString().split("");
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 1;i < arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return largest - smallest;
}
console.log(findDifference(4593653));
