"use strict";
//1 օրինակ  

function numberFun() {
    
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberFun();
  number(); // 2

  //2 օրինակ
  let x = 10;

  function foo() {
    let y = 20; // free variable
    function sum() {
      let z = 15; // free variable
      return x + y + z;
    }
    return sum;
  }
  
  let test = foo();
  
  
  console.log(test()); 

  // 3 օրինակ
  function personalDice(name){
    return function(){
      
      const newRoll = Math.floor(Math.random() * 6);
      console.log(`${name} rolled a ${newRoll}`)
    }
  }
  
  const dansRoll = personalDice("Dan");
  
  const zoesRoll = personalDice("Zoe");
  
  
  dansRoll();
  dansRoll();