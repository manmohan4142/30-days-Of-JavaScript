/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/

function calculateTriangleArea(a,b,c){
    const s = (a+b+c)/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}
const a=5;
const b=6;
const c=7;

const area = calculateTriangleArea(a,b,c);
console.log("The area of triangle is: ", area);
