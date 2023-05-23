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

function calculocirculo() {
    let raio = parseInt(document.getElementById("raio").value)
    let area = Math.PI * Math.pow(raio, 2)
    document.getElementById("resultado").innerHTML = "A Área do Circulo é: " + area.toFixed(2)
}

function areatriagulo() {
    let raio = parseInt(document.getElementById("raio").value)
    let area = Math.PI * Math.pow(raio, 2)
    document.getElementById("resultado").innerHTML = "A Área do triagulo é: " + area.toFixed(2)
}

function calculodotriagulo() {
    let co = parseInt(document.getElementById("co").value)
    let ca = parseInt(document.getElementById("ca").value)
    h = Math.sqrt(co * co + ca * ca)
    document.getElementById("resultado").innerHTML = "A hipotenusa é: " + h.toFixed(2)
}


function realdolar() {
    let reais = parseInt(document.getElementById("real").value)
    let cotacao = parseInt(document.getElementById("dolar").value)
    let dolares = reais / cotacao
    document.getElementById("resultado").innerHTML = "O valor em dólar é:" + dolares.toFixed(2)
}
function media() {
    let n1 = parseInt(document.getElementById("nota1").value)
    let n2 = parseInt(document.getElementById("nota2").value)
    let n3 = parseInt(document.getElementById("nota3").value)
    let media = (n1 + n2 + n3) / 3
    document.getElementById("resultado").innerHTML = "O valor da media é:" + media.toFixed(2)
}


function conversaoTemperatura() {
    let celsius = parseFloat(document.getElementById("celsius").value)
    let fahrenheit = (celsius * 1.8) + 32
    document.getElementById("resultado").innerHTML = "O valor de celsius para fahrenheit:" + fahrenheit.toFixed(2)
}

function conversaoVelocidade() {
    let kmhora = parseInt(document.getElementById("velocidade").value)
    let mSegundo = kmhora / 3.6
    document.getElementById("resultado").innerHTML = "O valor de celsius para fahrenheit:" + mSegundo.toFixed(2)
}
function bhaskara() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)
    let delta = (b ** 2) - 4 * a * c
    let x1 = (-1 * b + (Math.sqrt(delta))) / (2 * a)
    let x2 = (-1 * b - (Math.sqrt(delta))) / (2 * a)
    document.getElementById("resultado").innerHTML = "A raiz das duas equação:" + x1.toFixed(2)
    document.getElementById("resultado").innerHTML = "A raiz das duas equação:" + x2.toFixed(2)
}