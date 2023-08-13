import datos from "../data/data.json" assert { type: "json" };
import { Gif } from "./clases.js";

const cuerpoTabla = document.querySelector("#cuerpo-tabla");

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";
  datos.forEach((item) => {
    const fila = document.createElement("tr");
    const celdas = `<th>${item.gift}</th>
        <td>${item.tipo}</td>
        <td>${item.tiempo}</td>
        <td>$${item.precio}</td>
        <div class="d-flex gap-2">
        <button class="btn btn-outline-warning" ><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-outline-danger" class="btnEliminar"><i class="bi bi-x-square"></i></button>



        </div>
        `;


    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};


cargarTabla();

document.querySelector("#formGift").addEventListener('submit',(event)=>{
  event.preventDefault();
  let id = datos.at(-1).id + 1;
  let gift = document.querySelector('#gift').value;
  let tipo = document.querySelector('#tipo').value;
  let tiempo = document.querySelector('#tiempo').value;
  let precio = document.querySelector('#precio').value;
  let imagen = document.querySelector('#imagen').value;

  datos.push(new Gif(id,gift,tipo,tiempo,precio,imagen))
  document.querySelector("#formGift").reset();
  cargarTabla();
})


window.borrarGift = (id)=>{
  const indice = datos.findIndex((item)=>{
    item.id === id;
  });
  let validar = confirm(`Desea eliminar la Gift Card?`);
  if(validar){
    datos.splice(indice,1);
    cargarTabla();
  }
}

  
