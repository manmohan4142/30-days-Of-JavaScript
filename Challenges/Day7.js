/*
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
/

function checkFor50(a,b){
    return a==50 || b==50 || (a+b)==50;
}

let res1 = checkFor50(25,50);
let res2 = checkFor50(20,30);
let res3 = checkFor50(15,25);
console.log(res1);
console.log(res2);
console.log(res3);
