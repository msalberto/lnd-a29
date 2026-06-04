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

    // HACER FETCH

}


function mostrarPeliculas(listaPeliculas) {

    // MOSTRAR TARJETAS

}


function mostrarDetalle(id) {

    // MOSTRAR DETALLE

}


function volverALista() {

    vistaDetalle.classList.add("oculto");
    vistaLista.classList.remove("oculto");

}


function agregarFavorito(id) {

    // AÑADIR FAVORITO

}


function eliminarFavorito(id) {

    // ELIMINAR FAVORITO

}


function mostrarFavoritos() {

    // MOSTRAR FAVORITOS

}


function guardarFavoritos() {

    // GUARDAR EN LOCALSTORAGE

}


function filtrarPeliculas() {

    // FILTRAR POR TÍTULO

}