const W = 400;
const H = 400;

const Alan = document.createElement("div");

Alan.style.width = "408px";
Alan.style.height = "408px";
Alan.style.border = "solid 4px";

document.body.append(Alan);

class Dusmanlar {
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
        this.govde.style.position = "absolute";
        this.govde.style.left = x + "px";
        this.govde.style.top = y + "px";
        this.govde.style.backgroundColor = renk;
        document.body.append(this.govde);
    }
}

class Yesillik extends Dusmanlar {
    constructor(x, y) {
        super("Yeşillik", "lightgreen", x, y);
    }

    hareket() {
        if (this.yon) this.x++;
        else this.x--;

        if (this.x == 12 || this.x == W) this.yon = !this.yon;
        this.govde.style.left = this.x + "px";
    }

}

class Turuncgil extends Dusmanlar {
    constructor(x, y) {
        super("Turunçgil", "orange", x, y);
    }

    hareket() {
        if (this.yon) this.y++;
        else this.y--;

        if (this.y == 12 || this.y == H) this.yon = !this.yon;
        this.govde.style.top = this.y + "px";
    }
}

class AnaKarakter extends Dusmanlar {
    constructor(x, y) {
        super("Hero", "black", x, y);
    }

    hareket() {
        const that = this;
        document.onkeydown = function (e) {
            switch (e.key) {
                case "ArrowUp":
                    if (that.y > 0) that.y -= 5;
                    break;

                case "ArrowDown":
                    if (that.y < H) that.y += 5;
                    break;

                case "ArrowRight":
                    if (that.x < W) that.x += 5;
                    break;

                case "ArrowLeft":
                    if (that.x > 0) that.x -= 5;
                    break;
            }

            that.govde.style.left = that.x + "px";
            that.govde.style.top = that.y + "px";
        }
    }
}

const dusmanlar = [];

dusmanlar.push(new Turuncgil(190, 150));
dusmanlar.push(new Turuncgil(12, 200));
dusmanlar.push(new Yesillik(160, 150));
dusmanlar.push(new Yesillik(170, 200));

const anakarakter = new AnaKarakter(100, 100);
anakarakter.hareket();

for (let a = 0; a < 5; a++) {
    dusmanlar.push(new Yesillik(a * 50, 200 + a * 40));
}
for (let a = 0; a < 8; a++) {
    dusmanlar.push(new Turuncgil(50 + a * 50, a * 30));
}

setInterval(() => {
    for (yaratik of dusmanlar) {
        yaratik.hareket();
    }
}, 10);