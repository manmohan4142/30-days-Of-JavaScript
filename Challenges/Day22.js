/*
Write a function to deeply compare two objects for equality.
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
Solution Approach: Recursively compare properties of both objects.
*/

function deepEqual(a1,a2){
    if(typeof a1 !== 'object' || typeof a2 !== 'object'){
        return a1 === a2
    }
    if(a1 === null && a2 === null){
        return true
    }
    const key1 = Object.keys(a1)
    const key2 = Object.keys(a2)

    if(key1.length !== key2.length){
        return false
    }
    for(const key of key1){
        if(!key2.includes(key) || !deepEqual(a1[key],a2[key])){
            return false
        }
    }
    return true
}
const objA = {a:1, b: {c:2, d: {e:3}}}
const objB = {a:1, b: {c:2, d: {e:3}}}
const objC = {a:1, b: {c:2, d: {e:4}}}

console.log(deepEqual(objA,objB))
console.log(deepEqual(objA,objC))
