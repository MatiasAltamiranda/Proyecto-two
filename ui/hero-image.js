const API_URL = `https://my-json-server.typicode.com/MatiasAltamiranda/RmaxServer`;

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
  <div class="text-center overlay p-5 text-white d-flex flex-column justify-content-end">
     <h2 class="display-2 fw-bold">${name}</h2>
     <p class="fs-5 text-center">Dos días antes de su boda, cuatro amigos viajan a Las Vegas para una fiesta inolvidable y salvaje</p>
     <div class="text-center">
     <a href=".././404.html">
     <button class="btn btn-outline-light button fs-1">Reproducir</button>
     </a>
     </div
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
