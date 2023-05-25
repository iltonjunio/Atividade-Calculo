
function soma(n1, n2) {
    alert(n1 + n2)

}

function subtracao(n1, n2) {
    alert(n1 + n2)
}

function multiplicacao(n1, n2) {
    alert(n1 + n2)
}

function divisao() {
    numerador = parseFloat(document.getElementById("numerador").value);
    denominador = parseFloat(document.getElementById("denominador").value);

    if (denominador === 0) {
        document.getElementById("resultado").innerHTML =
            "Não é possível dividir por zero.";
    } else {
        resultado = numerador / denominador;
        document.getElementById("resultado").innerHTML = resultado;
    }
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
    document.getElementById("resultado1").innerHTML = "A Área do Circulo é: " + area.toFixed(2)
}

function areatriagulo() {
    let raio1 = parseFloat(document.getElementById("base").value)
    let raio2 = parseFloat(document.getElementById("altura").value)

    if (altura == 0) {
        document.getElementById("resultado2").innerHTML =
            "Não é possível dividir por zero."
    } else {
        resultado2 = (raio1 * raio2) / 2
        document.getElementById("resultado2").innerHTML = resultado2
    }
}


function calculodotriagulo() {
    let co = parseInt(document.getElementById("co").value)
    let ca = parseInt(document.getElementById("ca").value)
    h = Math.sqrt(co * co + ca * ca)
    document.getElementById("resultado3").innerHTML = "A hipotenusa é: " + h.toFixed(2)
}


function realdolar() {
    let reais = parseInt(document.getElementById("real").value)
    let cotacao = parseInt(document.getElementById("dolar").value)

    if (cotacao  == 0) {
        document.getElementById("resultado4").innerHTML =
            "Não é possível dividir por zero."
    } else {
        resultado = reais / cotacao
        document.getElementById("resultado4").innerHTML = resultado
    }
}

function media() {
    let n1 = parseInt(document.getElementById("nota1").value)
    let n2 = parseInt(document.getElementById("nota2").value)
    let n3 = parseInt(document.getElementById("nota3").value)

    if (n1, n2, n3 == 0) {
        document.getElementById("resultado5").innerHTML =
            "Não é possível dividir por zero."
    } else {
        resultado = (n1 + n2 + n3) / 3
        document.getElementById("resultado5").innerHTML = resultado
    }
}



function conversaoTemperatura() {
    temperaturaCelsius = parseFloat(document.getElementById("celsius").value);
    temperaturaFahrenheit = (temperaturaCelsius * 9) / 5 + 32;
    document.getElementById("resultado6").innerHTML = "O valor de cesius para Fahrenheit: " + temperaturaFahrenheit.toFixed(2)
}   

function conversaoVelocidade() {
    velocidade = parseFloat(document.getElementById("velocidade").value);
    tempo = parseFloat(document.getElementById("tempo").value);

    if (tempo === 0) {
        document.getElementById("resultado7").innerHTML =
            "O tempo não pode ser zero.";
    } else {
        var resultado = velocidade / tempo;
        document.getElementById("resultado7").innerHTML = resultado;
    }
}



function bhaskara() {
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)
    let delta = (b ** 2) - 4 * a * c
    let x1 = (-1 * b + (Math.sqrt(delta))) / (2 * a)
    let x2 = (-1 * b - (Math.sqrt(delta))) / (2 * a)

    if (delta < 0 || isNaN(delta)) {
        document.getElementById("resultado8").innerHTML =
            "A equação não possui raízes reais.";
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado8").innerHTML =
            "x1 = " + x1 + "<br />x2 = " + x2;
    }
}