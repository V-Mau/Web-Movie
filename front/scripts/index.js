const renderCards = require('./renderCards');
const createMovie = require('./createForm');
const axios = require('axios');


const URL = 'http://localhost:3000/movies';
// const URL = `https://students-api.2.us-1.fl0.io/movies`
// const URL = `https://henry-movies-dev-sgtm.3.us-1.fl0.io`

const dataMovies = async () => {
  try{
    const response = await axios.get(URL);
    await renderCards(response.data);

  } catch (error){

    alert( 'Error al obtener los datos del servidor') 

  }
}

document.addEventListener('DOMContentLoaded', () => {
  dataMovies();
  const submit = document.getElementById('submi');
  submit?.addEventListener('submit', createMovie) 
  
});

// console.log('Versión 1.0.10 - estoy conectado a mi backend');









