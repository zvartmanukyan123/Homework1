function signOfProduct (a,b,c) {
  if (a === 0 || b === 0 || c === 0) {
    return "unsign";
  }
 let arr = [a,b,c];
 let counter = 0;
 for (let i = 0; i <= arr.length; i++) {
   if(arr[i] < 0){
   counter++;
  }
 }
 if (counter % 2 == 1){
   return "-" + counter;
 } else {
   return "+" + counter;
 }
}

console.log(signOfProduct(-14, 5, 0));
