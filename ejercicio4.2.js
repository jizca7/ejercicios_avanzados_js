function findArrayIndex(array, text) {
    return array.indexOf(text);
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
    array.splice(index, 1);
}
return array;
}

const personajes = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

console.log(removeItem([...personajes], "Han Solo")); // ["Luke", "Leia", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem([...personajes], "Leia"));     // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem([...personajes], "Yoda"));     // ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
