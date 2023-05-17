

class Carta {
      constructor (valor,archivo,numero){
        this.valor=valor;
        this.archivo=archivo;
        this.numero=numero;
    }

}

let baraja = [];
let cpu=[];
let usuario=[];
let knownCPU=[];
let knownUsuario=[];
let indice=0;
let puntosCPU=0;
let puntosUsuario=0;
let boton = document.getElementById("comenzar");

function start (){
    /*Creacion de la baraja*/
    for (let index = 0; index < 48; index++) {
        palo="";
        if (index<12) {
            palo="Bastos";
            if (index==11) {baraja.push(new Carta(-1, palo+"_"+(index+1)+".jpg", 0))}
            else if (index==10) {baraja.push(new Carta(0, palo+"_"+(index+1)+".jpg", 0))}
            else {baraja.push(new Carta((index+1), palo+"_"+(index+1)+".jpg", 0))}
            
        }
        else if (index<24) {
            palo="Copas";
            if (index==23) {baraja.push(new Carta(-1, palo+"_"+(index-11)+".jpg", 0))}
            else if (index==22) {baraja.push(new Carta(0, palo+"_"+(index-11)+".jpg", 0))}
            else {baraja.push(new Carta((index-11), palo+"_"+(index-11)+".jpg", 0))}
        }
        else if (index<36){
            palo="Espadas";
            if (index==35) {baraja.push(new Carta(-1, palo+"_"+(index-23)+".jpg", 0))}
            else if (index==34) {baraja.push(new Carta(0, palo+"_"+(index-23)+".jpg", 0))}
            else {baraja.push(new Carta((index-23), palo+"_"+(index-23)+".jpg", 0))}
        }
        else {
            palo="Oros";
            if (index==47) {baraja.push(new Carta(-1, palo+"_"+(index-35)+".jpg", 0))}
            else if (index==46) {baraja.push(new Carta(0, palo+"_"+(index-35)+".jpg", 0))}
            else {baraja.push(new Carta((index-35), palo+"_"+(index-35)+".jpg", 0))}
        }
    }

    barajar();

}


function barajar(){
    /* Mezcla de la baraja creada - Asignando numeros random a todas las cartas 
    y ordenandolas de acuerdo a este */
    baraja.forEach(element => {element.numero=Math.random();});
    baraja = baraja.sort((p1,p2) => (p1.numero<p2.numero)?1:(p1.numero>=p2.numero)?-1:0);
    console.log(baraja);
}


function comenzar(){
    
    document.getElementById("comenzar").setAttribute("onclick","reiniciar()");
    boton.innerHTML="Reiniciar";
    cpu.push(baraja[0]);
    usuario.push(baraja[1]);
    cpu.push(baraja[2]);
    usuario.push(baraja[3]);
    cpu.push(baraja[4]);
    usuario.push(baraja[5]);
    indice=5;
    knownCPU.push(new Carta(-2,"",0));
    knownCPU.push(new Carta(-2,"",0));
    knownCPU.push(new Carta(-2,"",0));
    knownUsuario.push(new Carta(-2,"",0));
    knownUsuario.push(new Carta(-2,"",0));
    knownUsuario.push(new Carta(-2,"",0));

    console.log("CPU CARDS:");
    console.log(cpu);
    console.log("User CARDS:");
    console.log(usuario);
    console.log(knownCPU);
    console.log(knownUsuario);
    newElement = document.createElement("div");
    newElement.classList.add("col-2");
    newElement.setAttribute("id","mazo");
    document.getElementById("Usuario").appendChild(newElement);
    newElement = document.createElement("img");
    newElement.setAttribute("id","mazoImg");
    newElement.setAttribute("width","126px");
    newElement.setAttribute("height","200px");
    newElement.setAttribute("src","img/reverso.png");
    newElement.setAttribute("onclick","sacarCarta()");
    document.getElementById("mazo").appendChild(newElement);

    newElement = document.createElement("div");
    newElement.classList.add("col-2");
    newElement.setAttribute("id","descarte");
    document.getElementById("Usuario").appendChild(newElement);
    newElement = document.createElement("img");
    newElement.setAttribute("id","descarteImg");
    newElement.setAttribute("width","126px");
    newElement.setAttribute("height","200px");
    newElement.setAttribute("src","");
    document.getElementById("descarte").appendChild(newElement);
}


