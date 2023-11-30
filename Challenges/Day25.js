/*
Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
Use any random API that you want
Solution Approach:
Utilize the .then method to chain promises.
*/

function fetchData(url){
    return fetch(url)
        .then(response =>{
            if(!response.ok){
                throw new Error('Network response was not ok.')
        }
        return response.json()
})
.catch(error => {
    console.error('There was a problem with the fetch opeartion: ', error)
    throw error
})
}

function getData(){
    let combinedData = {}
       return fetchData('http://www.themealdb.com/api/json/v1/1/categories.php')
        .then(data1 => {
            combinedData = { ...combinedData, ...data1}
                return fetchData('http://www.themealdb.com/api/json/v1/1/random.php')
        })
        .then(data2 => {
            combinedData = { ...combinedData, ...data2}
            return combinedData
        })
        .catch(error => {
            console.error('Error fetching data: ', error)
            throw error
        })
}

getData()
    .then(combinedData => {
        console.log('Combined Data:', combinedData)
    })
    .catch(error => {
        console.error('Error: ', error)
    })
