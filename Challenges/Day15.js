/*
create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
Test Data :
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
["Scaler"]
['Sc' , 'al' ,'er']
*/

function s_chop(s,size){
    if(!size || size<=0){
        return [s]
    }
    const res = []
    for(let i=0; i<s.length; i+= size){
        res.push(s.slice(i,i+size))
    }
    return res
}
console.log(s_chop('Scaler'))
console.log(s_chop('Scaler',2))
