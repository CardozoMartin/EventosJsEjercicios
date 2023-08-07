

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let comprobar = document.getElementById('comprobar');


let numeroAzar =  Math.floor(Math.random()*100) + 1;


comprobar.addEventListener('click', () => {
    let numeroImpresado = parseInt(numeroEntrada.value);

    if(numeroImpresado <= 1 || numeroImpresado >= 100 ){
        mensaje.textContent = " Por favor ingresa un numero valido entre 1 y 100";
        mensaje.style.color = "black"
        return
    }
    if(numeroImpresado ===   numeroAzar){
        mensaje.textContent = " Felicidades adivinaste el numero ";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    }else if ( numeroImpresado < numeroAzar){
        mensaje.textContent = "Casi ! el numero es mas alto al que introduciste"
        mensaje.style.color = "red"
    }else{
        mensaje.textContent = "Casi ! el numero es mas bajo al que introduciste"
        mensaje.style.color = "red"
    }
})

