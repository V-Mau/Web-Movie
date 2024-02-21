// renderCards.js

async function renderCards (data) {
  try{
    
    const contenedorCartelera = document.getElementById('cart');

    data.forEach(function (pelicula) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarj-peli";
      
            const imagen = document.createElement("img");
            imagen.src = pelicula.poster;
            imagen.alt = pelicula.title;
      
            const titulo = document.createElement("h3");
            const enlace = document.createElement("a");
            enlace.href = "#";
            enlace.textContent = pelicula.title;
            titulo.appendChild(enlace);
      
            const duration = document.createElement("p");
            duration.textContent = `Duración: ${pelicula.duration}`;
      
            const director = document.createElement("p");
            director.textContent = `Director: ${pelicula.director}`;
      
            const genre = document.createElement("p");
            genre.textContent = `Género: ${pelicula.genre.join(", ")}`;
      
            const rate = document.createElement("p");
            rate.textContent = `Calificación: ${pelicula.rate}`;
      
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(titulo);
      
            tarjeta.appendChild(duration);
            tarjeta.appendChild(director);
            tarjeta.appendChild(genre);
      
            tarjeta.appendChild(rate);
      
            contenedorCartelera.appendChild(tarjeta);
    

          });
   
    
  } catch ( error) {
    alert('Error al obtener datos del servidor')
  }
}

module.exports = renderCards;




























