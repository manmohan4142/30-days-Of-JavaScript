/*
Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/

var student = {
    name: "David Ray",
    class: "VI",
    rollno: 12
}

function listProperties(obj){
    if(typeof obj=='object' && obj!=null){
        var propertyList = Object.keys(obj).join(',');
        console.log(propertyList);
    }else{
        console.log("Invalid input");
    }
}
listProperties(student);
