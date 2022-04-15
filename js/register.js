const form = document.querySelector('#loginForm');
const nameInput = document.querySelector('#userName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const confirmPass = document.querySelector('#confirmPass');
const buttonEnviar = document.querySelector('#btnEnviar');
const API_URL = 'http://localhost:4000/users';

const createRegister = async () => {
    try{
        console.log('email', emailInput.value);
        console.log('password', passwordInput.value);
        await fetch(`${API_URL}`, {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name : nameInput.value,
                email : emailInput.value,
                role : 'user',
                password : passwordInput.value,
            })
        });
        form.reset();
    }catch {
        console.log(err);
    }
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const response = await fetch(API_URL);
    const users = await response.json();
    const currentUser = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
    createRegister();
    window.location.href = '.././index.html';
});





function validateInput () {
    const parentDiv = this.parentElement;
    if(this.type === 'email'){
        validateEmail(this);
    }
     if(this.type === 'password') {
         validateLength(this);
         validatePassword();
     }
     if (this.type === 'text') {
         validateLength
     }


    
    if(this.value === '') {
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'Este campo es obligatorio'
        parentDiv.append(warningMessage);
        setTimeout(() => {
            warningMessage.remove();
        }, 2000)
    };
};

nameInput.addEventListener('blur', validateInput);

emailInput.addEventListener('blur', validateInput);

passwordInput.addEventListener('blur', validateInput);

confirmPasswordInput.addEventListener('blur', validateInput);


function validateEmail (input) {
    const valueEmail = input.value;
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regEx.test(valueEmail.toLowerCase())) {
        input.style.border = '5px solid green'
    }else {
        // input.style.border = '5px solid red'
    }
};

function validateLength (input) {
    if (input.value.length > 8 && input.value.length < 30) {
        input.style.border = '1px solid green'
    }else {
        const parentDiv = input.parentElement;
        // input.style.border = '1px solid red'
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'debe contener entre 8 y 30 caracteres'
        parentDiv.append(warningMessage);
        setTimeout(() =>{
            warningMessage.remove();
        },2000)
    }
}

function validatePassword() {
    if( passwordInput.value !== confirmPasswordInput.value){
        const warningMessage2 = document.createElement('p');
        warningMessage2.textContent = 'Ambas contraseñas deben coincidir'
        confirmPass.append(warningMessage2);
    } else {
        confirmPass.removeChild(confirmPass.lastChild);
    }
};


// function validatePassword() {
//     if(passwordInput.value === confirmPasswordInput.value) {
//         input.style.border = '1px solid green'
//     }else{
//         const warningMessage2 = document.createElement('p');
//         warningMessage2.textContent = 'Ambas contraseñas deben coincidir'
//         confirmPass.append(warningMessage2);
//     }
// }