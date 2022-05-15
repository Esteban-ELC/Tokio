var teclas = {
    LEFT: 37,
    UP: 38, 
    RIGHT: 39, 
    DOWN: 40
};

area_de_dibujo.addEventListener("mousedown", clickConMouse); 
area_de_dibujo.addEventListener("mousemove", dibujarConMouse);
area_de_dibujo,addEventListener("mouseup", dejarDeDibujar);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
let estado = false;
var x;
var y;

function dejarDeDibujar(evento){
    evento = false;
}
function clickConMouse(evento) {
    estado = true;
}

function dibujarConMouse(e1){
    if  (estado == true) {
        dibujarLinea("red", x, y, e1.offsetX, e1.offsetY, papel);
    }    

    x = e1.offsetX;
    y = e1.offsetY;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarTeclado(evento){
    var colorcito = "blue";
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.DOWN: 
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
    }
}