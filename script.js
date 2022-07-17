function getRandomColor() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    } return color;
};

function setRandomColor() {
    let colorbody = document.getElementsByClassName("color-body");
    let children = colorbody[0].children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = getRandomColor();
    };
};

