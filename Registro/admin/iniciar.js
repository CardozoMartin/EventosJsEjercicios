const inicioForm = document.getElementById('inicioForm');

inicioForm.addEventListener('submit',(e)=>{
e.preventDefault();
    const emailUsuario = document.getElementById('inputEmail').value;
    const contraseniaUsuario = document.getElementById('inputContrasenia').value;

    const Usuarios = JSON.parse (localStorage.getItem('usuario')) || [];

    //buscamos si considen el email y la contraseña con el metodo find
    const VerficarExisteUsuario = Usuarios.find(us => us.mail === emailUsuario && us.contrasenia === contraseniaUsuario );
    //verificamos que exista
    if(!VerficarExisteUsuario){
        
        return alert("Contraseña o Email invalido");
    }
    alert(`Bievenido ${VerficarExisteUsuario.nombre}`)
    //verificamos si hay un usuario logeado
    localStorage.setItem('inicio_correcto',JSON.stringify(VerficarExisteUsuario))
    window.location.href = '../index.html'
})