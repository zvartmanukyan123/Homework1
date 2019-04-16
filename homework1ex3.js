function computes(n) {
  let temp = n.toString();
  let t1 = temp + temp;
  let t2 = temp + temp + temp;

  return n + +t1 +   +t2;
}

console.log(computes (5));
