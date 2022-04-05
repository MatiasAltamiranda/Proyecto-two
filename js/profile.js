const apiURL ='http://localhost:4000/movies';
const commentURL = 'https://jsonplaceholder.typicode.com/comments';
const idURL = window.location.hash.slice(1);
const containerImg = document.querySelector("#containerImg")
const titleMovie = document.querySelector("#titleMovie")
const categoryMovie = document.querySelector("#categoryMovie")
const descriptionMovie = document.querySelector("#descriptionMovie")
const listComments = document.querySelector('#listComments')


async function getMovies(id){
 try {
     const response = await fetch(`${apiURL}/${id}`)
     const data = await response.json();
     buildMoviesDOM(data);
 } catch (error) {
     console.log(error);
 }
}


function buildMoviesDOM(movie){
    containerImg.innerHTML=`<img class="img-fluid" src="${movie.image}">`
    titleMovie.textContent=`${movie.name}`;
    categoryMovie.textContent = ` ${movie.category}`
    descriptionMovie.textContent=` ${movie.description}`
}

document.addEventListener('DOMContentLoaded', ()=>{
  getMovies(idURL)
})


async function getComments(){
    try {
        const response= await fetch(commentURL);
        const data = await response.json();
        buildComment(data)
    } catch (error) {
        console.log(error)
    }
}


function buildComment(comment){
    comment = comment.filter( (e ,i) => i<10)
    comment.forEach(e => {
        const emailComment = document.createElement('div')
        emailComment.classList='col-12'
        const textComment = document.createElement('div')
        textComment.classList='col-12 mb-5'
        emailComment.innerHTML=`<p class="text-light"><strong>${e.email}</strong> </p>`
        textComment.innerHTML =`<p class="text-light">${e.body}</p>`
        listComments.append(emailComment)
        listComments.append(textComment)
    });
}

getComments();