const W = 400;
const H = 400;

let keyMap = [];

const alan = document.createElement("div");

alan.style.width = "408px";
alan.style.height = "408px";
alan.style.border = "solid 4px";
alan.style.position = "relative";
alan.style.overflow = "hidden";

document.body.append(alan);

window.onkeydown = window.onkeyup = (e) => {
    keyMap[e.which] = e.type == "keydown";
}

class KirmiziKare {
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

const kirmiziKare = new KirmiziKare(W - 20, H - 20);

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
        this.govde.style.border = "1px solid gray";
        this.govde.style.position = "absolute";
        this.govde.style.left = x + "px";
        this.govde.style.top = y + "px";
        this.govde.style.backgroundColor = renk;
        document.body.append(this.govde);
    }
}

class GicikEdici extends Dusmanlar {
    constructor(x, y, kim) {
        super("GıcıkEdici", "red", x, y, kim);
        this.kim = kim;
    }

    hareket() {
        if (this.x < this.kim.x) this.x += 0.2;
        else this.x -= 0.2;
        if (this.y < this.kim.y) this.y += 0.2;
        else this.y -= 0.2;
        this.govde.style.left = this.x + "px";
        this.govde.style.top = this.y + "px";
    }
}

//:ı

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

class Duvar extends KirmiziKare {
    constructor(x, y, w, h) {
        super(x, y);
        this.w = w;
        this.h = h;
        this.govde.style.width = w + "px";
        this.govde.style.height = h + "px";
        this.govde.style.backgroundColor = "lightblue";
        this.govde.style.border = "none";
    }
}

class AnaKarakter extends Dusmanlar {
    constructor(x, y) {
        super("Hero", "black", x, y);
    }

    hareket() {
        const that = this;

        that.ox = that.x;
        that.oy = that.y;

        if (keyMap[37] && that.x > 10) that.x--;
        if (keyMap[39] && that.x < W) that.x++;
        if (keyMap[38] && that.y > 10) that.y--;
        if (keyMap[40] && that.y < H) that.y++;

        for (let duvar of duvarlar) {
            if (
                duvar.x < anakarakter.x + 20 &&
                duvar.x + duvar.w > anakarakter.x &&
                duvar.y < anakarakter.y + 20 &&
                duvar.y + duvar.h > anakarakter.y
            ) {
                that.x = that.ox;
                that.y = that.oy;
            }
        }

        that.govde.style.left = that.x + "px";
        that.govde.style.top = that.y + "px";
    }
}

const dusmanlar = [];
const duvarlar = [];

dusmanlar.push(new Turuncgil(190, 150));
dusmanlar.push(new Turuncgil(12, 200));
dusmanlar.push(new Yesillik(160, 150));
dusmanlar.push(new Yesillik(170, 200));

duvarlar.push(new Duvar(70, 12, 2, 100));
duvarlar.push(new Duvar(70, 110, 50, 2));
duvarlar.push(new Duvar(70, 150, 100, 2));
duvarlar.push(new Duvar(370, 360, 30, 2));
duvarlar.push(new Duvar(360, 383, 2, 30));
duvarlar.push(new Duvar(50, 300, 70, 2));
duvarlar.push(new Duvar(20, 330, 70, 2));
duvarlar.push(new Duvar(190, 200, 2, 50));
duvarlar.push(new Duvar(12, 140, 90, 2));
duvarlar.push(new Duvar(250, 100, 2, 50));
duvarlar.push(new Duvar(200, 300, 2, 50));
duvarlar.push(new Duvar(190, 200, 50, 2));
duvarlar.push(new Duvar(260, 260, 50, 2));
duvarlar.push(new Duvar(239, 360, 2, 60));

const anakarakter = new AnaKarakter(40, 100);
anakarakter.hareket();

dusmanlar.push(new GicikEdici(300, 300, anakarakter));

for (let a = 0; a < 5; a++) {
    dusmanlar.push(new Yesillik(a * 50, 200 + a * 40));
}
for (let a = 0; a < 8; a++) {
    dusmanlar.push(new Turuncgil(50 + a * 50, a * 30));
}

setInterval(() => {
    anakarakter.hareket();

    for (dusman of dusmanlar) {
        dusman.hareket();
        if (
            dusman.x < anakarakter.x + 20 &&
            dusman.x + 20 > anakarakter.x &&
            dusman.y < anakarakter.y + 20 &&
            dusman.y + 20 > anakarakter.y
        ) {
            location.reload();
            break;
        }
    }

    if (
        kirmiziKare.x < anakarakter.x + 20 &&
        kirmiziKare.x + 20 > anakarakter.x &&
        kirmiziKare.y < anakarakter.y + 20 &&
        kirmiziKare.y + 20 > anakarakter.y
    ) {
        location.reload();
        alert("Kazandınız! Yeniden Başlatmak İçin F5 e 2-3 kez Basınız");
    }
}, 8);