window.onkeydown = function (e) { if (!e) { e = window.event; } 
   
    var code = e.keyCode; 
    var stickman = document.getElementById("player");
    var top = parseInt (stickman.style.top, 10); var left = parseInt (stickman.style.left, 10); 
    if ( code == 37 ) {   
        if ( left > 0 ) { stickman.style.left = left - 10 + 'px'; } } 
    else if ( code == 38 ) { 
        if ( top > 0 ) { stickman.style.top = top - 10 + 'px'; } } else if ( code == 39 ) { 
            if (left + stickman.width + 10 < window.innerWidth) { stickman.style.left = left + 10 + 'px'; }
        } else if (code == 40) {
            if (top + stickman.height + 10 < window.innerHeight) { stickman.style.top = top + 10 + 'px'; }
        }
}


//This code has been taken from http://errietta.me/blog/move-an-image-around-with-arrow-keys/