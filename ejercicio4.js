function findArrayIndex(array, text) {
    //Tu codigo
    return array.indexOf(text);
}

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Han Solo"));  
console.log(findArrayIndex(mainCharacters, "Leia"));       
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));    
console.log(findArrayIndex(mainCharacters, "Yoda"));       