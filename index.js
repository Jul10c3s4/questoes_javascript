console.log('ola');

function maiorMenor(){
    let inputs = document.getElementsByClassName("input-questao1")
    let pMaior = document.getElementById("maior")
    let pMenor = document.getElementById("menor")
    
    pMaior.innerText = ""
    pMenor.innerText = ""
    let maior = 0 
    let menor = Infinity

    for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value < menor) {
        menor = inputs[index].value
    }
    if (inputs[index].value > maior) {
        maior = inputs[index].value
    }
    }    
    pMaior.innerText = `maior: ${maior}`
    pMenor.innerText = `menor: ${menor}` 
}

function identificadorVogal(){
    let vogais = ["a", "e", "i", "o","u"] 
    let vogal = document.getElementById("vogal")
    let p = document.getElementById("respVogal")
    
    p.innerText = ""
    let retorno = false
    for (let index = 0; index < vogais.length; index++) {
        if (vogais[index] == vogal.value) {
            retorno = true
        }else{
            p.innerText = "0"
        }
    }
    if (retorno == true) {
        p.innerText = "1"
    }
}

function exibirInterv(){
    let inferior = document.getElementById("inferior")
    let superior = document.getElementById("superior")
    let interv = document.getElementById("interv")
    let paresTag = document.getElementById("pares")
    let somaTag = document.getElementById("soma")

    let inf = inferior.value
    let sup = superior.value

    let numbers = []
    let pares = []
    let soma = 0

    do{
        inf++
        numbers.push(inf)
        if((inf % 2) == 0){
            pares.push(inf)
            soma+= inf
        }
    }while(inf < sup-1)
    interv.innerText = numbers
    console.log(pares, soma);
    paresTag.innerText = `Números pares: ${pares}`
    somaTag.innerText = `Soma dos números pares: ${soma}` 
}

function ordenar(){
    let inputs = document.getElementsByClassName("input-questao2")
    let p = document.getElementById("ordenados")

    let numeros = []
    for (let index = 0; index < inputs.length; index++) {
        numeros.push(inputs[index].value)
    }
    function ordenacao(a, b){
        return a - b;
    }
    p.innerText = `${numeros.sort(ordenacao)}`
}

/*Faça uma função POSITIVO_NEGATIVO(x) que recebe um valor inteiro e verifica se o
valor é positivo ou negativo. A função deve retornar um valor booleano. */

function positivoNegativo(){
    let numero = document.getElementById("numeroQuest5")
    let p = document.getElementById("numposiNeg")

    console.log(numero.value);
    if (numero.value > -1) {
        p.innerText = "true"
    }else{
        p.innerText = "false"
    }
}

/*Faça uma função PAR_IMPAR(x) que recebe um valor inteiro e verifica se o valor é
par ou ímpar. A função deve retornar um valor booleano. */

function parImpar(){
    let numero = document.getElementById("numeroQuest6")
    let p = document.getElementById("pQuest6")

    if ((numero.value % 2) == 0) {
        p.innerText = "true"
    }else{
        p.innerText = "false"
    }
}
