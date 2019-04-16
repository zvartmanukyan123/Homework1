function sortNumbers (n,m,p) {
   if (n >= m && n >= p) {
      if (m > p) {
        console.log(p + "," + m + "," + n);
      } else {
        console.log(m + "," + n + "," + p);
      }
    }
      else if (m >= n && m >=p) {
        if(n > p) {
          console.log(p + "," + n + "," + m);
        } else {
          console.log(p + "," + m + "," + n);
        }
      } else if (p > n && p > m) {
        if (n > m) {
          console.log(m + "," + n + "," + p);
        } else {
          console.log(n + "," + m + "," + p);
        }
        }
      }
