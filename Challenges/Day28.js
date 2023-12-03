/*
Create a proxy object that intercepts and logs all property access.
Solution Approach:
Use the Proxy object to create a wrapper around another object.
*/

const targetObject = {
    name: 'John',
    age: '25',
}

const loggingProxy = new Proxy(targetObject, {
    get: function(target, property, receiver){
        console.log(`Accessed property: ${property}`)
        return Reflect.get(target,property,receiver)
    }
})

console.log(loggingProxy.name)
console.log(loggingProxy.age)
