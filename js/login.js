

const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
// const btnLogin = document.querySelector('#btnLogin')
const API_URL = 'https://my-json-server.typicode.com/MatiasAltamiranda/RmaxServer/users';


form.addEventListener('submit', async e => {
    e.preventDefault()
    const parentDiv = passwordInput.parentElement;
    e.preventDefault();
    const response = await fetch(API_URL);
    const users = await response.json();
    const currentUser = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);
    if(currentUser){
        localStorage.setItem('loggedUser', JSON.stringify(currentUser));
        const userLogged = await JSON.parse(localStorage.getItem('loggedUser'));
        if(userLogged.role !== 'admin') {
            window.location.href = '../index.html'
        }else {
            window.location.href = '../admin.html'  
        }
    }else {
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'Usuario o contraseña incorrecta'
        parentDiv.append(warningMessage);
        setTimeout(() => {
            warningMessage.remove();
        }, 2000)
    }
    
});

  // VALIDAR INPUT
  function validateInput() {
    const parentDiv = this.parentElement;
    if (this.type === "email") {
      validateEmail(this);
    }
    if (this.type === "password") {
      validateLength(this);
    }
    if (this.value === "") {
      const warningMessage = document.createElement("p");
      warningMessage.textContent = "Este campo es obligatorio";
      parentDiv.append(warningMessage);
      setTimeout(() => {
        warningMessage.remove();
      }, 2000);
    }
  }


emailInput.addEventListener('blur', validateInput);
passwordInput.addEventListener('blur', validateInput); 






function validateLength (input) {
    if (input.value.length > 8 && input.value.length < 30) {
        // input.style.border = '1px solid green'
    }else {
        const parentDiv = passwordInput.parentElement;
        // input.style.border = '1px solid red'
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'debe contener entre 8 y 30 caracteres'
        parentDiv.append(warningMessage);
        setTimeout(() =>{
            warningMessage.remove();
        },2000)
    }
}

function validateEmail (input) {
    const valueEmail = input.value;
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regEx.test(valueEmail.toLowerCase())) {
        // input.style.border = '5px solid green'
    }else {
        // input.style.border = '5px solid black'
    }
};


// Redireccion a Pagina de Home o Admin page
