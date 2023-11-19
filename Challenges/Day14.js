/*
Write a JavaScript function to concatenate a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

Outputs
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
*/

function repeat(s,n=1){
    return s.repeat(n)
}
console.log(repeat('Ha!'))
console.log(repeat('Ha!',2))
console.log(repeat('Ha!',3))