function sacarCarta(){
    indice++;
    document.getElementById("descarteImg").setAttribute("src","img/"+baraja[indice].archivo);
    if (baraja[indice].valor==7){
        let nroCarta=parseInt(prompt("Seleccione cual de sus 3 cartas desea ver "));
        nroCarta=nroCarta+3;
        document.getElementById("carta"+nroCarta).setAttribute("src","img/"+usuario[nroCarta-4].archivo);
        setTimeout(()=> {document.getElementById("carta"+nroCarta).setAttribute("src","img/reverso.png");},3000);
    }else if (baraja[indice].valor==8){
        let nroCarta=parseInt(prompt("Seleccione cual de las 3 cartas del rival desea ver "));
        nroCarta=nroCarta;
        document.getElementById("carta"+nroCarta).setAttribute("src","img/"+usuario[nroCarta-1].archivo);
        setTimeout(()=> {document.getElementById("carta"+nroCarta).setAttribute("src","img/reverso.png");},3000);
    }else if (baraja[indice].valor==9){
        document.getElementById("opciones").innerHTML = "Desea cambiar una carta suya por una del rival?";
        newElement = document.createElement("button");
        newElement.setAttribute("onclick","intercambioCartas(9)");
        newElement.setAttribute("id","botonCambio");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("botonCambio").innerHTML="Cambiar";
        newElement = document.createElement("button");
        newElement.setAttribute("id","botonCancelar");
        newElement.setAttribute("onclick","cancelar()");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("botonCancelar").innerHTML="Cancelar";
        document.getElementById("mazoImg").removeAttribute("onclick");
        console.log("Mis cartas actuales:");
        console.log(usuario);
        console.log("LAs cartas actuales de CPU");
        console.log(cpu);
    }else if (baraja[indice].valor==10){
        document.getElementById("opciones").innerHTML = "Desea cambiar una carta suya por una del rival?";
        newElement = document.createElement("button");
        newElement.setAttribute("onclick","intercambioCartas(10)");
        newElement.setAttribute("id","botonCambio");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("botonCambio").innerHTML="Cambiar";
        newElement = document.createElement("button");
        newElement.setAttribute("id","botonCancelar");
        newElement.setAttribute("onclick","cancelar()");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("botonCancelar").innerHTML="Cancelar";
        document.getElementById("mazoImg").removeAttribute("onclick");
    }else{
        document.getElementById("opciones").innerHTML = "Desea cambiar una carta suya por la nueva carta?";
        newElement = document.createElement("button");
        newElement.setAttribute("onclick","intercambioCartas(1)");
        newElement.setAttribute("id","botonCambio");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("botonCambio").innerHTML="Cambiar";
        newElement = document.createElement("button");
        newElement.setAttribute("id","botonCancelar");
        newElement.setAttribute("onclick","cancelar()");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("botonCancelar").innerHTML="Cancelar";
        document.getElementById("mazoImg").removeAttribute("onclick");
    }
    //*turnoCPU();
}


function cambiar(nro){
switch (nro) {
    case 1:
        console.log("Cambio carta 1 CPU");
        console.log(cpu[0]);
        console.log("por carta nueva");
        console.log(baraja[indice])
        cpu[0]=baraja[indice];
        break;
    case 2:
        console.log("Cambio carta 2 CPU");
        console.log(cpu[1]);
        console.log("por carta nueva");
        console.log(baraja[indice])
        cpu[1]=baraja[indice];
        break;
    case 3:
        console.log("Cambio carta 3 CPU");
        console.log(cpu[2]);
        console.log("por carta nueva");
        console.log(baraja[indice])
        cpu[2]=baraja[indice];
        break;
    case 4:
        console.log("Cambio carta 1 Usuario");
        console.log(usuario[0]);
        console.log("por carta nueva");
        console.log(baraja[indice])
        usuario[0]=baraja[indice];
        break;
    case 5:
        console.log("Cambio carta 2 Usuario");
        console.log(usuario[1]);
        console.log("por carta nueva");
        console.log(baraja[indice])
        usuario[1]=baraja[indice];
        break;
    case 6:
        console.log("Cambio carta 3 Usuario");
        console.log(usuario[2]);
        console.log("por carta nueva");
        console.log(baraja[indice])
        usuario[2]=baraja[indice];
        break;
    default:
        console.log("Carta descartada - No hago nada")
        break;
}


}


