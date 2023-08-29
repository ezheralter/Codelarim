let ogrenciler = ["Ahmet", "Ali", "Veli", "Fatma", "Musa"];
let notlar = [];
let not;

for (let n = 0; n < ogrenciler.length; n++) {
    not = +prompt(ogrenciler[n] + " Adlı Öğrencinin Notunu Giriniz:");
    notlar.push(not);
}

for (let n = 0; n < ogrenciler.length; n++) {
    document.write(ogrenciler[n] + " Adlı Öğrencinin Notu:" + notlar[n] + "<br>");
}
let hangi = +prompt("Kaçıncı öğrencinin notunu öğrenmek istiyorsun?");
alert("Bu öğrencinin adı " + ogrenciler[hangi] + ", notu: " + notlar[hangi]);