const pikseller = [];
const renkler = ["transparent", "black", "gray", "darkred", "red", "lightblue", "blue", "green"];
const cizimAlan = document.createElement("div");
const renkPalet = document.createElement("div");
let secilen = "black";

document.body.style.display = "flex";
document.body.style.justifyContent = "flex";
//document.body.style.flexFlow = "colium wrap";

cizimAlan.style.width = "643px";
cizimAlan.style.height = "643px";
cizimAlan.style.margin = "10px auto";
cizimAlan.style.border = "solid 4px";
cizimAlan.style.position = "relative";

renkPalet.style.width = "80px";
renkPalet.style.height = "160px";
renkPalet.style.border = "solid 2px";
renkPalet.style.position = "relative";

document.body.append(cizimAlan);
document.body.append(renkPalet);

let r = 0;
for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 2; x++) {
        let renk = document.createElement("div");
        renk.style.width = "40px";
        renk.style.height = "40px";
        renk.style.position = "absolute";
        renk.style.border = "solid 1px";
        renk.style.top = (y * 40) + "px";
        renk.style.left = (x * 40) + "px";
        renk.style.backgroundColor = renkler[r++];
        renk.onclick = function () {
            secilen = renk.style.backgroundColor;
        }
        renkPalet.append(renk);
    }
}

for (let y = 0; y < 32; y++) {
    for (let x = 0; x < 32; x++) {
        let piksel = document.createElement("div");
        piksel.style.width = "20px";
        piksel.style.height = "20px";
        piksel.style.position = "absolute";
        piksel.style.border = "solid 1px lightgray";
        piksel.style.top = (y * 20) + "px";
        piksel.style.left = (x * 20) + "px";
        piksel.onclick = function () {
            piksel.style.backgroundColor = secilen;
        }
        cizimAlan.append(piksel);
    }
}