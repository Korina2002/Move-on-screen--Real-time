var move = document.getElementById('circle');
let moveBy = 10;

window.addEventListener('load',() => {
    move.style.position='absolute';
    move.style.left = 0;
    move.style.top = 0;
});

window.addEventListener('keydown', (e) => {

    switch(e.key) {
        case 'ArrowLeft' :
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight' : 
            circle.style.left = parseInt(circle.style.left) + moveBy +'px';
            break;
        case 'ArrowUp':
            circle.style.top= parseInt(circle.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;


    }
})


