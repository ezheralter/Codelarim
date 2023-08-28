let dersler = [];
let ders;
while (true) {
    ders = prompt("Ders Giriniz");
    if (ders == "")
        break;
    dersler.push(ders);
}

for (let n = 0; n < dersler.length; n++) {
    document.write(n + "- " + dersler[n] + "<br>");
}