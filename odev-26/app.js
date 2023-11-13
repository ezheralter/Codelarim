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

    ye(yenen) {
        if (this.turu == "Kedi" && yenen.turu == "Balık")
            document.write("Balık yedim");
        else
            document.write("Iyy bunu yemem. Bu bir " + yenen.turu);
    }
}

const hayvanlar = [

    new Hayvan("Aslan", "Simba", 23, "Et", "ROAR"),

    new Hayvan("Kaplan", "Kaplanova", 36, "Et", "ROAR"),

    new Hayvan("Kedi", "Tom", 12, "Balık,Mama vs.", "Miyav"),

    new Hayvan("Köpek", "Cinovar", 8, "Et,Mama vs.", "Hav"),

    new Hayvan("İnek", "Benek", 20, "Ot", "MÖÖÖÖÖÖ")
];

for (hayvan of hayvanlar) {
    console.log(hayvan.adi);
}

console.log(hayvanlar);

hayvanlar[0].konus();

const pamuk = new Hayvan("Kedi", "Pamuk", 2, "Balık", "Meoow");
const balik = new Hayvan("Balık", "Baluk", 1, "Solucan", "?");
pamuk.ye(balik);