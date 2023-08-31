let dersler = [];
for (let n = 0; n <= 4; n++) {
    let ders = [];
    let dersAdi = prompt("Bir ders giriniz");
    ders.push(dersAdi);
    let yazili = +prompt("Yazılı Notunu Giriniz ");
    ders.push(yazili);
    let sozlu = +prompt("Sözlü Notunu Giriniz ");
    ders.push(sozlu);
    dersler.push(ders);
}

for (let n = 0; n <= dersler.length; n++) {
    let ort = (dersler[n][1] + dersler[n][2]) / 2;
    document.write("Ders: " + dersler[n] + " Ortalaması: " + ort + "<br>");
}