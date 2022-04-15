export function createNavBar(){
    const header = document.querySelector('#header')
    const divHeader = document.createElement('div')
    divHeader.className = "bg-black"
    divHeader.innerHTML = `<ul class="nav justify-content-end">
    <div>
    <a href=/index.html> <img src=/img/logo.png width=35px> </a>
    </div>
    <li class="nav-item">
      <a class="nav-link disabled" id="welcomeUser"></a>
    </li>
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
          <li>
            <a class="dropdown-item" href="/about-us.html">Acerca de Nosotro</a>
          </li>
          <li><a class="dropdown-item" href="#">contactanos!</a></li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <a id="aCloseSession" href=/login.html>Logueate!</a>
    </li>
  </ul>`;
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

