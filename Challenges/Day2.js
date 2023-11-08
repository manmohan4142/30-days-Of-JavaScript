/*
## Challenge 2:
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '
*/

function  UpperCaseWords(s){
    var words = s.split(" ");
    for(var i=0; i<words.length; i++){
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase()+word.slice(1);
    }
    var UpperCaseStr = words.join(" ");
    return UpperCaseStr;
}

var inputString = "the quick brown fox";
var result = UpperCaseWords(inputString);
console.log(result);
