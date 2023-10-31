class Hayvan {
    turu = "";
    adi = "";
    yas = 0;
    yedigi = "";
    soyledigi = "";

    constructor(turu, adi, yas, yedigi, soyledigi) {
        this.turu = turu;
        this.adi = adi;
        this.yas = yas;
        this.yedigi = yedigi;
        this.soyledigi = soyledigi;
    }

    konus() {
        document.write(this.soyledigi);
    }
}

const hayvanlar = [

    new Hayvan("Aslanı", "Simba", 23, "Et", "ROAR"),

    new Hayvan("Kaplan", "Kaplanova", 36, "ROAR"),

    new Hayvan("Kedi", "Tom", 12, "Balık,Mama vs.", "Miyav"),

    new Hayvan("Köpek", "Cinovar", 8, "Et,Mama vs.", "Hav"),

    new Hayvan("İnek", "Benek", 20, "Ot", "MÖÖÖÖÖÖ")
];

hayvanlar.push(new Hayvan("Metehan", "Alter", 40));

for (hayvan of hayvanlar) {
    console.log(hayvan.ad);
}

console.log(hayvanlar);

hayvanlar[0].konus();