// DESLOGEAR DESDE EL NAVBAR
// const closeSession = document.querySelector('#closse-sesion');
// let isLoggedUser = JSON.parse(localStorage.getItem('loggedUser'));

// closeSession.addEventListener('click', () => {
//     localStorage.removeItem('loggedUser');
//     window.location.href = '/login.html'
// })




// if(!isLoggedUser) {
//     window.location.href = '/login.html'
// }

import { createNavBar } from ".././ui/navBar.js";

import createFooter from "../ui/footer.js";
createFooter();
