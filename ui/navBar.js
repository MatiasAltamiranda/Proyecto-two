export function createNavBar() {
  const header = document.querySelector("#header");
  const divHeader = document.createElement("nav");
  divHeader.className =
    "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top ";
  divHeader.innerHTML = `
    <div class="container-fluid text-end">
    <a class="p-2" href=/index.html> <img src=/img/logo.png width=80rem> </a>
    <button class="navbar-toggler fs-1 bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
    <span class="navbar-toggler-icon my-toggler">
    </button>
    <div class="collapse navbar-collapse justify-content-between fs-4" id="navbarNav">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
    </li>
    <li>
      <img src="/team/stephen.jpg" alt="" width="35" height="auto" class="rounded-circle" id="imgAdmin"/>
    </li>
    <li class="nav-item">
    <div class="dropdown btn-lg">
      <a
        class="caret dropdown-toggle "
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
      </a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item fs-4" href="../admin.html">Panel de Admin</a></li>
      </ul>
    </div>
    <li class="nav-item">
    <a class="nav-link disabled" id="welcomeUser"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href=".././index.html">Inicio</a>
    </li>
    <a class="nav-link text-white" href=".././about-us.html">Sobre nosotros</a>
    </li>
    </li>
    <li class="nav-item">
    <a class="nav-link text-white" id="aCloseSession2" href="/register.html">Suscribete Ahora</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-white" id="aCloseSession" href=/login.html>Logueate</a>
    <li class="nav-item">
    <form class="d-flex">
    <input id="inputBuscar" autocomplete="off" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-light" type="button">Buscar</button>
  </form>
    </ul>
    </div>
  </div>`;
  header.append(divHeader);

  // MENSAJE DE BIENVENIDA
  function welcomeUser() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const messageWelcomeUser = document.querySelector("#welcomeUser");
    const aCloseSession = document.querySelector("#aCloseSession");
    const aCloseSession2 = document.querySelector("#aCloseSession2");
    const imgAdmin = document.querySelector("#imgAdmin");
    if (loggedUser) {
      const welcomeMessage = document.createElement("p");
      welcomeMessage.textContent = `Bienvenido ${loggedUser.name}!`;
      messageWelcomeUser.append(welcomeMessage);
      aCloseSession.textContent = "Cerrar sesion";
      aCloseSession2.textContent = "";
    }
  }
  welcomeUser();

  // DESLOGUEO
  const CloseSession = document.querySelector("#aCloseSession");
  const CloseSession2 = document.querySelector("#welcomeUser2");

  CloseSession.addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/index.html";
  });

  //BUSCAR PELICULA

  const apiURL = 'http://localhost:4000/movies'
  const inputBuscar = document.querySelector('#inputBuscar')
  
  inputBuscar.addEventListener('blur',(e)=>{
    getMovie();
}
)

 async function getMovie (){
    try {
      const response = await fetch(apiURL)
      const data = await response.json();
      linkMovie(data)
    } catch (error) {
      console.log(error)
    }
  } 
  

  function linkMovie(data){
    const inputText =  inputBuscar.value
    const mayusculaText = inputText.toUpperCase();
    data = data.filter(e=> e.name === mayusculaText)
    data.forEach((e) => {
     window.location.href = `http://127.0.0.1:5500/profile.html#${e.id}`
    });
  };

}

export default createNavBar();
