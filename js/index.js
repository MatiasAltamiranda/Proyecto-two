const closeSession = document.querySelector('#closse-sesion');
let isLoggedUser = JSON.parse(localStorage.getItem('loggedUser'));

closeSession.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    window.location.href = '/login.html'
})




if(!isLoggedUser) {
    window.location.href = '/login.html'
}