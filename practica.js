
const info = alert("Tambien Vendemos Productos Natura!!")


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

menu(opciones)