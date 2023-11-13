const pikseller = [];
const Alan = document.createElement("div");
let secilen = "black";

document.body.style.display = "flex";
document.body.style.justifyContent = "flex";

Alan.style.width = "643px";
Alan.style.height = "643px";
Alan.style.margin = "10px auto";
Alan.style.border = "solid 4px";
Alan.style.position = "relative";

document.body.append(Alan);

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
        renk.onclick = function () {
            secilen = renk.style.backgroundColor;
        }
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
        for (let n = 0; n < 5; n++) {
            pixel[3][6]
        }
        Alan.append(piksel);
    }
}