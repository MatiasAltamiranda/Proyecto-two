function revisar(input){
    if(input.value != "" && input.value.length >= 8 && input.value.length <= 30){
      input.className = 'form-control is-valid'
      return true;
    } else{
        nombre.className = 'form-control is-invalid'
        return false;
    }
}

function revisarLongitud(textarea){
    if(textarea.value != "" && textarea.value.length <= 500){
      textarea.className = 'form-control is-valid';
      return true;
    } else{
        textarea.className = 'form-control is-invalid';
        return false;
    }
}


let revisarTerminos = document.getElementById('terminos');

revisarTerminos.addEventListener("change", verificarCheckbox);

function verificarCheckbox(){
   if(revisarTerminos.checked){
       revisarTerminos.className = "form-check-input is-valid";
       return true;
   }else{
      revisarTerminos.className = "form-check-input is-invalid";
      return false;
   }
}

function validar(event){

event.preventDefault();
event.stopPropagation();

 console.log("dentro de la función validar");
 console.log(nombre.value);
 console.log(consulta.value);

if(revisar(document.getElementById('nombre'))&&
     revisarLongitud(document.getElementById('consulta')) &&
     verificarCheckbox()
  ){
      console.log("verdadero");
  }else{
      console.log("falso");
  }
   
}

function submit() {
    document.getElementById("contactForm").submit();
}











