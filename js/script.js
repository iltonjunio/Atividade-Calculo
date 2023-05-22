function helloworld() {
    alert("hello world!");
}

function soma(n1, n2) {
    alert(n1 + n2)

}

function subtracao(n1, n2) {
    alert(n1 + n2)
}

function multiplicacao(n1, n2) {
    alert(n1 + n2)
}

function divisao(n1, n2) {
    alert(n1 + n2)
}

function mostrarnome() {
    let nome = prompt("Qual seu nome?")
    alert("Olá, " + nome)
}

function calculo(n1, n2) {
    alert(n1 * n2)
}

function circulo() {
    let raio = parseFloat(prompt("Informe o valor do raio"))
    let area = Math.PI * Math.pow(raio, 2)
    alert("A área do círculo é: " + area);
}

function triagulo() {
    let cateto1 = parseFloat(prompt("Digite o valor:"))
    let cateto2 = parseFloat(prompt("Digite o valor:"))
    hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
    alert(hipotenusa.toFixed(2))
}


function realdolar() {
    let real = prompt("Digite o valor em reais:")
    let cotacao = prompt("Digite a cotação atuação do dolar:")
    let dolares = real / cotacao
    alert(dolares.toFixed(2));
}
function media() {
    let nota1 = parseFloat(prompt("Informe a primeira nota:"));
    let nota2 = parseFloat(prompt("Informe a segunda nota:"));
    let nota3 = parseFloat(prompt("Informe a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;
    alert(media.toFixed(2));
}

function raizes() {
    let celsius = prompt(Informe a temperatura em graus: )
    let fahrenjeit = (celsius * 1.8) + 32
    alert(fahrenjeit)
}
function kmhora() {
    let km = prompt("informe o valor em km/h")
    let msegundo = km / 3.6
    alert(msegundo.toFixed(2));
}