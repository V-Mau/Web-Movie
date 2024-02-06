// console.log(tempData);

document.addEventListener("DOMContentLoaded", function () { //me asegur de q el dom se cargue primero

   const contenedorCartelera = document.getElementById("cart"); // cree una variable para el contenedor de la cartelera

   tempData.forEach(function (pelicula) {       // recorrro el array del tempData para crear un Div por cada pelicula

    const tarjeta = document.createElement("div");

    tarjeta.className = "tarj-peli";

    const imagen = document.createElement("img");
    imagen.src = pelicula.poster;
    imagen.alt = pelicula.title;


    const titulo = document.createElement("h3");
    const enlace = document.createElement("a");
    enlace.href = '';
    enlace.textContent = pelicula.title;
    titulo.appendChild(enlace);

    const duration = document.createElement("p");
    duration.textContent = 'Duración: ' + pelicula.duration;

    const director = document.createElement("p");
    director.textContent = 'Director: ' + pelicula.director;

    const genre = document.createElement("p");
    genre.textContent = 'Genero:' + pelicula.genre;

    const rate = document.createElement("p");
    
    rate.textContent ='Calificacion: ' + pelicula.rate;

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(duration);
    tarjeta.appendChild(director);
    tarjeta.appendChild(genre);
    tarjeta.appendChild(rate);
    

    contenedorCartelera.appendChild(tarjeta);
    
})


    
})








