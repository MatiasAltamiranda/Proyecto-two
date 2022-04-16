export function createNavBar(){
    const header = document.querySelector('#header')
    const divHeader = document.createElement('nav')
    divHeader.className = "navbar navbar-expand-lg navbar-dark bg-dark"
    divHeader.innerHTML = `
    <div class="container-fluid">
    <a class="p-3" href=/index.html> <img src=/img/logo.png width=60rem> </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href=".././index.html">Inicio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href=".././about-us.html">Sobre nosotros</a>
    </li>
    </ul>
    <li class="nav-item">
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a class="dropdown-item" href="../contacto.html">contactanos!</a></li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" id="welcomeUser"></a>
    </li>
    <li class="nav-item">
      <a id="aCloseSession" href=/login.html>Logueate!</a>
    </li>
    </div>
  </div>`;
  header.append(divHeader)

  // MENSAJE DE BIENVENIDA
  function welcomeUser (){
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const messageWelcomeUser = document.querySelector('#welcomeUser');
    const aCloseSession = document.querySelector('#aCloseSession');
    if(loggedUser){
        const welcomeMessage = document.createElement('p')
        welcomeMessage.textContent = `Bienvenido ${loggedUser.name}!`;
        messageWelcomeUser.append(welcomeMessage);
        aCloseSession.textContent = 'Cerrar sesion'
    }
}
welcomeUser();




// DESLOGUEO
const CloseSession = document.querySelector('#aCloseSession');

CloseSession.addEventListener('click', () => {
  localStorage.removeItem('loggedUser');
  window.location.href = '/index.html'
})



// VALIDAR INPUT 
function validateInput(){
    const parentDiv = this.parentElement;
    if(this.type === 'email'){
        validateEmail(this);
    }
    if(this.type === 'password') {
        validateLength(this);
    }
    if(this.value === '') {
        const warningMessage = document.createElement('p');
        warningMessage.textContent = 'Este campo es obligatorio'
        parentDiv.append(warningMessage);
        setTimeout(() => {
            warningMessage.remove();
        }, 2000)
    };
}


}

export default createNavBar();

