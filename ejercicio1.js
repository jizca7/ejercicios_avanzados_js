const movies = [
{
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
},
{
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
},
{
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
},
{
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
},
];
const categorias = [];

for (const movie of movies) {
    for (const category of movie.categories) {
        if (!categorias.includes(category)) {
        categorias.push(category);
        }
    }
}

console.log(categorias);