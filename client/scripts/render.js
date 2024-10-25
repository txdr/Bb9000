let canvas, ctx;

function renderLoop() {
    requestAnimationFrame(renderLoop);
}

function initializeRender() {
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    renderLoop();
}