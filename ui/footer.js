const footer = document.createElement("footer");

footer.innerHTML = ` 
      <div class='container-xl'>
        <div class='row'>
          <div class='col'>
              <p>Logo</p>
          </div>
          <div class='col'>
               <p>CopyRight 2022 | Todos los derechos reservados</p>
          </div>
          <div class= 'd-flex flex-column col'>
               <button class= 'my-1 button-color'>Contactenos</button>
               <button class= 'my-1 button-color'>About us</button>
          </div>
        </div>
      </div>
      `;
footer.className =
  "p-4 d-flex justify-content-between align-items-center footer-color";

document.body.append(footer);
