const apiURL = "http://localhost:4000/movies";
const commentURL = "https://jsonplaceholder.typicode.com/comments";
const idURL = window.location.hash.slice(1);
const containerImg = document.querySelector("#containerImg");
const titleMovie = document.querySelector("#titleMovie");
const categoryMovie = document.querySelector("#categoryMovie");
const descriptionMovie = document.querySelector("#descriptionMovie");
const listComments = document.querySelector("#listComments");
const embed = document.querySelector("#embed");
const inputText = document.querySelector("#exampleInputtext");
const textArea = document.querySelector("#exampleFormControlTextarea1");

/* SECCION CATEGORIAS */

async function getMovies(id) {
  try {
    const response = await fetch(`${apiURL}/${id}`);
    const data = await response.json();
    buildMoviesDOM(data);
  } catch (error) {
    console.log(error);
  }
}

function buildMoviesDOM(movie) {
  embed.src = `${movie.trailer}`;
  containerImg.innerHTML = `<img class="img-fluid" src="${movie.image}">`;
  titleMovie.textContent = `${movie.name}`;
  categoryMovie.textContent = ` ${movie.category}`;
  descriptionMovie.textContent = ` ${movie.description}`;
}

document.addEventListener("DOMContentLoaded", () => {
  getMovies(idURL);
});

/* SECCION COMENTARIOS */

async function getComments() {
  try {
    const response = await fetch(commentURL);
    const data = await response.json();
    buildComment(data);
  } catch (error) {
    console.log(error);
  }
}

function buildComment(comment) {
  comment = comment.filter((e, i) => i < 10);
  comment.forEach((e) => {
    const emailComment = document.createElement("div");
    emailComment.classList = "col-12";
    const textComment = document.createElement("div");
    textComment.classList = "col-12 mb-5";
    emailComment.innerHTML = `<p class="text-light"><strong>${e.email}</strong> </p>`;
    textComment.innerHTML = `<p class="text-light">${e.body}</p>`;
    listComments.append(emailComment);
    listComments.append(textComment);
  });
}

getComments();

/* VALIDACION DE INPUTS */

inputText.addEventListener("blur", validateInput);
textArea.addEventListener("blur", validateInput);

function validateInput() {
  const parentDiv = this.parentElement;
  if (this.value === "") {
    const mesagge = document.createElement("p");
    mesagge.classList = "text-danger fw-bold mt-3";
    this.style.border = "2px solid red";
    mesagge.textContent = "*ESTE CAMPO ES OBLIGATORIO*";
    parentDiv.append(mesagge);
    setTimeout(() => {
      mesagge.remove();
    }, 3000);
  } else if (this.type === "text") {
    validateEmail(this);
  } else {
    validateLenght(this);
  }
}

function validateEmail(field) {
  const value = field.value;
  const parentDiv = field.parentElement;
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(value.toLowerCase())) {
    field.style.border = "2px solid green";
  } else {
    const mesagge = document.createElement("p");
    mesagge.classList = "text-danger fw-bold mt-3";
    field.style.border = "2px solid red";
    mesagge.textContent = "*EL E-MAIL NO ES VALIDO*";
    parentDiv.append(mesagge);
    setTimeout(() => {
      mesagge.remove();
    }, 3000);
  }
}

function validateLenght(field) {
  const parentDiv = field.parentElement;
  if (field.value.length <= 500) {
    field.style.border = "2px solid green";
  } else {
    const mesagge = document.createElement("p");
    mesagge.classList = "text-danger fw-bold mt-3";
    field.style.border = "2px solid red";
    mesagge.textContent = "*LIMITE 500 CARACTERES*";
    parentDiv.append(mesagge);
    setTimeout(() => {
      mesagge.remove();
    }, 3000);
  }
}

import createFooter from "../ui/footer.js";
createFooter();
