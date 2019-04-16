function f (n){
  let arr = n.toString().split("");

  if (n <= 9) {
    console.log(n)
  } else {
  if(arr[length-1] === 0) {
    console.log(n);
  }
  }
  let pop = arr.pop();
  arr.unshift(pop);
  return arr.join('');
  }
console.log(f(123));
