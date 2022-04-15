export function createNavBar(){
    const header = document.querySelector('#header')
    const divHeader = document.createElement('div')
    divHeader.className = "container bg-black"
    divHeader.innerHTML = `<ul class="nav justify-content-end">
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
            <a class="dropdown-item" href="#">Acerca de losotro</a>
          </li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link">Logueate!</a>
    </li>
  </ul>`;
  header.append(divHeader)

  function welcomeUser (){
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    const messageWelcomeUser = document.querySelector('#welcomeUser');
    if(loggedUser){
        const welcomeMessage = document.createElement('p')
        welcomeMessage.textContent = `Bienvenido ${loggedUser.name}`;
        messageWelcomeUser.append(welcomeMessage);
    }
}
welcomeUser();



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

