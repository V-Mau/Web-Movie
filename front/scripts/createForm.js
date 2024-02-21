const movieForm = require('./form');

function initializeForm() {
    if (!movieForm) {
        alert('No se encontró la película');
    }
}

module.exports = {
    initializeForm
};
