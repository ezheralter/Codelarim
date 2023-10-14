const nane = [];

function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}
const nene = document.createElement("div");
nene.style.width = "10px";
document.body.append(nene);

//let soru = prompt("Hangi Renk Olsun?(ingilizce yazınız)");
let renkler = ["white", "gray", "black", "yellow", "orange", "red", "lightblue", "blue", "lightgreen", "green"];

for (let y = 0; y < 100; y++) {
    nane[y] = [];
    for (let x = 0; x < 200; x++) {
        let bulamadim = elmYap("span", "", "kutu");
        bulamadim.style.left = x * 50 + "px";
        bulamadim.style.top = y * 50 + "px";
        nene.append(bulamadim);
        nane[y][x] = bulamadim;
        bulamadim.renk = 0;
        bulamadim.onclick = function () {
            bulamadim.renk = (bulamadim.renk + 1) % 10;
            bulamadim.style.backgroundColor = renkler[bulamadim.renk];
        }

    }
}