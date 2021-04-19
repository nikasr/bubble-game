var canvas = document.getElementById("buble");
var context = canvas.getContext("2d");

function iniciarJogo(){ 

        context.beginPath();

        context.arc(300, 200, 50, 0, 2*Math.PI);
        context.stroke(); 

        context.moveTo(150,200);

        context.arc(100, 200, 50, 0, 2*Math.PI);
        context.stroke();   

}


let jogo = setInterval(iniciarJogo, 100);