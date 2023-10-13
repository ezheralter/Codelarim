const kutular = [];

const ana = document.createElement("div");
ana.style.margin = "50px auto";
ana.style.position = "relative";
ana.style.width = "160px";
document.body.append(ana);

for (let y = 0; y < 5; y++) {
    kutular[y] = [];
    for (let x = 0; x < 5; x++) {
        let kutu = document.createElement("div");
        kutu.style.width = "30px";
        kutu.style.height = "30px";
        kutu.style.backgroundColor = "#2F4D7A";
        kutu.style.border = "solid 1px gray";
        kutu.style.position = "absolute";
        kutu.style.left = x * 34 + "px";
        kutu.style.top = y * 34 + "px";
        ana.append(kutu);
        kutular[y][x] = kutu;
    }
}

setTimeout(() => {
    kutular[3][2].style.backgroundColor = "lightgreen";
}, 5000);
