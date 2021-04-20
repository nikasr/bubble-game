// Inicia a chamada do canvas no JS
var canvas = document.getElementById("buble"), context = canvas.getContext("2d");

var amimacao = 900; // Tempo da animação (em milisegundos)
var radius = 50; // Determina o raio do circulo
var x = 0;

// Monta o circulo no canvas com a posição
function desenhaCirculo() {
    // Calcula uma posição aleatória para o X
    var centerX = Math.floor((Math.random() * canvas.width) + 10);
    // Calcula uma posição aleatória para o Y
    var centerY = Math.floor((Math.random() * canvas.height)+ 10);

    // Limpa e desenha o circulo na posição
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();

    var my_gradient = context.createLinearGradient(centerX, centerX, centerY, centerY-50);
    my_gradient.addColorStop(0, "blue");
    my_gradient.addColorStop(1, "white");

    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = my_gradient;

    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#D4DFE3";

    context.stroke();

    // Adiciona uma cahamada a cada X milisegundos
    window.setTimeout(desenhaCirculo, amimacao);
}

//Conta as bolhas furadas
function Furou() {
    x++;
   alert("furou " + x);
}

// Adiciona movimento ao carregar a página
window.onload = desenhaCirculo;




/*
function iniciarJogo(){ 

        context.beginPath();

        context.arc(300, 200, 50, 0, 2*Math.PI);
        context.fill();
       // context.stroke(); 

        context.moveTo(150,200);

        context.arc(100, 200, 50, 0, 2*Math.PI);
        context.stroke();         

}
let jogo = setInterval(iniciarJogo, 100);
*/