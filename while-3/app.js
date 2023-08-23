let toplam = 0;
let sayi;

/* while (true) {
    sayi = +prompt("Toplama Eklenecek Sayıyı Giriniz");
    if(sayi==0)break;
    toplam = toplam + sayi;
}
 */
while (sayi != 0) {
    sayi = +prompt("Toplama Eklenecek Sayıyı Giriniz");
    toplam = toplam + sayi;
}

alert("Toplam:" + toplam);
