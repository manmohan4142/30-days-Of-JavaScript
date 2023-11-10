/*
Write a JavaScript exercise to get the filename extension.
*/


function getFileExtension(filename){
    const parts = filename.split('.');
    if(parts.length>1){
        return parts[parts.length-1];
    }else{
        return '';
    }
}
const filename1 = 'example.txt';
const filename2 = 'document.docx';
const filename3 = 'image.png';

console.log(getFileExtension(filename1));
console.log(getFileExtension(filename2));
console.log(getFileExtension(filename3));
