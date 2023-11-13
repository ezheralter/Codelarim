class Hayvan {
    turu = "";
    adi = "";
    neDer = "";
    neYer = "";
    yasiyor = true;

    constructor(turu, adi, neDer, neYer) {
        this.turu = turu;
        this.adi = adi;
        this.neDer = neDer;
        this.neYer = neYer;
    }

    konus() {
        console.log(this.neDer);
    }

    ye() {
        console.log(this.neYer + " Yedim");
    }

    ol() {
        this.yasiyor = false;
    }
}

class Kedi extends Hayvan {
    constructor(adi) {
        super("Kedi", adi, "Miyav", "Balık");
    }

    ye(yenen) {
        if (!yenen.yasiyor) {
            console.log("Var olmayan şeyi yiyemem!");
        }
        else if (yenen == this) {
            console.log("Hoop kendi kendimi mi yiyeyim gardaş?");
        }
        else if (yenen.turu == "Balık" || yenen.turu == "Kuş") {
            console.log("Bir " + yenen.turu + " yedim");
            yenen.ol();
        }
        else {
            console.log("Ben " + yenen.turu + " yemem!");
        }
    }
}

class Kopek extends Hayvan {
    constructor(adi) {
        super("Köpek", adi, "Hav", "Kemik");
    }
}

class Kus extends Hayvan {
    constructor(adi) {
        super("Kuş", adi, "CikCik", "Solucan");
    }
}

const tiviti = new Kus("Tiviti");

const karabas = new Kopek("Karabaş");
karabas.ye();

const tekir = new Kedi("Tekir");
tekir.ye(tiviti);

const pamuk = new Kedi("Pamuk");
pamuk.ye(tiviti);