//poner ready con funcion home
$(document).ready(function() {
    $('#app').append(home())
        //funcion que carga lo guardado en el local Storage
    cargarCarritoDeLocalStorage()
})

//hashchange
$(window).on('hashchange', () => {
    router(window.location.hash)
})

function router(hash) {
    $('#app').empty()

    switch (hash) {
        case '#/':
            {
                return $('#app').append(home())
            }
        case '#/productos':
            {
                return $('#app').append(productos())
            }
        case '#/nosotros':
            {
                return $('#app').append(nosotros())
            }
        default:
            return $('#app').append(notFound())
    }
}


/* 
 *   FUNCIONES
 */

function filtros() {
    //botones filtros 
    $(".botonFiltro").click(function() {
            let catProd = $(this).attr('categoria')
                //ocultando productos
            $('.filtroProductos').hide()
                //mostrando productos
            $('.filtroProductos[categoria="' + catProd + '"]').show("slow")
        })
        //filtro boton VER TODO 
    $('.botonFiltro[categoria="todo"]').click(function() {
        $('.filtroProductos').show("slow")
    })
}


/* CARRITO */
//declaro arreglo para tarabajar dentro del carrito
let carrito = []

function agregarProductoAlCarrito() {
    // Evento para añadir un producto al carrito de la compra
    $('.btnAgregarAlPedido').click(function() {
        //obtengo numero boton
        let orden = $(this).attr('orden')
            //busco el producto por el id que coincida con el num de orden
        let encontrado = listaDeProductos.find(producto => producto.id == orden)
            //agrego al arreglo carrito el producto coincidente con el id
        carrito.push(encontrado)
            //actualizar y mostrar productos en el carrito
        actualizarCarrito()
    })
}

//Dibuja todos los productos guardados en el carrito cada vez que se agrega uno
function actualizarCarrito() {
    //limpiar carrito
    $('#productosCarrito').empty()

    // Quitamos los duplicados
    let carritoSinDuplicados = [...new Set(carrito)];
    //para cada uno de los productos del carrito sin duplicado hacemos...
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de lista de productos
        let miItem = carrito.filter(producto => producto === item);
        // Cuenta el número de veces que se repite el producto
        let cantidadXProd = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario lo mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        //dibuja los productos en el carrito
        $('#productosCarrito').append(`<li class="list-group-item d-flex justify-content-between align-items-center">
        <h4> ${cantidadXProd} x <b>${miItem[0].nombre}</b></h4>
        <h4>$${miItem[0].precio}</h4>
        <button type="button" class="btnBorrarDelPedido" id="restar" orden="${miItem[0].id}"><b> - </b></button>
        </li>`)
        $('.btnBorrarDelPedido').click(borrarUnProducto)
            // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    });
    $('.btnVaciar').click(vaciarCarrito)
        // Renderizamos el precio total en el HTML
    $('#mostrarTotal').append(`<h4>TOTAL: $${calcularTotal()} </h4>`)
}

//Evento para borrar un elemento del carrito. se hace con el boton (-)
function borrarUnProducto() {
    //obtengo numero boton
    let orden = $(this).attr('orden')
        //busco que coincida el num orden boton con el id producto
    let paraBorrar = carrito.find(producto => producto.id == orden)
        // FUNCION QUE BORRE PRODUCTO ENCONTRADO
    carrito = carrito.filter(producto => producto !== paraBorrar)
        // volvemos a renderizar
    actualizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
}

//Calcula el precio total teniendo en cuenta los productos repetidos
function calcularTotal() {
    $('#mostrarTotal').empty()
        // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // Obtenemos el item que necesitamos de lista de productos
        let miItem = carrito.filter(producto => producto === item);
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

//Vacia el carrito completo
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    actualizarCarrito();
    // Borra LocalStorage
    localStorage.clear();
}

//STORAGE
const miLocalStorage = window.localStorage;

function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        actualizarCarrito()
    }
}

// FUNCIONA TODO :) :) -----------------------------------------