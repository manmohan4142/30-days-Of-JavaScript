/*
Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
*/

const asyncOperation = async (element) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Processed element: ${element}`);
            resolve();
        }, 1000);
    });
};
const asyncLoop = async (array, asyncFunction) => {
    for (const element of array) {
        await asyncFunction(element);
    }
};

const myArray = [1, 2, 3, 4, 5];

(async () => {
    try {
        await asyncLoop(myArray, asyncOperation);
        console.log('Async loop completed.');
    } catch (error) {
        console.error('Error during async loop:', error);
    }
})();
