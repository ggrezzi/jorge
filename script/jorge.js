

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

function start (){
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


function barajar()
{
    baraja.forEach(element => {
        element.numero=Math.random();
    });

    sort(baraja);
console.log(baraja);
}


function sort (mazo){

    let mazoOrdenado = mazo.sort((p1,p2) => (p1.numero<p2.numero)?1:(p1.numero>=p2.numero)?-1:0);
    return (mazoOrdenado);
}


function comenzar(){
    
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


    console.log(cpu);
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
indice++;
turnoCPU();

}


function turnoCPU(){
    let cartaCPU=baraja[indice];

}