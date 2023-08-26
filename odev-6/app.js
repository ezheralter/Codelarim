let sayilar = [];

for (let n = 0; n < 5; n++) {
    let sayi = +prompt("Sayı giriniz");
    sayilar[n] = sayi;
}

document.write("Yazdığınız sayılar:" + sayilar);