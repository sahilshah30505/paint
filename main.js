var last_x , last_y;
mouseEvent="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=2;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}