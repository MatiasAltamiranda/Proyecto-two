export function createNavBar() {
  const header = document.querySelector("#header");
  const divHeader = document.createElement("nav");
  divHeader.className =
    "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top  ";
  divHeader.innerHTML = `
    <link rel="stylesheet" href="./css/nav-bar.css" />
    <div class="container-fluid text-end">
    <a class="p-2" href=/index.html> <img src=/img/logo.png width=80rem> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
    <span class="navbar-toggler-icon my-toggler">
    </button>
    <div class="collapse navbar-collapse justify-content-between fs-4" id="navbarNav">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li>
      <img src="/team/stephen.jpg" alt="" width="35" height="auto" class="rounded-circle" id="welcomeUser2"/>
    </li>
    <li class="nav-item">
    <div class="dropdown btn-lg">
      <a
        class="btn bg-transparent dropdown-toggle "
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
      <a class="nav-link" aria-current="page" href=".././index.html">Inicio</a>
    </li>
    <a class="nav-link" href=".././about-us.html">Sobre nosotros</a>
    </li>
    </li>
    <li class="nav-item">
    <a class="nav-link" id="aCloseSession2" href="/register.html">Suscribete Ahora</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" id="aCloseSession" href=/login.html>Logueate</a>
    <li class="nav-item">
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

  CloseSession.addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/index.html";
  });


}

export default createNavBar();
