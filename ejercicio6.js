function swap(array, index1, index2) {
  // Guardamos el valor del primer índice en una variable temporal
const temp = array[index1];
  // Intercambiamos los valores de los índices
array[index1] = array[index2]; array[index2] = temp;
  // Retornamos el array modificado
return array;
}


const fantasticFour = [
"La antorcha humana",
"Mr. Fantástico",
"La mujer invisible",
"La cosa",
];

console.log(swap(fantasticFour, 1, 3));

