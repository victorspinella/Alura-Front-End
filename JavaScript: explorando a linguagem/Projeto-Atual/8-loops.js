console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba"

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

console.log("Embarque: \n\n")

if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
} 

console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;


let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        break; 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}