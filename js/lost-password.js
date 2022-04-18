const email = document.getElementById("email-lostp");
const formulario = document.getElementById("form-lostp");
const parrafo = document.getElementById("warnings-lostp");
const parrafo2 = document.getElementById("send-lostp");

formulario.addEventListener("click", function (e) {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";
  parrafo2.innerHTML = "";
  if (!validarEmail.test(email.value)) {
    warnings += `* El email no es valido`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo2.innerHTML = "El link se envio correctamente a su correo";
  }
});
