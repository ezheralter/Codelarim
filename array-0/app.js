let sayi = 45;
let metin = "Merhaba";
let karsilastirma = false;

let notlar = [45, 48, 55, 75];
let ogrenciler = [];

ogrenciler[0] = "Ahmet Demir";
ogrenciler[1] = "Musa Kısa";
ogrenciler[2] = "Fatma Uzun";

ogrenciler[1] = "Ezher Alter";

for (let n = 0; n < 3; n = n + 2); {
    console.log(ogrenciler[n]);
}

ogrenciler.push("Samet Mor");
document.write(ogrenciler);
document.write("<br>");

let son = ogrenciler.pop();
document.write(son);

document.write("<br>");

document.write(ogrenciler);
ogrenciler[2] = "Mehmet Demir";
ogrenciler.push("Ayşe Veli");
document.write(ogrenciler.slice(-2));
