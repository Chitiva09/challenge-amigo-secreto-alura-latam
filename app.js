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
        //con este if valido que el usuario si haya ingresado un nombre
        if (nombreAmigo.trim()===""){
            //hago llamado a la funcion para que muestre el mensaje en la caja de texto en caso de que no se ingrese un nombre valido 
            mensajeCajaTexto("Por favor, inserte un nombre.");

            }else{

                //aca tomo el nombre ingresado y lo guardo en el array amigos
                amigos.push(nombreAmigo)
                //con esto hago que al no pasarle un mensjae a la funcion me restaure la caja de texto
                mensajeCajaTexto("");
                //con esta linea de codigo limpio la caja de texto para ingresar un nuevo amigo 
                limpiarCajon();
                // lista amigo es el array que se muestra en el html y muestro lo que tenga en el array amigos
                asignarListaAmigos("listaAmigos",amigos);
                //acá limpio la lista existente en la caja de texto para que no se duplique lo que ya haya
                listaAmigos.innerHTML="";

                //con este for hago que los nombres aparzcan en line y no seguidos
                for (let i=0 ;i<amigos.length;i++){ 
                    //acá por cada iteracion se crea u elemento <li>
                    let li = document.createElement("li");
                    //acá le asigno a <li> el nombre que este en la caja de texto en esa iteraccion[i]
                    li.textContent= amigos[i];
                    //acá usando el appendChild hago que en listaAmigos que es el padre se creen hijos en orden <li> 
                    listaAmigos.appendChild(li);
                }
        }
}

function sortearAmigo(){

    
    if (amigos.length===0){
        mensajeCajaTexto("Por favor, inserte un nombre.");
    }else{
        let numeroIndice= Math.floor(Math.random()*amigos.length);
        asignarListaAmigos("textoDigite","Tu amigo secreto es "+amigos[numeroIndice])
    }
}

//con esta funcion hago que se borre lo que el usuario haya escrito en la caja de texto
function limpiarCajon (){
    document.querySelector("#amigo").value="";
}
//con esta fncion muestro mensajes en la caja de texto
function mensajeCajaTexto(mensaje){
    //acá traigo lo que este escrito en el elemento con el id amigo que luego paso a verificar con el if
    let imputAmigo=document.getElementById("amigo");
    /*con este if digo las condiciones para cada caso en que se cumpla o no para ello utilizo el mensaje
    enviado por parametro desde la funcio, el primer bloque de este if sirve para decir que hacer cuando 
    en la caja de texto no se ha escrio nada
    */
    if (mensaje) {
        //con esta linea limpio cualquier texto que haya escrito el usuario
        imputAmigo.value="";
        //con esta linea pongo el mensaje en la caja de texto, coloco el mensaje recibido desde la funcion agregarAmigo()
        imputAmigo.placeholder=mensaje;
        //aca le cambio el olor para que se vea como una alrta
        imputAmigo.style.border = "2px solid red";
        //con este else pongo que hacer cuando si hay algo escrito, o sea, volver a poner la caja de texto como en el principio
    }else{
        imputAmigo.placeholder="Escribe un nombre";
        imputAmigo.style.border = "";
    }

}