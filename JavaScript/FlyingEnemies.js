var imgObj = null;
var animate;

function init() {
    imgObj = document.getElementById('enemies');
    imgObj.style.position = 'relative';
    imgObj.style.left = '1366px';
    moveRight();
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
    if (parseInt(imgObj.style.left) < 0)
        stop();
    animate = setTimeout(moveRight, 20); // call moveRight in 20msec
}

function stop() {
    clearTimeout(animate);
    imgObj.style.left = '1366px';
}

window.onload = init;