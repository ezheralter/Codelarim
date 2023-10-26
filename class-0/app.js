class Ogrenci {
    ad = "";
    soyad = "";
    yas = 0;

    constructor(ad, soyad, yas) {
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas;
    }

    adiniYaz() {
        document.write(this.ad);
    }
}

const ogrenciler = [

    new Ogrenci("Ahmet", "Maraba", 11),

    new Ogrenci("Mehmet", "Kara", 93),

    new Ogrenci("Ezher", "Alter", 12),
];

ogrenciler.push(new Ogrenci("Metehan", "Alter", 40));

for (ogrenci of ogrenciler) {
    console.log(ogrenci.ad);
}

console.log(ogrenciler);

ogrenciler[2].adiniYaz();

let ogr = new Ogrenci("Musa", "Kısa", 25);

ogr.adiniYaz();