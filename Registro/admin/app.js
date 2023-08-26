
//ahora verificamos si hay un inicio de session y lo guardamos
const inicioUsuario = JSON.parse(localStorage.getItem('inicio_correcto')) || false;
//verificamos si no hay un inicio activo lo enviamos nuevamente a iniciar sesion
if(!inicioUsuario){
    window.location.href = "./paginas/iniciar.html"
}

const cerrarSesion = document.getElementById('cerrarSesion');
cerrarSesion.addEventListener('click',()=>{
    alert("Hasta pronto!");
    localStorage.removeItem('inicion_correcto')
    window.location.href = "./paginas/iniciar.html"
})