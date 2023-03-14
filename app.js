let character ="X"

document.querySelectorAll(".grid div").forEach(Element=>{
    Element.addEventListener("click", ()=>{
        if(Element.innerHTML===""){
            Element.innerHTML = character;
            character = character ==="X" ? "O" : "X";
        }
    })
})

function reset(){
    document.querySelectorAll(".grid div").forEach(Element =>{
        Element.innerHTML = "";
    })
}

// Crear un elemento div para el mensaje
var mensaje = document.createElement("div");
mensaje.innerHTML = "Presiona Jugar si deseas reiniciar el juego o si ya has ganado";

// Agregar el elemento al DOM
document.body.appendChild(mensaje);

var nombre = prompt("Ingrese su nombre para identificarse:");
alert("Hola " + nombre + ", bienvenido!");
