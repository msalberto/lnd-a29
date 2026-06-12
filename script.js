const URL_API = "https://ghibliapi.vercel.app/films";

let peliculas = [];

let favoritos =
    JSON.parse(localStorage.getItem("favoritos")) || [];

const contenedorPeliculas =
    document.getElementById("contenedor-peliculas");

const contenedorFavoritos =
    document.getElementById("contenedor-favoritos");

const vistaLista =
    document.getElementById("vista-lista");

const vistaDetalle =
    document.getElementById("vista-detalle");

const buscador =
    document.getElementById("buscador");


// ======================
// EVENTOS
// ======================

buscador.addEventListener("input", filtrarPeliculas);


// ======================
// INICIO
// ======================

cargarPeliculas();
mostrarFavoritos();


// ======================
// FUNCIONES A COMPLETAR
// ======================

async function cargarPeliculas() {

    const respuesta = await fetch(__________);

    peliculas = await respuesta.json();

    console.log(peliculas);

    mostrarPeliculas(__________);

}


function mostrarPeliculas(listaPeliculas) {

    contenedorPeliculas.innerHTML = ___;

    // Vaciar el contenedor antes de mostrar las películas

    // Recorrer el array recibido como parámetro

        // Crear una tarjeta para cada película

        // Añadir a la tarjeta:

        // - Imagen

        // - Título

        // - Director

        // - Botón "Ver detalle"

        // - Botón "Favorito"

        // Añadir la tarjeta al contenedor

}


function mostrarDetalle(id) {

    // Busca la película seleccionada utilizando el id recibido

    // Cambia la visibilidad de los elementos correspondientes

    vistaDetalle.innerHTML = `
        <img src="${pelicula.movie_banner}" alt="${pelicula.title}">

        <h2>${pelicula.title}</h2>

        <p>${pelicula.description}</p>

        <br>

        <p>
            <strong>Director:</strong>
            ${pelicula.director}
        </p>

        <p>
            <strong>Productor:</strong>
            ${pelicula.producer}
        </p>

        <p>
            <strong>Año:</strong>
            ${pelicula.release_date}
        </p>

        <br>

        <button onclick="volverALista()">
            Volver
        </button>
    `;

}


function volverALista() {

    vistaDetalle.classList.add("oculto");
    vistaLista.classList.remove("oculto");

}


function agregarFavorito(id) {

    // Buscar la película cuyo id coincide con el recibido

    // Comprobar si la película ya está en favoritos

    // Si no está:
    // - Añadirla al array favoritos
    // - Guardar los favoritos en localStorage
    // - Actualizar la lista de favoritos mostrada en pantalla

}


function eliminarFavorito(id) {

    // Eliminar del array favoritos la película cuyo id coincide con el recibido

    // Guardar los cambios en localStorage

    // Actualizar la lista de favoritos mostrada en pantalla

}


function mostrarFavoritos() {

    contenedorFavoritos.innerHTML = ____;
    // Vaciar el contenedor de favoritos

    // Si no hay favoritos:

    // Mostrar un mensaje indicándolo

    // Si hay favoritos:

    // Recorrer el array favoritos

        // Crear un elemento para cada favorito

        // Mostrar el título de la película

        // Añadir un botón para eliminarla

        // Insertar el elemento en el contenedor

}


function guardarFavoritos() {

    localStorage.setItem(
        "favoritos",
        ______________________
    );

}


function filtrarPeliculas() {

    // 1. Obtener el texto del buscador

    // 2. Filtrar el array peliculas

    // 3. Mostrar únicamente las películas filtradas

    const texto = _________;

    const resultado = ________;

    mostrarPeliculas(resultado);

}