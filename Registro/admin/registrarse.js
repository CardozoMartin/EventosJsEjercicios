import { validarContraseña, validarEmail, validarNombre } from "./validaciones.js";

const registroForm = document.getElementById("registroForm");

const nombreUsuario = document.getElementById("inputNombre");
const emailUsuario = document.getElementById("inputEmail");
const contraseniaUsuario = document.getElementById("inputContrasenia");

nombreUsuario.addEventListener('blur',(e)=>{
   const value = e.target.value;

   validarNombre(value,nombreUsuario)
});
emailUsuario.addEventListener('blur',(e)=>{
   const value = e.target.value;

   validarEmail(value,emailUsuario)
});
contraseniaUsuario.addEventListener('blur',(e)=>{
   const value = e.target.value;

   validarContraseña(value,contraseniaUsuario)
});

registroForm.addEventListener("submit", (e) => {
  
  e.preventDefault();

  let nombre = nombreUsuario.value;
  let email = emailUsuario.value;
  let contrasenia = contraseniaUsuario.value;

 if(validarNombre(nombre, nombreUsuario)&&
    validarEmail(email, emailUsuario)&&
    validarContraseña(contrasenia,contraseniaUsuario)){}
 
  // ahora creamos nuestra base de datos;
  const Usuarios = JSON.parse(localStorage.getItem("usuario")) || [];
  //ahora verificamos que el usuario no esta registrado ya
  const verificarEmail = Usuarios.find((us) => us.mail === emailUsuario);

  if (verificarEmail) {
    //verificamos si el usuario esta registrado nos devuelve un alert
    return alert("El usuario ya esta registrado");
  }
  // si el usuario no esta registrado se cumple esta condicion
  Usuarios.push({
    nombre: nombre,
    mail: email,
    contrasenia: contrasenia
  });
  localStorage.setItem("usuario", JSON.stringify(Usuarios));
  alert("Registro Exitoso");
  //redireccionamos le ponemos un intervalo para demorar la redireccion

  setInterval(() => {
    window.location.href = "iniciar.html";
  }, 5000);
});



const verContraseña = document.getElementById('verContraseña');
const contrasenia = document.getElementById('inputContrasenia');

verContraseña.addEventListener('click',()=>{
    if(contrasenia.type === "password"){
        contrasenia.type = "text"
    }else{
        contrasenia.type ="password"
    }
})
