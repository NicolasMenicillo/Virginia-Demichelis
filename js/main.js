const productos = [
    // PERFUMES
    {
        id: "ekos",
        titulo: "Ekos Trescor",
        imagen: "../img/img perfumes/ekos trescor.jpg",
        categoria: {
            nombre: "Perfumes",
            id: "perfumes",
        },
        precio: 5666
    },

    {
        id: "essne",
        titulo: "Essnecial",
        imagen: "../img/img perfumes/essnecial.jpg",
        categoria: {
            nombre: "Perfumes",
            id: "perfumes",
        },
        precio: 2665
    },

    {
        id: "hom",
        titulo: "Homen",
        imagen: "../img/img perfumes/homen.jpg",
        categoria: {
            nombre: "Perfumes",
            id: "perfumes",
        },
        precio: 4800
    },

    {
        id: "hum",
        titulo: "Humor",
        imagen: "../img/img perfumes/humor.jpg",
        categoria: {
            nombre: "Perfumes",
            id: "perfumes",
        },
        precio: 3260
    },

    {
        id: "kaiak",
        titulo: "Kaiak Natura",
        imagen: "../img/img perfumes/kaiak natura.jpg",
        categoria: {
            nombre: "Perfumes",
            id: "perfumes",
        },
        precio: 2890
    },

    {
        id: "kriska",
        titulo: "Natura Kriska",
        imagen: "../img/img perfumes/natura kriska.jpg",
        categoria: {
            nombre: "Perfumes",
            id: "perfumes",
        },
        precio: 5000
    },

    // CREMAS

    {
        id: "corporal-ciruela",
        titulo: "Crema nutritiva",
        imagen: "../img/img cremas/Crema nutritiva corporal ciruela.jpg",
        categoria: {
            nombre: "Cremas",
            id: "cremas",
        },
        precio: 3690
    },

    {
        id: "hidratante-avellana",
        titulo: "Hidratante de avellana",
        imagen: "../img/img cremas/Hidratante corporal avellana.jpg",
        categoria: {
            nombre: "Cremas",
            id: "cremas",
        },
        precio: 3789
    },

    {
        id: "hidratante-limon ",
        titulo: "Hidratante de limon",
        imagen: "../img/img cremas/Hidratante corporal hojas de limon.jpg",
        categoria: {
            nombre: "Cremas",
            id: "cremas",
        },
        precio: 3800
    },

    {
        id: "pulpa",
        titulo: "Pulpa hidratante",
        imagen: "../img/img cremas/Pulpa hidratante corporal tukuma.jpg",
        categoria: {
            nombre: "Cremas",
            id: "cremas",
        },
        precio: 7560
    },

    //LABIALES

    {
        id: "labial-hidratante",
        titulo: "Labial Hidratante",
        imagen: "../img/img labiales/LAbial cc hidratante.jpg",
        categoria: {
            nombre: "Labiales",
            id: "labiales",
        },
        precio: 3200
    },

    {
        id: "gloss",
        titulo: "Labial Gloss",
        imagen: "../img/img labiales/Labial Gloss.jpg",
        categoria: {
            nombre: "Labiales",
            id: "labiales",
        },
        precio: 5000
    },

    {
        id: "labial-matte",
        titulo: "Labial matte",
        imagen: "../img/img labiales/Labial matte intransferible.jpg",
        categoria: {
            nombre: "Labiales",
            id: "labiales",
        },
        precio: 4500
    },

    {
        id: "serum",
        titulo: "Serum labial",
        imagen: "../img/img labiales/Serum labial.jpg",
        categoria: {
            nombre: "Labiales",
            id: "labiales",
        },
        precio: 3200
    },






];

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

cargarProductos(productos);

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

    actualizarNumerito()
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
