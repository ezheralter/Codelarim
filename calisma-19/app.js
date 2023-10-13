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

let soru = prompt("Hangi Renk Olsun?(ingilizce yazınız)");

for (let y = 0; y < 100; y++) {
    nane[y] = [];
    for (let x = 0; x < 200; x++) {
        const bulamadim = elmYap("span", "", "kutu");
        bulamadim.style.left = x * 50 + "px";
        bulamadim.style.top = y * 50 + "px";
        nene.append(bulamadim);
        nane[y][x] = bulamadim;
        for (let zmn = 1; zmn == 1; zmn++) {
            bulamadim.onclick = function () {
                bulamadim.style.backgroundColor = soru;
            }
        }

    }
}