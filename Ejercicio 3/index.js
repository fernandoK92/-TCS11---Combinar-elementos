'use strict';
function CombinacionesSinRepetir(nums2) {
  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      alert(nums2[i] + "" + nums2[j]);
    }
  }
}

let nums2 = [0, 2, 4, 8];
CombinacionesSinRepetir(nums2);

//El mismo ***Ejercicio 01***  pero considerar que las combinaciones no se repitan, es decir, las salida seria:
//02 04 08 24 28 48

//Ejercicio 3


