let dersler = ["Matematik", "Türkçe", "Müzik", "Fizik", "Tarih"];

let dersliste = "";
for (let n = 0; n < 5; n++) {
    dersliste = dersliste + n + "- " + dersler[n] + "\n";
}

let secim = +prompt(dersliste + "Hangi Dersi Değiştirmek İstiyorsun?");
let yeniders = prompt("Yeni Dersin Adı Ne?");

dersler[secim] = yeniders;

for (let n = 0; n < 5; n++) {
    document.write(n + "- " + dersler[n] + "<br>");
}