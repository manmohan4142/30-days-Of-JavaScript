/*
Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
Solution Approach:
Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.
*/

function throttle(func, interval){
    let lastInvocationTime=0

    return function(...args){
        const now = Date.now()

        if(now - lastInvocationTime >= interval){
            func.apply(this,args)
            lastInvocationTime=now
        }else{
            console.log("Function is throttled")
        }
    }
}

function exampleFunction() {
    console.log("Function invoked!")
}
const throttledFunction = throttle(exampleFunction,1000)

throttledFunction()
throttledFunction()

setTimeout(()=>{
    throttledFunction()
}, 1000)
