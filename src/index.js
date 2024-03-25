import _ from "lodash";
import "./style.css";

import  printMe  from './print.js';

function fibs(num, fib = [0, 1]) {
  if (fib.length == num) 
    return fib;
  let num1 = fib[fib.length - 1];
  let num2 = fib[fib.length - 2];
  fib.push(num1 + num2);
  return fibs(num, fib);
}


console.log(fibs(8));