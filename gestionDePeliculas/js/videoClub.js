import peli from "../data/data.json" assert { type: "json" };

const tarjeta = document.querySelector("#cuerpo-tarjeta");

/*const mostrarPelicula = () => {
  tarjeta.innerHTML = "";
  peli.forEach((item) => {
    const fila = document.createElement("div");
    fila.classList = "col mb-5";
    const tarj = `
            <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src=${item.imagen}
                alt=${item.titulo} />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${item.titulo}</h5>
                    <!-- Product price-->
                    $40.00 - $80.00
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View
                        options</a></div>
            </div>
        </div>
            `;

    fila.innerHTML = tarj;
    tarjeta.append(fila);
  });
};*/

//mostrarPelicula();

//paginacion

let limite = 12;
let desde = 0;
let paginas = peli.length / limite;
let paginaActiva = 1;

let arreglo = peli.slice(desde, limite);

const cargarPeliculas = (arregloPeliculas) => {
  tarjeta.innerHTML = "";
  arregloPeliculas.forEach((item) => {
    const fila = document.createElement("div");
    fila.classList = "col mb-5";
    fila.setAttribute("key", item.id);
    const tarj = `
            <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src=${item.imagen}
                alt=${item.titulo} />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${item.titulo}</h5>
                    
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Ver Pelicula</a></div>
            </div>
        </div>
            `;
    fila.innerHTML = tarj;
    tarjeta.append(fila);
  });
  cargarPaginaDePeliculas();
};

const cargarPaginaDePeliculas = () => {
  document.querySelector("#items").innerHTML = "";
  for (let index = 0; index < paginas; index++) {
    const item = document.createElement("li");
    item.classList = `page-item ${paginaActiva == index + 1 ? "active" : ""}`;
    const enlace = `<button class="page-link" onclick="pasarPagina(${index})">${
      index + 1
    }</button>`;
    item.innerHTML = enlace;
    document.querySelector("#items").append(item);
  }
};

window.pasarPagina = (pagina) => {
  paginaActiva = pagina + 1;
  desde = limite * pagina;
  if (desde <= peli.length) {
    arreglo = peli.slice(desde, limite * paginaActiva);
    cargarPeliculas();
  }
};

//filtro de busqueda
/*document.addEventListener('keyup',e=>{
  if(e.target.matches('#nombreBusqueda')){
    document.querySelectorAll('#cuerpo-tarjeta').forEach(item =>{
      console.log(item.textContent.toLowerCase().includes(e.target.value))
      //? item.classList.remove('filtro')
      //:item.classList.add('filtro')
    })
  }
})*/

const filtroInput = document.getElementById("filtro");

filtroInput.addEventListener("input", () => {
  const filtro = filtroInput.value.toLowerCase();
  const peliculasFiltradas = peli.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(filtro)
  );
  cargarPeliculas(peliculasFiltradas);
});

cargarPeliculas(peli);
