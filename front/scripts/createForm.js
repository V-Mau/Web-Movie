const axios = require('axios');

function validateForm({title, year, director,genre,rate, poster}) {

    if( title === '' || year === '' || director === '' || genre === '' || rate === '' || poster === '') {
        return 'Todos los campos son obligatorios';
    }
    if(director.length < 3 || director > 50) {
        return 'El director debe tener al menos 3 caracteres';
    }
    if(isNaN (rate) || rate < 1 || rate > 10){

    }
    if (poster .includes('https://')) {

    return 'La URL debe ser de tipo https://';

    } else {
        return null;
    }

}
function createMovie(event) {

    event.prevenDefault();
    
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('Director').value;
    const genre = document.getElementById('genre').value;
    const rate = document.getElementById('Rate').value.split(' ')
    const poster = document.getElementById('Poster').value;

    
    const newMovie = {title, year, director,genre,rate, poster}

    const error = validateForm(newMovie);

    if(error) return  alert(error);

    
    // ? Petición POST
    axios
         .post('http://localhost:3000/movies', newMovie)
         .then(() => alert('Pelicula creada correctamente'))
         .catch(error => alert('Error al crear la pelicula'));
}




module.exports = createMovie;