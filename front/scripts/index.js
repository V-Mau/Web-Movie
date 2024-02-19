const renderCards = require('./renderCards');
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

console.log('Versión 1.0.10 - estoy conectado a mi backend');

dataMovies();








