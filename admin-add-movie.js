const moviesTable = document.querySelector('#table-body');
const addMovieBtn = document.querySelector('#add-movie-btn');
const API_URL = 'http://localhost:4000';
const table = document.querySelector('#table');
const nameInput = document.querySelector('#name-input');
const categoryInput = document.querySelector('#category-input');
const featuredInput = document.querySelector('#featured-input');
const descriptionInput = document.querySelector('#description-input');
const imageInput = document.querySelector('#image-input');
const modalForm = document.querySelector('#modal-form');

function buildMoviesTable(movies){
  movies.forEach((movie)=>{
    const tableRow = document.createElement('tr');
    tableRow.innerHTML=`
      <td class="hide">${movie.id}</td>
      <td id=${movie.id}>
      ${movie.name} <br/>
      <button class="btn btn-outline-light mt-3">Editar Película</button>
      <button class="btn btn-outline-warning mt-3">Destacar Película</button>
      <button class="delete-btn btn btn-outline-danger mt-3">Eliminar Película</button>
      </td>
      <td>${movie.category}</td>
      <td>${movie.featured}</td>
      <td>${movie.description}</td>
      <td>
        <img class="table-image" src=${movie.image}>
      </td>
    `;
    moviesTable.append(tableRow);
  })
}

getMovies();
async function getMovies(){
  try {
    const response = await fetch(`${API_URL}/movies`);
    const data = await response.json();
    buildMoviesTable(data);
  } catch (error) {
    return error;
  }
}

async function createMoviesToAdd(){
  try {
    await fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput.value,
        description: descriptionInput.value,
        category: categoryInput.value,
        featured: featuredInput.value,
        image: imageInput.value
      }
      )
    });
    modalForm.reset();
  } catch (error) {
    console.log(error);
  }
}

function validateInputs(){
  if (this.value === '') {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Este campo es obligatorio';
    this.parentElement.append(errorMessage);
    setTimeout(() => {
      errorMessage.remove()
    }, 1000);
  };
}

async function deleteMovies(id){
  try {
    await fetch(`${API_URL}/movies/${id}`, {method: 'DELETE'});
  } catch (error) {
    return error;
  }
}

//HACER QUE EL BOTÓN SE DESHABILITE CUANDO UN INPUT ESTA VACÍO
/* function disableButton(input){
  if(input.value === ''){
    addMovieBtn.disabled = true;
  } else{
    addMovieBtn.disabled = false;
  }
}
disableButton(nameInput); */

addListeners();
function addListeners(){
  modalForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    createMoviesToAdd();
  });
  nameInput.addEventListener('blur', validateInputs);
  categoryInput.addEventListener('blur', validateInputs);
  featuredInput.addEventListener('blur', validateInputs);
  descriptionInput.addEventListener('blur', validateInputs);
  imageInput.addEventListener('blur', validateInputs);
  moviesTable.addEventListener('click', e =>{
    if(e.target.classList.contains('delete-btn')){
      deleteMovies(e.target.parentElement.id);
    }
  })
}

//TODO: HACER LA PÁGINA PARA ADMIN.