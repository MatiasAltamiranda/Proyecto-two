/*const heroPelicula = peliculas.find((element) => element.featured);



if (heroPelicula) {
  const { name, description, image } = heroPelicula;

  const heroImage = document.querySelector("#heroImage");

  heroImage.innerHTML = `
  <img class="w-100 hero-image" src="${image}" alt="">
  <div class="overlay p-5 text-white d-flex flex-column justify-content-end">
     <h2>${name}</h2>
     <p class="w-50 pe-5">${description}</p>
     <button class="w-25 btn btn-primary">Reproducir</button>
  </div>
  `;
}*/

/*function createHeroImage(pelicula) {
  const { name, description, image } = pelicula;

  const heroImage = document.querySelector("#heroImage");

  heroImage.innerHTML = `
  <img class="w-100 hero-image" src="${image}" alt="">
  <div class="overlay p-5 text-black d-flex flex-column justify-content-end">
     <h2>${name}</h2>
     <p class="w-50 pe-5">${description}</p>
     <button class="w-25 btn btn-primary">Reproducir</button>
  </div>
  `;
}

/*1) crear funcion asyc oara traer peliculas 
2 hacer fetch, transformar en json 
eso me va dar un array de peliculas al cual hay que hacerle el find 
 
despues de hacer el find llamar a create hero image y pasar por parametros la pelicula encontrada en eel find
*/
const API_URL = `http://localhost:4000`;

async function getMovies() {
  try {
    const response = await fetch(`${API_URL}/movies`);
    const data = await response.json();
    getMovieArr(data);
  } catch (error) {
    console.error(error);
  }
}

function getMovieArr(arr) {
  arr = arr.filter((element) => element.featured === true);
  const heroImage = document.querySelector("#heroImage");

  arr.forEach((element) => {
    heroImage.innerHTML = `
  <img class="w-100 hero-image" src="${element.image}" alt="">
  <div class="overlay p-5 text-white d-flex flex-column justify-content-end">
     <h2>${element.name}</h2>
     <p class="w-50 pe-5">${element.description}</p>
     <button class="w-25 btn btn-primary">Reproducir</button>
  </div>
  `;
  });
}
getMovies();
