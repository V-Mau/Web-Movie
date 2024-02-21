const formContainer = document.getElementById("form-caontainer");

const cardContainer = document.createElement('div');
cardContainer.classList.add('container', 'mt-5', 'd-flex', 'justify-content-center', 'align-items-center', 'min-vh-100');

const movieFormCard = document.createElement('div');
movieFormCard.classList.add('card', 'p-4', 'shadow', 'mb-4', 'w-50', 'bg-dark', 'text-white');

const movieForm = document.createElement('form');
movieForm.id = 'movie-form';

const titleLabel = document.createElement('label');
titleLabel.textContent = 'Título de la película';

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleInput.id = 'title';
titleInput.classList.add('form-control', 'mb-3');
titleInput.required = true;

const yearLabel = document.createElement('label');
yearLabel.textContent = 'Año';

const yearInput = document.createElement('input');
yearInput.type = 'text';
yearInput.name = 'year';
yearInput.id = 'year';
yearInput.classList.add('form-control', 'mb-3');
yearInput.required = true;

const directorLabel = document.createElement('label');
directorLabel.textContent = 'Director';

const directorInput = document.createElement('input');
directorInput.type = 'text';
directorInput.name = 'Director';
directorInput.id = 'Director';
directorInput.classList.add('form-control', 'mb-3');
directorInput.required = true;

const posterLabel = document.createElement('label');
posterLabel.textContent = 'Póster';

const posterInput = document.createElement('input');
posterInput.type = 'text';
posterInput.name = 'Poster';
posterInput.id = 'Poster';
posterInput.classList.add('form-control', 'mb-3');
posterInput.required = true;

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.classList.add('btn', 'btn-primary', 'mr-2');
submitButton.textContent = 'Enviar';

const resetButton = document.createElement('button');
resetButton.type = 'reset';
resetButton.classList.add('btn', 'btn-secondary');
resetButton.textContent = 'Borrar';

resetButton.addEventListener('click', () => {
    titleInput.value = '';
    yearInput.value = '';
    directorInput.value = '';
    posterInput.value = '';
});

movieForm.appendChild(titleLabel);
movieForm.appendChild(titleInput);
movieForm.appendChild(yearLabel);
movieForm.appendChild(yearInput);
movieForm.appendChild(directorLabel);
movieForm.appendChild(directorInput);
movieForm.appendChild(posterLabel);
movieForm.appendChild(posterInput);
movieForm.appendChild(submitButton);
movieForm.appendChild(resetButton);

movieFormCard.appendChild(movieForm);
cardContainer.appendChild(movieFormCard);
formContainer.appendChild(cardContainer);

// Contenedor para las películas
const moviesContainer = document.createElement('div');
moviesContainer.classList.add('container', 'mt-4', 'mb-4'); 

formContainer.appendChild(moviesContainer);

module.exports = movieForm;
