
/*const info = alert("Tambien Vendemos Productos Natura!!")


let opciones = parseInt(prompt("1- Ver productos\n2- Volver al sitio web"))


function menu (a , b){

    switch (opciones){
        case 1 :
            alert("Bienvenido a Productos Natura")
            prompt("Escriba su Email Para recibir los catalogos")
            break
    
        case 2: 
            alert("Disfrute Del Sitio")    
            break
        
        default:
               alert("Opcion invalida!")
    }
    
}

menu(opciones)*/

///////////////////////////////////////

const productosNatura = [
    { producto: "Rolon", marca: "Natura Kaiak", tamaño: "100ml", fragancia: "Masculino", precio: 3120 },
    { producto: "Bolilla", marca: "Natura Ekos", tamaño: "100ml", fragancia: "Femenino", precio: 3610 },
    { producto: "Perfume", marca: "Natura Humor", tamaño: "100ml", fragancia: "Masculino", precio: 3120 },
    { producto: "Desodorante", marca: "Natura Humor", tamaño: "100ml", fragancia: "Femenino", precio: 3120 },
    { producto: "Espuma De Afeitar", marca: "Natura Homen", tamaño: "200ml", fragancia: "Sin Fragancia", precio: 1850 },
    { producto: "Labial", marca: "Natura Una", fragancia: "Frutilla", precio: 2460 },
    { producto: "Iluminador", marca: "Natura Una", tamaño: "30ml", precio: 4000 },

]

let carrito = []

let propuesta = prompt("¿Desea comprar Algun Producto? (si) o (no)")

while (propuesta != "si" && propuesta != "no") {
    alert("Responda por si o no. Gracias")
    propuesta = prompt("¿Desea comprar Algun Producto? (si) o (no)")
}

if (propuesta == "si") {
    alert("A continuacion le mostraremos los prodcutos")
    let todoLosProductos = productosNatura.map(
        (productosNat) => productosNat.producto + " " + productosNat.precio + "$"
    );
    alert(todoLosProductos.join(" - "))
} else if (propuesta == "no") {
    alert("Gracias, Hasta Pronto!")
}

while (propuesta != "no") {
    let productosNat = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if (productosNat == "Perfume" || productosNat == "Rolon" || productosNat == "Espuma De Afeitar" || productosNat == "Labial" || productosNat == "Iluminador" || productosNat == "Bolilla" || productosNat == "Desodorante") {
        switch (productosNat) {
            case "Bolilla":
                precio = 3610
                break;
            case "Perfume":
                precio = 3120
                break;
            case "Rolon":
                precio = 3120
                break;
            case "Desodorante":
                precio = 3120
                break;
            case "Espuma De Afeitar":
                precio = 1850
                break;
            case "Labial":
                precio = 2460
                break;
            case "Iluminador":
                precio = 4000
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))


      carrito.push({productosNat, unidades, precio}) 
      console.log(carrito) 
    } else{
        alert("No tenemos ese producto")
    }

    propuesta = prompt("Desea seguir comprando?")
    
    while(propuesta === "no"){
        alert("Gracias por su compra. Nos vemos!")
        carrito.forEach ((carritoFinal) =>{
            console.log(`productosNat: ${carritoFinal.productosNat}, unidades${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }

}
const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es:  ${total}`)


