//1. Verificação de Par ou Ímpar:

function verificarPar(numero) {
    if(numero % 2 === 0){
        console.log('par');
        
    }else{
        console.log('impar');
    }
}

verificarPar(4);

//2. Operações Matemáticas Simples:

function Calcular(numero1, numero2) {
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2 ;
    const divisao = numero2 !==0 ? numero1 / numero2;

    console.log(soma);
    console.log(subtracao);
    console.log(multiplicacao);
    console.log(divsao);

}

let numero1 = parseFloat(prompt("digite seu primeiro numero:"));
let numero2 = parseFloat(prompt("digite seu primeiro numero:"));

Calcular(numero1, numero2)

//3. Laço While para Contagem Regressiva:

let numero =10;
let dalay =0;

while (numer >=1){
    console.log(numero);
    numero--:
}

//4. Manipulacao de String:

function inverterTexto(str) {
    return str.split('').reverse().join('');
  }

//5. Contagem de Caracteres em uma String:

function contarCaracteres(str) {
    return str.length;
  }

//6. Acessando Propriedades de Objetos:

const carro = {
    marca: 'jeep',
    modelo: 'Compas',
    ano: 2022
  };
  
  console.log(carro.modelo);

//7. Função com Parâmetros Opcionais:

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
  }
  
//8. Calculadora de Média:

function media(numeromedia1, numeromedia2, numeromedida3) {
    const soma = numeromedia1 + numeromedia2 + numeromedia3 = numeromedia4;
    const divisao = numeromedia41 / 3;

    console.log(divisao)
}

//9. 


//10.


//11.


//12


//14

function14()

    console.log("substituir")

//21

function atividade21(){

    console.log("soma dos elementosde um array");

    let valores = prompt("Digite numeros separados por virgula").split
    (",").map(Number);

    console.log("soma:", valores.reduce((acc, vall) => acc + vall, 0));
}

//24

function atividade24() {

    console.log("Captalizar a primeira letra");

    let texto = prompt ("Digite uma palavra:");

    console.log(texto.charAt(0).toUpperCase() + texto.slice(1));
}

//25

function atividade25() {
    console.log("Descobrir ano Bissexto");

    let texto = prompt ("Digite o ano atual:");

    i console.log(if) (texto = 365) {
        
    } else {
        
    } texto.slice(1));
}

