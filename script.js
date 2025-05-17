let banner = document.getElementById('banner');
let pos = 0;
let direction = 1;

function moveBanner() {
    pos += direction;
    if (pos > window.innerWidth - 200 || pos < 0) {
        direction *= -1;
    }
    banner.style.left = pos + 'px';
}

setInterval(moveBanner, 10);
