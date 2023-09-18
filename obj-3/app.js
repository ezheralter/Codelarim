const ogrenciler = [];

for (let n = 0; n < 5; n++) {
    let ad = prompt("Adı");
    let soyad = prompt("Soyadı");
    let dersler = [];
    for (let d = 0; d < 2; d++) {
        dersler[d] = {};
        dersler[d].ad = prompt("Ders Adı");
        dersler[d].not = prompt("Ders Notu");
    }
    let ogrenci = {
        ad: ad, soyad: soyad, dersler: dersler
    }
    ogrenciler.push(ogrenci);
}

console.log(ogrenciler);