let ogrenciler = [];
let notlar = [];

for (let n = 0; n < 5; n++) {
    let ogrenci = prompt("Ogrencinin adı");
    let not = prompt("Öğrencinin notu");
    ogrenciler[n] = ogrenci;
    notlar[n] = not;
}

for (let n in ogrenciler) {
    document.write(ogrenciler[n] + ": " + notlar[n] + "<br>");
}