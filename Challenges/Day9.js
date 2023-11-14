/*
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/


function firstNonRepeatedCharacter(s){
    const charCount = {};
    for (let char of s){
        charCount[char] = (charCount[char] || 0)+1;
    }
    for(let char of s){
        if(charCount[char]==1){
            return char;
        }
    }
    return null;
}
const sampleInput = 'abacddbec';
const res = firstNonRepeatedCharacter(sampleInput);
console.log(res);
