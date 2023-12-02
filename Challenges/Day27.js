/*
Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.
Solution Approach:
Use the function* syntax for generator functions and the yield keyword.
*/

function* range(start, end){
    for(let i=start; i<=end; i++){
        yield i
    }
}

const startNum = 1
const endNum = 5

const numbersGenerator = range(startNum, endNum)
for(const number of numbersGenerator){
    console.log(number)
}