function turnoCPU(){
    alert("empieza turno cpu");
    /*indice++;       Esto luego se tiene que habilitar y borrar sacarCarta 
                      para que el usuario no vea la carta que saco la CPU*/
    sacarCarta();

    let cartaSeleccionadaCPU=3;
    let cartaSeleccionadaUsuario=3;
    let cartaCPU=baraja[indice];
    console.log("CPU AGARRO LA CARTA:");
    console.log(cartaCPU);
    if (cartaCPU.valor==7){
        if (knownCPU[0].valor==-2){knownCPU[0]=cpu[0]}
        else if (knownCPU[1].valor==-2){knownCPU[1]=cpu[1]}
        else if (knownCPU[2].valor==-2){knownCPU[2]=cpu[2]}
        
    }else if (cartaCPU.valor==8){
        if (knownUsuario[0].valor==-2){knownUsuario[0]=usuario[0]}
        else if (knownUsuario[1].valor==-2){knownUsuario[1]=usuario[1]}
        else if (knownUsuario[2].valor==-2){knownUsuario[2]=usuario[2]}
        
    }else if (cartaCPU.valor==9){   /* Aun me falta trabajar en esta opcion */
        if (knownCPU[0].valor>3){
            knownCPU[0]=cartaCPU}
        else if (knownCPU[1].valor>3){
            knownCPU[1]=cartaCPU}
        else if (knownCPU[2].valor>3){
            knownCPU[2]=cartaCPU}
            
    }else if (cartaCPU.valor==10){
        if ((knownCPU[0].valor==-2) && (knownCPU[1].valor==-2 )&& (knownCPU[2].valor==-2 )){
            cartaSeleccionadaCPU=0;
        }else{
            cartaSeleccionadaCPU=0;
            if (knownCPU[1].valor>knownCPU[0].valor){cartaSeleccionadaCPU=1;}
            if (knownCPU[2].valor>knownCPU[1].valor && knownCPU[2].valor>knownCPU[0].valor ){cartaSeleccionadaCPU=2;}
            if (knownCPU[cartaSeleccionadaCPU].valor<4){
                if (knownCPU[0].valor==-2){cartaSeleccionadaCPU=0;}
                else if (knownCPU[1].valor==-2){cartaSeleccionadaCPU=1;}
                else if (knownCPU[2].valor==-2){cartaSeleccionadaCPU=2;}
            }
        }
        if ((knownUsuario[0].valor==-2) && (knownUsuario[1].valor==-2 )&& (knownUsuario[2].valor==-2 )){
            cartaSeleccionadaUsuario=0;
        }else{
            cartaSeleccionadaUsuario=0;
            if (knownUsuario[1].valor>knownUsuario[0].valor){cartaSeleccionadaUsuario=1;}
            if (knownUsuario[2].valor>knownUsuario[1].valor && knownUsuario[2].valor>knownUsuario[0].valor ){cartaSeleccionadaUsuario=2;}
            if (knownUsuario[cartaSeleccionadaUsuario].valor<4){
                if (knownUsuario[0].valor==-2){cartaSeleccionadaUsuario=0;}
                else if (knownUsuario[1].valor==-2){cartaSeleccionadaUsuario=1;}
                else if (knownUsuario[2].valor==-2){cartaSeleccionadaUsuario=2;}
            }
        }
        if (cpu[cartaSeleccionadaCPU].valor>usuario[cartaSeleccionadaUsuario].valor){
            tempCard=cpu[cartaSeleccionadaCPU];
            cpu[cartaSeleccionadaCPU]=usuario[cartaSeleccionadaUsuario];
            usuario[cartaSeleccionadaUsuario]=tempCard=cpu[cartaSeleccionadaCPU]
            knownCPU[cartaSeleccionadaCPU]=cpu[cartaSeleccionadaCPU];
            knownUsuario[cartaSeleccionadaUsuario]=usuario[cartaSeleccionadaUsuario];
            
        }
        
    }else{
        
        if (cartaCPU.valor<5){
            let tempCarta = 3;
            if (cartaCPU.valor<knownCPU[0].valor){tempCarta=0};
            if (cartaCPU.value<knownCPU[1].valor){tempCarta=1}
            if (cartaCPU.value<knownCPU[2].valor){tempCarta=2}
            if (tempCarta<3){
                knownCPU[tempCarta]=cartaCPU;
                cpu[tempCarta]=cartaCPU;
            }else{
                if (knownCPU[0].valor==-2){
                    knownCPU[0]=cartaCPU;
                    cpu[0]=cartaCPU;
                }else if (knownCPU[1].valor==-2){
                    knownCPU[1]=cartaCPU;
                    cpu[1]=cartaCPU;
                }else if (knownCPU[2].valor==-2){
                    knownCPU[2]=cartaCPU;
                    cpu[2]=cartaCPU;
                }

            }
        }
        
    }
    alert("termino el turno CPU"); 
    console.log("Las cartas de CPU ahora son:") ;
    console.log(cpu);

    console.log("Las cartas Conocias por CPU ahora son:") ;
    console.log(knownCPU);
    //*turnoCPU();
}


