'use strict';
let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    alert(nums[i] + '' + nums[j]);
  }
}

//El mismo ***Ejercicio 01***  pero considerar que las combinaciones no se repitan, es decir, las salida seria:
//02 04 08 24 28 48