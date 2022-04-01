//AJAX - lista de productos
let listaDeProductos = []

function usandoAjax() {
    let URLJSON = "./productos.json"
    $.getJSON(URLJSON, function(response, status) {
        if (status === "success") {
            listaDeProductos = response;
            mostrarProductos(listaDeProductos, '#grilla')
        } else {
            console.log("No se encontro el archivo de datos.")
        }
    })
}