const footer = document.createElement("footer");

footer.innerHTML = ` 
      <div class='container-xl'>
        <div class='row'>
          <div class='col-12 col-md-4 align-content-center' >
              <p class='text-center'>Logo</p>
          </div>
          <div class='col-12 col-md-4 text-center'>
               <p>CopyRight 2022 &copy</p>
               <p>Todos los derechos reservados</p>
          </div>
          <div class= 'd-flex flex-column col-12 col-md-4 align-items-center'>
               <button class= 'my-1 button-color'>Contactenos</button>
               <button class= 'my-1 button-color'>About us</button>
          </div>
        </div>
      </div>
      `;
footer.className =
  "p-4 d-flex justify-content-between align-items-center footer-color";

document.body.append(footer);
