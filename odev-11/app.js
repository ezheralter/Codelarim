let ogrenciler = ["Ahmet", "Ali", "Veli", "Fatma", "Musa"];
let not;

for (let n = 0; n < ogrenciler.length; n++) {
    not = +prompt(ogrenciler[n] + " Adlı Öğrencinin Notunu Giriniz:");
    document.write(ogrenciler[n] + " Adlı Öğrencinin Notu:" + not + "<br>");
}