function intercambioCartas(nro){

    if (nro==1){
        cartaMia = parseInt(prompt("Que carta suya desea cambiar?(1, 2 o 3"));
        knownUsuario[cartaMia-1]=new Carta(-2,"",0);
        usuario[cartaMia-1]= baraja[indice];
        cancelar();
    }
    else if (nro==9){
        cartaMia = parseInt(prompt("Que carta suya desea cambiar?(1, 2 o 3"));
        cartaCPU = parseInt(prompt("Que carta rival desea cambiar?(1, 2 o 3"));
        if (knownUsuario[cartaMia-1].valor>-2){knownCPU[cartaCPU-1]=usuario[cartaMia-1]}else{knownCPU[cartaCPU-1]=new Carta(-2,"",0);};
        if (knownCPU[cartaCPU].valor>-2){knownUsuario[cartaMia-1]=cpu[cartaCPU-1]} else {knownUsuario[cartaMia-1]=new Carta(-2,"",0);};
        let tempCarta = cpu[cartaCPU-1];
        cpu[cartaCPU-1]=usuario[cartaMia-1];
        usuario[cartaMia-1]= tempCarta;
        cancelar();
    }
    else{
        cartaMia = parseInt(prompt("Que carta suya desea cambiar?(1, 2 o 3"));
        cartaCPU = parseInt(prompt("Que carta rival desea cambiar?(1, 2 o 3"));
        document.getElementById("opciones").innerHTML="";
        mostrarCartas(cartaMia,cartaCPU);
        newElement = document.createElement("button");
        newElement.setAttribute("onclick","siCambio("+cartaMia+","+cartaCPU+")");
        newElement.setAttribute("id","siCambio");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("siCambio").innerHTML="Cambiar";
        newElement = document.createElement("button");
        newElement.setAttribute("id","noCambio");
        newElement.setAttribute("onclick","cancelar()");
        document.getElementById("opciones").appendChild(newElement);
        document.getElementById("noCambio").innerHTML="Cancelar";
        document.getElementById("mazoImg").removeAttribute("onclick");
    }

}   

function siCambio(cartaMia,cartaCPU){
        document.getElementById("opciones").innerHTML="";
        let tempCarta = cpu[cartaCPU-1];
        cpu[cartaCPU-1]=usuario[cartaMia-1];
        usuario[cartaMia-1]= tempCarta;
        knownCPU[cartaCPU-1]=new Carta(-2,"",0);
        for (let index = 1; index < 7; index++) {
            document.getElementById("carta"+index).setAttribute("src","img/reverso.png")
        }
        cancelar()
}

function cancelar(){
    for (let index = 1; index < 7; index++) {
        document.getElementById("carta"+index).setAttribute("src","img/reverso.png")
    }
    document.getElementById("mazoImg").setAttribute("onclick","sacarCarta()");
    document.getElementById("opciones").innerHTML="";
}


function reiniciar(){
    baraja = [];
    cpu=[];
    usuario=[];
    knownCPU=[];
    knownUsuario=[];
    indice=0;
    puntosCPU=0;
    puntosUsuario=0;
    newElement = document.getElementById("mazo")
    newElement.remove();
    newElement = document.getElementById("descarte")
    newElement.remove();
    start();
    comenzar();
    document.getElementById("opciones").innerHTML="";
}

function mostrarCartas(cartaMia,cartaCPU){

    document.getElementById("carta"+(cartaMia+3)).setAttribute("src","img/"+usuario[cartaMia-1].archivo);
    document.getElementById("carta"+(cartaCPU)).setAttribute("src","img/"+cpu[cartaCPU-1].archivo);


}


function plantar(){

    for (let index = 0; index < 3; index++) {
        puntosCPU = puntosCPU+cpu[index].valor;
        puntosUsuario= puntosUsuario+usuario[index].valor;
    }
    
    baraja = [];
    cpu=[];
    usuario=[];
    knownCPU=[];
    knownUsuario=[];
    indice=0;
    newElement = document.getElementById("mazo")
    newElement.remove();
    newElement = document.getElementById("descarte")
    newElement.remove();
    start();
    comenzar();
    document.getElementById("opciones").innerHTML="";
    document.getElementById("puntosCPU").innerHTML="Cartas CPU - Puntos:"+puntosCPU;
    document.getElementById("puntosUsuario").innerHTML="Cartas Usuario - Puntos:"+puntosUsuario;
}
