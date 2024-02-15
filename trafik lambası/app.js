const W = 400;
const H = 400;

class Yuvarlak {
    tur = "";
    renk = "";
    govde = null;
    x = 0;
    y = 0;
    yon = true;

    constructor(tur, renk, x, y) {
        this.x = x;
        this.y = y;
        this.tur = tur;
        this.renk = renk;
        this.govde = document.createElement("div");
        this.govde.style.width = "20px";
        this.govde.style.height = "20px";
        this.govde.style.borderRadius = "50%";
        this.govde.style.border = "1px solid gray";
        this.govde.style.position = "absolute";
        this.govde.style.left = x + "px";
        this.govde.style.top = y + "px";
        this.govde.style.backgroundColor = renk;
        document.body.append(this.govde);
    }
}

class Bulamadim {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.govde = document.createElement("div");
        this.govde.style.width = "20px";
        this.govde.style.height = "20px";
        this.govde.style.border = "2px solid red";
        this.govde.style.position = "absolute";
        this.govde.style.left = x + "px";
        this.govde.style.top = y + "px";
        document.body.append(this.govde);
    }
}

class Duvar extends Bulamadim {
    constructor(x, y, w, h) {
        super(x, y);
        this.w = w;
        this.h = h;
        this.govde.style.width = w + "px";
        this.govde.style.height = h + "px";
        this.govde.style.borderRadius = "30%";
        this.govde.style.backgroundColor = "black";
        this.govde.style.border = "none";
    }
}

const arka = new Duvar(36, 97, 30, 72);

class Yesil extends Yuvarlak {
    constructor(x, y) {
        super("Yeşil", "black", x, y);
        this.intervalId = setInterval(this.degisim.bind(this), 10500);
    }

    degisim() {
        this.govde.style.backgroundColor = "green";
        setTimeout(() => {
            this.govde.style.backgroundColor = "black";
        }, 7000);
    }
}

class Turuncu extends Yuvarlak {
    constructor(x, y) {
        super("Turuncu", "black", x, y);
        this.intervalId = setInterval(this.degisim.bind(this), 10100);
    }

    degisim() {
        this.govde.style.backgroundColor = "orange";
        setTimeout(() => {
            this.govde.style.backgroundColor = "black";
        }, 700);
    }
}

class Kirmizi extends Yuvarlak {
    constructor(x, y) {
        super("Kırmızı", "red", x, y);
        this.intervalId = setInterval(this.degisim.bind(this), 10000);
    }

    degisim() {
        this.govde.style.backgroundColor = "black";
        setTimeout(() => {
            this.govde.style.backgroundColor = "red";
        }, 7500);
    }
}
const yeshul = new Yesil(40, 144)
const turunchu = new Turuncu(40, 122)
const anakarakter = new Kirmizi(40, 100);