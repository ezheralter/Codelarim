const ogrenci = {};

ogrenci.ad = "Ahmet";
ogrenci.soyad = "Demir";
ogrenci.no = "234";

ogrenci.dersler = [];
ogrenci.dersler[0] = {};
ogrenci.dersler[0].ad = "Türkçe";
ogrenci.dersler[0].not = 85;

ogrenci.dersler[1] = {};
ogrenci.dersler[1].ad = "Tarih";
ogrenci.dersler[1].not = 75;

console.table(ogrenci);