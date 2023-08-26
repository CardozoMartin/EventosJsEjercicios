 const registroForm = document.getElementById('registroForm');

 registroForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const nombreUsuario = document.getElementById('inputNombre').value;
    const emailUsuario = document.getElementById('inputEmail').value;
    const contraseniaUsuario = document.getElementById('inputContrasenia').value;

    // ahora creamos nuestra base de datos;
     const Usuarios = JSON.parse(localStorage.getItem('usuario')) || [];
     //ahora verificamos que el usuario no esta registrado ya
     const verificarEmail = Usuarios.find(us => us.mail === emailUsuario)
     
     
     if(verificarEmail){
        //verificamos si el usuario esta registrado nos devuelve un alert
        return alert("El usuario ya esta registrado");

     }
        // si el usuario no esta registrado se cumple esta condicion
        Usuarios.push({nombre:nombreUsuario, mail:emailUsuario, contrasenia:contraseniaUsuario })
        localStorage.setItem('usuario',JSON.stringify(Usuarios))
        alert('Registro Exitoso')
        //redireccionamos le ponemos un intervalo para demorar la redireccion

        setInterval(()=>{
            window.location.href = 'iniciar.html'
        },5000);
        
     

 })