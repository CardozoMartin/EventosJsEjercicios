import peli from "../data/data.json" assert { type: "json" };


const tarjeta = document.querySelector("#cuerpo-tarjeta");


const mostrarPelicula = () => {
    tarjeta.innerHTML = ""
        peli.forEach((item)=>{
            const fila = document.createElement("div");
            fila.classList
            const tarj =`
            
            <div class="col-md-4 mb-4">
                    <div class="card" style="width: 12rem;">
                    <img src=${item.imagen} class="card-img-top imangePeli" alt="${item.titulo}" >
                    <div class="card-body">
                      <h5 class="card-title">${item.titulo}</h5>
                      
                      
                      <a href="#" class="btn btn-primary">Ver Pelicula</a>
                    </div>
                  </div>
                  
                  
            `;

            fila.innerHTML = tarj;
            tarjeta.append(fila);
        })
    };

    mostrarPelicula();
