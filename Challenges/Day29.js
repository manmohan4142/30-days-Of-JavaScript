/*
Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
Solution Approach:
Use Promise.race and a timeout promise.
*/

function raceWithTimeout(promises,timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout'))
        }, timeout)
    })
    return Promise.race([...promises, timeoutPromise])
}

const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000))
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 3000))

const promisesArray = [promise1, promise2, promise3]

const timeoutValue = 2500
raceWithTimeout(promisesArray, timeoutValue)
    .then(result => console.log('Resolved:', result))
    .catch(error => console.error('Rejected:', error.message))
