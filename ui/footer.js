export function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = ` 
      <div class='container-xl'>
        <div class='row'>
          <div class='container-sm col-12 col-md-4 text-center pb-4' >
              <a><img class="img-fluid image-size" src="./img/logo.png" alt=""></a>
          </div>
          <div class='col-12 col-md-4 text-center pt-3'>
               <p>CopyRight 2022 &copy</p>
               <p>Todos los derechos reservados</p>
          </div>
          <div class= 'd-flex flex-column col-12 col-md-4 align-items-center pt-3'>
               <button class= 'my-1 button-color'>Contactenos</button>
               <button class= 'my-1 button-color'>About us</button>
          </div>
        </div>
      </div>
      `;
  footer.className =
    "p-4 d-flex justify-content-between align-items-center footer-color";

  document.body.append(footer);
}
export default createFooter;
