//Pedirle al usuario que se registre para poder realizar la compra de productos
alert("Bienvenido a ElectroShop, para poder comprar productos es necesario registrarse")

let usuario =prompt("Ingresa el nombre de usuario")
let contraseña = prompt("Ingrese la contraseña")

let Edad = parseInt (prompt ("Ingresa tu edad")) 
for (i = 0; i <=5; i++){
    if (Edad >= 18){
        alert("Sos mayor de edad podes comprar tranquilo!")
        break;
    } else if (Edad < 18) {
        Edad = prompt("Para poder comprar necesitamos autorizacion de tus padres")
    }

     if (i == 5) {
        alert("Ya superaste el maximo de intentos, estás baneado de IP")
    }
}

//Pregunto al cliente que categoria de productos estaria interesado en comprar

let mensaje=alert("En ElectroShop contamos con gran variedad de productos, las categorias que tenemos actualmente son Gaming, Musica, Fitness y Cocina");

let categoria = prompt("Ingrese la categoria de productos que le interesa comprar");
    switch(categoria){
        case "Gaming":
            alert("Buena eleccion! Amamos a los gamers");
            break;
        case "Musica":
            alert("Buena eleccion! La musica es vida");
            break;
        case "Fitness":
            alert("Buena eleccion! El deporte es esencial");
            break;
        case "Cocina":
            alert("Buena eleccion! El arte de comer es importante");
            break;
        default:
            alert("No contamos con esa categoria");
            break;
    }


let opcion = parseInt(prompt ("Que elegiste?  \n 1- Gaming \n 2- Musica \n 3- Fitness \n 4- Cocina"))

switch (opcion) {

case "1":
    let opcion11 = parseInt(prompt("Elegi  \n 1- Teclado Gamer \n 2- Mouse Gamer \n 3- Auriculares Gamer"));

function preciosGaming () {

    let mensajeGaming;

    switch (opcion11) {
        case 1: 
            alert("El teclado gamer tiene un valor de 6430$");
        break;
        case 2:
            alert("El mouse gamer tiene un valor de 4300$");
        break;
        case 3:
            alert("Los auriculares gamer tienen un valor de 12.500$")
        break;
        default:
            alert("No eligio ningun producto");
        break;
    }

    return mensajeGaming;

}

preciosGaming()

break

case "2":

    let opcion22 = parseInt(prompt("Elegi \n 1- Auriculares Sony \n 2- Microfono RODE \n 3- Monitores de Studio Yamaha "));

function preciosMusica () {

    let mensajeMusica;

    switch (opcion22) {
        case 1: 
            alert("Los auriculares tienen un valor de 12,999$");
        break;
        case 2:
            alert("El microfono tiene un valor de 50.500$");
        break;
        case 3:
            alert("Los monitores tienen un valor de 115.899$")
        break;
        default:
            alert("No eligio ningun producto");
        break;
    }

    return mensajeMusica;

}
preciosMusica()

break

case"3":

let opcion33 = parseInt(prompt("Elegi  \n 1- Gimnasio Multifunción  \n 2- Banco Pecho Plano Inclinado \n 3- Sillon Cuadriceps Regulable"));

function preciosFitness () {

    let mensajeFitness;

    switch (opcion33) {
        case 1: 
            alert("El Gimnasio Multifunción tiene un valor de 64.300$");
        break;
        case 2:
            alert("El Banco Pecho Plano Inclinado tiene un valor de 43.000$");
        break;
        case 3:
            alert("Los Sillon Cuadriceps Regulable tienee un valor de 22.500$")
        break;
        default:
            alert("No eligio ningun producto");
        break;
    }

    return mensajeFitness;

}
preciosFitness()

break

case"4":

let opcion44 = parseInt(prompt("Elegi  \n 1- Horno de mesa eléctrico   \n 2- Pava eléctrica Liliana \n 3- Procesadora Philips"));

function preciosCocina () {

    let mensajeCocina;

    switch (opcion44) {
        case 1: 
            alert("El Horno de mesa eléctrico tiene un valor de 40.000$");
        break;
        case 2:
            alert("La Pava eléctrica Liliana tiene un valor de 7049$");
        break;
        case 3:
            alert("Los Procesadora Philips tienen un valor de 9299$")
        break;
        default:
            alert("No eligio ningun producto");
        break;
    }

    return mensajeCocina;

}
preciosCocina()

break

}

let decisionFinal = prompt("Desea agregar el producto al carrito?")

    if (decisionFinal =="Si"){
        alert("El producto se agrego al carrito con exito")
    } else {alert("El producto no se agregara al carrito")}
    

let mensajededespedida=alert("Gracias por visitar ElectroShop")