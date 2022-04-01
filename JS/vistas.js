//VISTAS PAGINAS
function home() {
    let divHome = `<div>
    <div class="fondoIndex">
    </div>
    <!--fotos presentacion sitio-->
    <div class="container-md">
        <div class="row">
            <div class="col-lg-4">
                <img src="./img/1.jpg" alt="Postre Tres Mouses" class="fotosIndex">
            </div>
            <div class="col-lg-4">
                <img src="./img/2.jpg" alt="Brownie chocolate negro con merengue" class="fotosIndex">
            </div>
            <div class="col-lg-4">
                <img src="./img/3.jpg" alt="Rogel" class="fotosIndex">
            </div>
        </div>
    </div>

    <div class="fondoIndex">
        <!--alerta-->
        <div class="alert alert-info alert animate__heartBeat" role="alert">
            AMOR ES COMPARTIR EL POSTRE!!
        </div>
        <!--seccion contacto redes-->
        <div class="infoIndex">
            <div class="container-md">
                <div class="row">
                    <div class="col redes1y2">
                        <h2>CONSULTAS O RESERVAS </h2>
                        <hr>
                        <p>Para consultas o reservas<br>podes enviarnos un Whatsapp</p>
                    </div>
                    <div class="col redes1y2">
                        <h2>SEGUINOS</h2>
                        <hr>
                        <p>Encontranos en Instagram: </p>
                        <p>@lorettapasteleria</p>
                    </div>
                    <div class="col redes3">
                        <h2>CONTACTANOS</h2>
                        <hr>
                        <p>tel: 3468545916</p>
                        <p>email: lorettapasteleria@hotmail.com</p>

                    </div>
                </div>
            </div>
        </div>
    </div>                   
    </div>`
    return divHome
}

function productos() {
    let divProd = `<div id="flex"><aside class="aside">
                    <div id='filtros'>
                        <ul class="listaFiltro">
                            <h5 id="tituloFiltro">CATEGORIAS</h5>
                            <li><a class="botonFiltro" id="todo" categoria="todo">VER TODO</a></li>
                            <li><a class="botonFiltro" id="tartas" categoria="tartas">TARTAS</a></li>
                            <li><a class="botonFiltro" id="postres" categoria="postres">POSTRES</a></li>
                            <li><a class="botonFiltro" id="tortas" categoria="tortas">TORTAS</a></li>
                            <li><a class="botonFiltro" id="alfajores" categoria="alfajores">ALFAJORES/MACARONS</a></li>
                            <li><a class="botonFiltro" id="budines" categoria="budines">BUDINES</a></li>
                            <li><a class="botonFiltro" id="boxDulces" categoria="boxDulces">BOX DULCES</a></li>
                            <li><a class="botonFiltro" id="minis" categoria="minis">MINIS</a></li>
                            <li><a class="botonFiltro" id="espFiestas" categoria="espFiestas">ESPECIAL FIESTAS</a></li>
                        </ul>
                    </div>
                    </aside>
                    <div id="grilla">
                    </div></div>`
        //llamar funcion ajax
    usandoAjax()
    return divProd

}

function nosotros() {
    let divNosotros = `<div><!--foto articulo-->
    <img src="./img/sele1.jpeg" alt="Selene - Loretta" class="fotoArticulo" align="left">
    <!--contenido principal - texto-->
    <article class="fondoVerde">
        <p>
            Soy Selene, mamá, mujer emprendedora y amante de la pastelería. Aprovecho este espacio para contarles un poquito de mis comienzos y mi historia. Siempre mi amor por la cocina fue enorme, pero todavía no había descubierto mi GRAN AMOR, LA PASTELERÍA.
        </p>
        <p>
            Arranqué en el año 2017 como hobby elaborando el primer postre que me gustaba hacer, el Rogel; haciéndolo para mis vecinos, amigas y para mi casa. La eleccion del postre surgió ya que mi familia tiene una avícola en un pueblo llamado Chañar Ladeado, donde
            residimos, y en épocas dónde las gallinas ponen muchos huevos hay que ingeniárselas y usarlos en casa. Así surgió todo, yo era la encargada de hacer algo con los huevos y se me ocurrieron los postres!!
        </p>
        <p>
            Al poco tiempo más gente empezó a pedirme el reconocido Rogel y a las semanas no era solo ese postre, sino que empecé con nuevas recetas. Es así mi hobby se fue transformando en mi pequeño microemprendimiento.
        </p>
        <p>
            En ese momento estudiaba en Rosario una carrera para nada cercana al rubro y cuando volvía los fines de semana aprovechaba y cocinaba, para tener un extra de dinero y ayudar a mis viejos. Cuando paso un tiempo surgió la idea de ponerle un nombre y tras
            varios días de pensarlo con la ayuda de mi hermana, nació
            <mark>'LORETTA'</mark>.
        </p>
        <p>
            Ahí empecé a hacer nuevos postres, siempre tratando de innovar, después sume Macarons y al tiempo las famosas tortas.
        </p>
        <p>
            En ese momento no eran conocidos los Macarons ni las tortas forradas en buttercream, así que, con mucha paciencia y amor, todos los fueron conociendo.
        </p>
        <p>
            Con mucho esfuerzo me pude comprar mi primer horno, y fue en ese momento, que me di cuenta que ésta era mi verdadera pasión.
        </p>
        <p>
            Al poco tiempo me volví definitivamente de Rosario y dejé a un lado la profesión de la cual me recibí para abocarme de lleno a la pastelería.
        </p>
        <p>
            En el 2019 llego una enorme y bella sorpresa, estaba esperando un bebé!! por lo tanto tuve que abandonar por unos meses mi pastelería.Pero Loretta volvió, con muchas novedades y sabores sofisticados y elegantes. Hoy en día estoy más que feliz y agradecida
            de poder trabajar de lo que amo con mi hijo al lado, tratando de disfrutar las dos cosas al máximo.
        </p>
        <p>
            Gracias a mi familia que esta siempre apoyando mis proyectos, gracias a mis clientes de siempre que confiaron desde aquel 2017 y me hicieron crecer y gracias a los nuevos clientes que vendrán, por elegirme y permitirme llegar y estar presentes en los
            momentos más importantes como en los más simples de sus vidas.
        </p>
        <p align=center><strong>SELENE - LORETTA :)</strong></p>
    </article></div>`
    return divNosotros
}

function notFound() {
    let divNot = `<div><img src="../img/error404.png"</div>`
    return divNot
}


//funcion que me permite ejecutar el resto de las funcionalidades del carrito y el DOM
//mostrar productos en el DOM
function mostrarProductos(misProductos, posicion) {
    for (const producto of misProductos) {
        $(posicion).append(`<div class="cardGrilla filtroProductos" categoria="${producto.categoria}">
                    <img src="${producto.imagen}" class="card-img-top">
                    <h3><b>${producto.nombre}</b></h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h4> Precio: $${producto.precio}</h4>
                    <div class="modal-footer">
                    <button type="button" class="btnAgregarAlPedido" id="sumar" orden="${producto.id}"><b> + </b></button>
                    </div>`)
    }
    $("h4").css("color", "rgba(232, 67, 147,1.0)")

    //llamo a la funcion que me permite filtrar productos
    filtros()
        //funcion que me agrega los productos al carrito
    agregarProductoAlCarrito()
}