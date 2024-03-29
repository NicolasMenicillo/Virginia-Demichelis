let productos = []

fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
        
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");




function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
             <img class="producto-imagen" src="${producto.imagen} " alt=" ${producto.titulo} ">
             <div class="producto-detalles">
               <h3 class="producto-titulo">${producto.titulo} </h3>
               <p class="prducto-precio"> $ ${producto.precio} </p>
               <button class="producto-agregar" id= "${producto.id}">Agregar</button>
            </div>
       `;

        contenedorProductos.append(div);

    })
    actualizarBotonesAgregar();
    
}



botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("activ"));
        e.currentTarget.classList.add("activ");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
      
    });
})


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
       

    });
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito()
}else{
    productosEnCarrito = [];
}



function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Has agregado el producto al carrito!`,
            showConfirmButton: false,
            timer: 1000
          });
   
  

    actualizarNumerito()
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
