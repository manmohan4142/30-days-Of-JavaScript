/*
Problem Statement: Implement a memoization function.
Description: Write a function that takes a function as its argument and returns a memoized version of the function.
Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/

function memoize(func) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (!cache[key]) {
        cache[key] = func.apply(this, args);
      }
      return cache[key];
    };
  }
  function expensiveFunction(a, b) {
    return a + b;
  }
  const memoizedExpensiveFunction = memoize(expensiveFunction);
  
  const res1 = memoizedExpensiveFunction(3, 4); 
  const res2 = memoizedExpensiveFunction(3, 9); 
  const res3 = memoizedExpensiveFunction(5, 6); 
  console.log(res1);
  console.log(res2);
  console.log(res3);
