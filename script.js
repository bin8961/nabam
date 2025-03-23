// script.js
function move() {
    const horse = document.getElementById("horse");
    let position = 0;
    const timer = setInterval(() => {
        position += 5;
        horse.style.marginLeft = position + "px";
        if(position > 200) clearInterval(timer);
    }, 50);
    document.getElementById("music").play();
}