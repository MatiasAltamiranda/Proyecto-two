const moviesTable = document.querySelector('#table-body');
const addMovieBtn = document.getElementById('add-movie-btn');
const API_URL = 'https://my-json-server.typicode.com/MatiasAltamiranda/RmaxServer';
const table = document.querySelector('#table');
const nameInput = document.querySelector('#name-input');
const categoryInput = document.querySelector('#category-input');
const descriptionInput = document.querySelector('#description-input');
const imageInput = document.querySelector('#image-input');
const coverInput = document.querySelector('#cover-input');
const trailerInput = document.querySelector('#trailer-input');
const modalForm = document.querySelector('#modal-form');
const tableHead = document.querySelector('#table-head');
//ELIMINAR PELICULA:
const deleteMovieModal = document.querySelector('#delete-movie-modal');
//EDITAR PELICULA:
const editNameInput = document.querySelector('#edit-name-input');
const editCategoryInput = document.querySelector('#edit-category-input');
const editDescriptionInput = document.querySelector('#edit-description-input');
const editImageInput = document.querySelector('#edit-image-input');
const editTrailerInput = document.querySelector('#edit-trailer-input');
const editCoverInput = document.querySelector('#edit-cover-input');
const editMovieModal = document.querySelector('#edit-movie-modal');
const editMovieBtn = document.querySelector('#edit-movie-btn');
const editModalForm = document.querySelector('#edit-modal-form')


//CREAR TABLA DE PELÍCULAS:
function buildMoviesTable(movies){
  movies.forEach((movie)=>{
    const tableItems = [];
    const tableRow = document.createElement('tr');
    tableRow.innerHTML=`
      <td id="movie-name">
      <div>${movie.name}</div> <br/>
      <button class="edit-btn btn btn-outline-light mt-3 btn-sm" data-bs-toggle="modal" data-bs-target="#edit-movie-modal" data-id="${movie.id}">Editar Película</button>
      <button class="highlight-btn btn btn-outline-warning mt-3 btn-sm" id="highlight-btn" data-id="${movie.id}">Destacar Película</button>
      <button class="delete-btn btn btn-outline-danger mt-3 btn-sm" data-bs-toggle="modal" data-bs-target="#delete-movie-modal" data-id="${movie.id}">Eliminar Película</button>
      </td>
      <td id="movie-category">${movie.category}</td>
      <td id="featured-section">${movie.featured}</td>
      <td id="movie-description">${movie.description}</td>
      <td id="movie-image">
        <img class="table-image mx-auto d-block" src=${movie.image}>
      </td>
    `;
    tableItems.push(tableRow);
    moviesTable.append(...tableItems);
  })
}

//TRAER PELÍCULAS DE LA BASE DE DATOS:
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

//AÑADIR PELÍCULA:
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
        featured: false,
        image: imageInput.value,
        trailer: trailerInput.value,
        coverPage: coverInput.value
      }
      )
    });
    modalForm.reset();
  } catch (error) {
    return error;
  }
}

//FUNCIÓN PARA VALIDAR QUE LOS INPUTS NO ESTEN VACÍOS:
function validateInputs(){
  if (this.value === '') {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Este campo es obligatorio';
    this.parentElement.append(errorMessage);
    setTimeout(() => {
      errorMessage.remove()
    }, 1000);
  };
};

//BORRAR PELÍCULA:
async function deleteMovies(id){
  try {
    await fetch(`${API_URL}/movies/${id}`, {method: 'DELETE'});
  } catch (error) {
    return error;
  }
};

//HACER QUE EL BOTÓN SE DESHABILITE CUANDO UN INPUT ESTA VACÍO
function disableButton(input){
  if(input.value === ''){
    addMovieBtn.setAttribute('disabled', 'disabled');
    input.addEventListener('blur', ()=>{
      if(input.value !== ''){
        addMovieBtn.removeAttribute('disabled');
      }
    })
  }
}
disableButton(imageInput);

const fillEditInputs = (e) => {
  editNameInput.value = e.target.parentElement.parentElement.querySelector('#movie-name div').textContent.trim();
  editCategoryInput.value = e.target.parentElement.parentElement.querySelector('#movie-category').textContent.trim();
  editDescriptionInput.value = e.target.parentElement.parentElement.querySelector('#movie-description').textContent.trim();
  editImageInput.value = e.target.parentElement.parentElement.querySelector('#movie-image img').src;
  editTrailerInput.value = e.target.parentElement.parentElement.querySelector('#movie-trailer iframe').src;
  editCoverInput.value = e.target.parentElement.parentElement.querySelector('#movie-cover img').src;
};

const udpateTable = async (id) => {
  try {
    await fetch(`${API_URL}/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: editNameInput.value,
        description: editDescriptionInput.value,
        category: editCategoryInput.value,
        featured: false,
        image: editImageInput.value,
        trailer: editTrailerInput.value,
        coverPage: editCoverInput.value
      }
      )
    })
  } catch (error) {
    return error;
  }
};

//DESTACAR PELICULA:

const highlightMovie = async (id, value) =>{
  try {
      await fetch(`${API_URL}/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
      featured: value
      })
    })
  } catch (error) {
    return error;
  }
};

addListeners();
function addListeners(){
  modalForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    createMoviesToAdd();
  });
  nameInput.addEventListener('blur', validateInputs);
  categoryInput.addEventListener('blur', validateInputs);
  descriptionInput.addEventListener('blur', validateInputs);
  imageInput.addEventListener('blur', validateInputs);
  trailerInput.addEventListener('blur', validateInputs);
  coverInput.addEventListener('blur', validateInputs);
  deleteMovieModal.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete-movie-btn')){
      const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
      deleteMovies(id);
    };
  });
  moviesTable.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete-btn')){
      deleteMovieModal.setAttribute('data-id', e.target.getAttribute('data-id'));
    };
    if(e.target.classList.contains('edit-btn')){
      editMovieModal.setAttribute('data-id', e.target.getAttribute('data-id'));
      fillEditInputs(e);
    };
    if(e.target.classList.contains('highlight-btn')){
      const id = e.target.getAttribute('data-id');
      const column = e.target.parentElement.parentElement.querySelector('#featured-section');
      const value = column.textContent === 'true' ? false : true;
      highlightMovie(id, value);
    }
    });
    //EDITAR PELICULA:
    editModalForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const id = e.target.parentElement.parentElement.getAttribute('data-id');
      udpateTable(id);
    });
    editNameInput.addEventListener('blur', validateInputs);
    editCategoryInput.addEventListener('blur', validateInputs);
    editDescriptionInput.addEventListener('blur', validateInputs);
    editImageInput.addEventListener('blur', validateInputs);
    editCoverInput.addEventListener('blur', validateInputs);
    editTrailerInput.addEventListener('blur', validateInputs);
}


// REDIRECCIONAR AL INDEX SI NO SOS ADMIN 

const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

if(!loggedUser || loggedUser.role !== 'admin') {
  window.location.href = '/index.html'
}
