const canvas=document.querySelector('canvas'),
toolsBtn=document.querySelectorAll('.tools');
ctx=canvas.getContext('2d');


let isDrawing=false;
brushWidth=5;

window.addEventListener('load',()=>{
    canvas.width=canvas.offsetWidth;
    canvas.height=canvas.offsetHeight;
});

const startDrawing=()=>{
    isDrawing=true;
    ctx.beginPath();//creating new path to drawing
    ctx.lineWidth=brushWidth;
}

const drawing=(e)=>{
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX,e.offsetY); //creating line according mouse pointer
    ctx.stroke();//drawing
}

toolsBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log(btn.id);
    });
});



canvas.addEventListener('mousedown',startDrawing);
canvas.addEventListener('mousemove',drawing);
canvas.addEventListener('mouseup',()=>isDrawing=false);