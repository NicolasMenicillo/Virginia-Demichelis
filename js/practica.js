/*alert("Tambien Vendemos Productos Natura!!")










const productosNatura = [
    { producto: "Rolon", marca: "Natura Kaiak", tamaño: "100ml", fragancia: "Masculino", precio: 3120 },
    { producto: "Bolilla", marca: "Natura Ekos", tamaño: "100ml", fragancia: "Femenino", precio: 3610 },
    { producto: "Perfume", marca: "Natura Humor", tamaño: "100ml", fragancia: "Masculino", precio: 3120 },
    { producto: "Desodorante", marca: "Natura Humor", tamaño: "100ml", fragancia: "Femenino", precio: 3120 },
    { producto: "Espuma De Afeitar", marca: "Natura Homen", tamaño: "200ml", fragancia: "Sin Fragancia", precio: 1850 },
    { producto: "Labial", marca: "Natura Una", tamaño: "Estandar", fragancia: "Frutilla", precio: 2460 },
    { producto: "Iluminador", marca: "Natura Una", tamaño: "30ml", fragancia: "Sin fragancia", precio: 4000 }

]

let carrito = []


let propuesta = prompt("¿Desea comprar Algun Producto? (si) o (no)")

while (propuesta == "si") {
    prodNat(productosNatura)
    propuesta = prompt("¿Desea seguir comprando? (si) o (no)")

}

function prodNat(productosNatura) {

    let mensaje = ""
    let producto
    productosNatura.forEach(element => {
        producto = "producto: " + element.producto + " marca: " + element.marca + " tamaño: " + element.tamaño + " fragancia: " + element.fragancia + " precio: $" + element.precio + "\n"

        mensaje = mensaje + producto

    });
    let seleccion = prompt(mensaje)
    let filtro = productosNatura.filter(element => element.producto.includes(seleccion))
    carrito = carrito.concat(filtro)
}




function carritoTotal(carrito) {

    let total = 0
    let mensaje = ""
    let producto
    carrito.forEach(element => {
        total = total + element.precio
        producto = "producto: " + element.producto + " marca: " + element.marca + " tamaño: " + element.tamaño + " fragancia: " + element.fragancia + " precio: " + element.precio + "\n"
        mensaje = mensaje + producto
    })

    alert("Resumen de su compra:  \n" + mensaje + "El total de su compra es: $" + total )

}

carritoTotal(carrito)*/