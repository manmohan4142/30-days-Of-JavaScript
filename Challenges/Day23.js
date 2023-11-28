/*
Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
Solution Approach:
Utilize closure to maintain the state of the counter.
*/

function counter(){
    let cnt=0

    return function(){
        cnt++
        return cnt
    }
}
const counter1 = counter()
const counter2 = counter()

console.log(counter1())
console.log(counter1())
console.log(counter1())

console.log(counter2())
console.log(counter2())
console.log(counter2())
