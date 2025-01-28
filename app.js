// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];


//con esta funcion quiero asignar nombres a una lista en el html
function asignarListaAmigos (id, mensaje){
let elementoHTML = document.getElementById(id);
elementoHTML.innerHTML=mensaje;
return;
}

function agregarAmigo(){

    //amigo: es el imput, lo que se resibe por medio del usuario
    let nombreAmigo=document.getElementById("amigo").value;
    //aca tomo el nombre ingresado y lo guardo en el array amigos
    amigos.push(nombreAmigo)
    // lista amigo es el array que se muestra en el html y muestro lo que tenga en el array amigos
    asignarListaAmigos("listaAmigos",amigos);

    //let lista = document.getElementById("listaAmigos");
    //lista.innerHTML="";

    for (let i=0 ;i==amigos.length;i++){ 
        

    }
}

function limipiarCajon (){
    document.querySelector("#amigo").value="";
}
