const pikseller = [];
const renkler = ["transparent", "black", "gray", "orange", "darkred", "red", "lightblue", "yellow", "blue", "darkblue", "lightgreen", "green", "darkgreen",];
const cizimAlan = document.createElement("div");
const renkPalet = document.createElement("div");
let secilen = "black";

document.body.style.display = "flex";
document.body.style.justifyContent = "flex";

cizimAlan.style.width = "802px";
cizimAlan.style.height = "802px";

cizimAlan.style.border = "solid 4px";
cizimAlan.style.position = "relative";

renkPalet.style.width = "82px";
renkPalet.style.height = "242px";
renkPalet.style.border = "solid 2px";
renkPalet.style.position = "relative";

document.body.append(cizimAlan);
document.body.append(renkPalet);

let c = 0;
for (let y = 0; y < 6; y++) {
    for (let x = 0; x < 2; x++) {
        let renk = document.createElement("div");
        renk.style.width = "40px";
        renk.style.height = "40px";
        renk.style.position = "absolute";
        renk.style.border = "solid 1px";
        renk.style.top = (y * 40) + "px";
        renk.style.left = (x * 40) + "px";
        renk.style.backgroundColor = renkler[c++];
        renk.onclick = function () {
            secilen = renk.style.backgroundColor;
        }
        renkPalet.append(renk);
    }
}

for (let y = 0; y < 40; y++) {
    for (let x = 0; x < 40; x++) {
        let piksel = document.createElement("div");
        piksel.style.width = "20px";
        piksel.style.height = "20px";
        piksel.style.position = "absolute";
        piksel.style.border = "solid 1px rgb(45, 46, 45)";
        piksel.style.top = (y * 20) + "px";
        piksel.style.left = (x * 20) + "px";
        piksel.onclick = function () {
            piksel.style.backgroundColor = secilen;
        }
        cizimAlan.append(piksel);
    }
}