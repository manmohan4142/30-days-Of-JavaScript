/*
Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
Solution Approach:
Combine map, filter, and reduce array methods.
*/

function calculateTotal(numbers){
    const oddNumbers = numbers.filter(number => number%2!==0)
    const squaredNumbers = oddNumbers.map(number => number * number)

    const total = squaredNumbers.reduce((acc, current) => acc + current,0)

    return total
}

const numbersArray = [1,2,3,4,5,6,7,8,9]
const result = calculateTotal(numbersArray)
console.log(result)
