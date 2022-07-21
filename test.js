"use strict";

//bbbb
function spread(arr1, arr2) {
    for(let i = 0; i < arr2.length;i++){
        arr1.push(arr2[i])
    }
      return arr1
    }
    console.log(spread([1, 2,3,4], [5,6,7]));
    
    ////


    function sumAll(...args) { 
        let sum = 0;
      
        for (let arg of args) sum += arg;
      
        return sum;
      }
      
      console.log( sumAll(1) );
      console.log( sumAll(1, 2) ); 
      console.log( sumAll(1, 2, 3) ); 


    