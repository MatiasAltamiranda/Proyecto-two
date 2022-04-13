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
  const featured = arr.find((element) => element.featured === true) || arr[0];
  const heroImage = document.querySelector("#heroImage");
  if (featured) {
    const { coverPage, name, description } = featured;
    heroImage.innerHTML = `
  <img class=" w-100 hero-image" src="${coverPage}" alt="">
  <div class="overlay p-5 text-white d-flex flex-column justify-content-end">
     <h2>${name}</h2>
     <p class="hero-description pe-5 ">${description}</p>
     <button class="btn btn-primary button">Reproducir</button>
  </div>
  `;
  }
}

getMovies();

/*const setFeatured = async (id, arr) => {
  const objetoEncontrado = arr.find((element) => element.featured === true)
  objetoEncontrado.featured = false

  await fetch(`${API_URL}/movies/${objetoEncontrado.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(objetoEncontrado)
  })
  .then(()=> {
    const nuevoFeatured = arr.find((element) => element.id === id)
    nuevoFeatured.featured = true
    fetch(`${API_URL}/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoFeatured)
    })
  })
}*/
