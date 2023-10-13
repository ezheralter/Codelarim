const nane = [];

function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}
const nene = document.createElement("div");
nene.style.margin = "50px auto";
nene.style.position = "relative";
nene.style.width = "500px";
document.body.append(nene);

for (let y = 0; y < 10; y++) {
    nane[y] = [];
    for (let x = 0; x < 10; x++) {
        const bulamadim = elmYap("span", "", "kutu");
        bulamadim.style.left = x * 50 + "px";
        bulamadim.style.top = y * 50 + "px";
        nene.append(bulamadim);
        nane[y][x] = bulamadim;
    }
}
nane[3][8].style.backgroundColor = "green";