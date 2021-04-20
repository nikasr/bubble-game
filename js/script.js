// Inicia a chamada do canvas no JS
var canvas = document.getElementById("buble"), context = canvas.getContext("2d");

var amimacao = 900; // Tempo da animação (em milisegundos)
var radius = 50; // Determina o raio do circulo
var x = 0;
var cont = 0; //contatdor do placar
var tempo = 0;

//coordenadas da bolha no momento do click
var xbola = 0;
var ybola = 0;


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

    xbola = centerX;
    ybola = centerY;

    context.fillStyle = my_gradient;

    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#D4DFE3";

    context.stroke();

    Placar();

    tempo++;

    // Adiciona uma cahamada a cada X milisegundos
    window.setTimeout(desenhaCirculo, amimacao);
}

function getCursorPosition(e) {
    var x;
    var y;
    
    //pega as coordenadas do click
    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
    }
    
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;


    if ((x >= (xbola-80)) && (x <= (xbola+80))) {
        if ((y >= (ybola-80)) && (y <= (ybola+80))) {
            cont++;
        }
    }
    
}

function Placar(){
 
	context.font = "bold 18px sans-serif";	
	context.fillStyle = "red";
	context.fillText('PLACAR = '+ cont,480,20);
    context.fillText('TEMPO  = '+ tempo,480,60);

    if (tempo >= (60)){
        

        if (cont<30){
            alert("QUE PENA! INFELIZMENTE VOCÊ PERDEU!");
        }else{
            alert("PARABÉNS! VOCÊ VENCEU - PLACAR FINAL : " + cont); 
        }
        
        cont = 0;
        tempo = 0;
        window.onload = desenhaCirculo;
    }
}

// Adiciona movimento ao carregar a página
window.onload = desenhaCirculo;
window.addEventListener("click", getCursorPosition, true);


