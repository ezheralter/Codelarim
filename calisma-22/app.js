const W = 400;
const H = 400;

class Yaratik {
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

class Dev extends Yaratik {
    constructor(x, y) {
        super("Dev", "orange", x, y);
    }

    hareket() {
        if (this.yon) this.x++;
        else this.x--;

        if (this.x == 0 || this.x == W) this.yon = !this.yon;
        this.govde.style.left = this.x + "px";
    }

}

class Tuylu extends Yaratik {
    constructor(x, y) {
        super("Tüylü", "green", x, y);
    }

    hareket() {
        if (this.yon) this.y++;
        else this.y--;

        if (this.y == 0 || this.y == H) this.yon = !this.yon;
        this.govde.style.top = this.y + "px";
    }
}

class Hero extends Yaratik {
    constructor(x, y) {
        super("Hero", "black", x, y);
    }

    hareket() {
        const that = this;
        document.onkeydown = function (e) {
            switch (e.key) {
                case "ArrowUp":
                    if (that.y > 0) that.y -= 10;
                    break;

                case "ArrowDown":
                    if (that.y < H) that.y += 10;
                    break;

                case "ArrowRight":
                    if (that.x < W) that.x += 10;
                    break;

                case "ArrowLeft":
                    if (that.x > 0) that.x -= 10;
                    break;
            }

            that.govde.style.left = that.x + "px";
            that.govde.style.top = that.y + "px";
        }
    }
}

const yaratiklar = [];

yaratiklar.push(new Dev(150, 150));
yaratiklar.push(new Dev(170, 250));
yaratiklar.push(new Dev(1, 50));
yaratiklar.push(new Tuylu(200, 150));
yaratiklar.push(new Tuylu(15, 350));

const hero = new Hero(100, 100);
hero.hareket();

for (let a = 0; a < 5; a++) {
    yaratiklar.push(new Tuylu(200 + a * 40, a * 40));
    yaratiklar.push(new Dev(a * 40, 200 + a * 40));
}

setInterval(() => {
    for (yaratik of yaratiklar) {
        yaratik.hareket();
    }
}, 10);