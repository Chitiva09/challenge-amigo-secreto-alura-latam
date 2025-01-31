// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];
let amigosSorteados=[];
let numeroIndice=0;
let inputAmigo=0;
let li=0;
let nombreAmigo=0;

//con esta funcion quiero asignar nombres a una lista u objetos en el html
function asignarListaAmigos (id, mensaje){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML=mensaje;
    return;
}

function agregarAmigo(){
    
    //amigo: es el imput, lo que se resibe por medio del usuario
    nombreAmigo=document.getElementById("amigo").value;
    //con este if valido que el usuario si haya ingresado un nombre
    if (nombreAmigo.trim()===""){
        //hago llamado a la funcion para que muestre el mensaje en la caja de texto en caso de que no se ingrese un nombre valido 
        mensajeCajaTexto("Por favor, inserte un nombre.");
        return;
    }
    //con este if valido si el nombre que esta escrribiendo el usuario ya esta en la lista
    if (amigos.includes(nombreAmigo)) {
        mensajeCajaTexto("El nombre " + nombreAmigo + " ya existe.");
        return;
    }

    //aca tomo el nombre ingresado y lo guardo en el array amigos
    amigos.push(nombreAmigo);
    //con esto hago que al no pasarle un mensjae a la funcion me restaure la caja de texto
    mensajeCajaTexto("");
    //con esta linea de codigo limpio la caja de texto para ingresar un nuevo amigo 
    limpiarCajon();

    actualizarListaAmigos();
}

function actualizarListaAmigos(){
    // lista amigo es el array que se muestra en el html y muestro lo que tenga en el array amigos
    asignarListaAmigos("listaAmigos",amigos);
    //acá limpio la lista existente en la caja de texto para que no se duplique lo que ya haya
    listaAmigos.innerHTML="";

        //con este for hago que los nombres aparzcan en line y no seguidos
        for (let i=0 ;i<amigos.length;i++){ 
            //acá por cada iteracion se crea u elemento <li>
            li = document.createElement("li");
            //acá le asigno a <li> el nombre que este en la caja de texto en esa iteraccion[i]
            li.textContent= amigos[i];
            //acá usando el appendChild hago que en listaAmigos que es el padre se creen hijos en orden <li> 
            listaAmigos.appendChild(li);
        }


}

function sortearAmigo(){
    //con este if valido si el array esta vacio, en caso de que este vacio muestra un mensaje y en caso de que no el codigo sigue normal
    if (amigos.length===0){
        mensajeCajaTexto("Por favor, inserte un nombre.");
        return;
    }
    //con este if valido si ya se sortearon todos, e caso de que si, muestra el mensaje y en caso de que no se sigue ejecutando el codigo
    if (amigosSorteados.length===amigos.length){
        asignarListaAmigos("textoDigite","Ya se sortearon todos los amigos");
        document.getElementById('reiniciarJuego').removeAttribute('disabled');
        return;
    } 
    /*con este do-while genero un numero random y luego lo valido, si el numero esta en la lista 
    amigosSorteados el bucle continua y se genera otro numero de indice y en caso de que no este en 
    la lista el bucle termina y continua el bloque de codigo
    */
    do {
        numeroIndice= Math.floor(Math.random()*amigos.length);
    } while (amigosSorteados.includes(numeroIndice));
    //ingreso el numero indice que no esta repetido a la lista 
    amigosSorteados.push(numeroIndice);
    //mustro texto en el enunciado diciendo el nombre del amigo 
    asignarListaAmigos("textoDigite","Tu amigo secreto es "+amigos[numeroIndice]);
    return;

}

function reiniciarJuego(){
    
        condicionesIniciales();
    
    

}

//con esta funcion hago que se borre lo que el usuario haya escrito en la caja de texto
function limpiarCajon (){
    document.querySelector("#amigo").value="";
}
//con esta fncion muestro mensajes en la caja de texto
function mensajeCajaTexto(mensaje){
    //acá traigo lo que este escrito en el elemento con el id amigo que luego paso a verificar con el if
    inputAmigo=document.getElementById("amigo");
    /*con este if digo las condiciones para cada caso en que se cumpla o no para ello utilizo el mensaje
    enviado por parametro desde la funcio, el primer bloque de este if sirve para decir que hacer cuando 
    en la caja de texto no se ha escrio nada
    */
    if (mensaje) {
        //con esta linea limpio cualquier texto que haya escrito el usuario
        inputAmigo.value="";
        //con esta linea pongo el mensaje en la caja de texto, coloco el mensaje recibido desde la funcion agregarAmigo()
        inputAmigo.placeholder=mensaje;
        //aca le cambio el olor para que se vea como una alrta
        inputAmigo.style.border = "2px solid red";
        //con este else pongo que hacer cuando si hay algo escrito, o sea, volver a poner la caja de texto como en el principio
    }else{
        inputAmigo.placeholder="Escribe un nombre";
        inputAmigo.style.border = "";
    }


}
//con esta funcion vuelvo todo como al principo 
function condicionesIniciales(){

    limpiarCajon();
    inputAmigo.placeholder="Escribe un nombre";
    inputAmigo.style.border = "";
    amigos.length=0;
    amigosSorteados.length=0;
    document.getElementById("listaAmigos").innerHTML=""
    asignarListaAmigos("textoDigite", "Digite el nombre de sus amigos");
    document.querySelector('#reiniciarJuego').setAttribute('disabled','true');
}
