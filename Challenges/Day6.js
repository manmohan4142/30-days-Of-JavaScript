/*
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
*/

function computeSumOrTriple(a,b){
    if(a==b){
        return 3*(a+b);
    }else{
        return a+b;
    }
}
let num1=5;
let num2=5;

let res = computeSumOrTriple(num1,num2);
console.log(res);
