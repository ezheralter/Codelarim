const W = 400;
const H = 400;
let keyMap = [];
const alan = document.createElement("div");

alan.style.width = "408px";
alan.style.height = "408px";
alan.style.border = "solid 4px";

document.body.append(alan);

window.onkeydown = window.onkeyup = (e) => {
    keyMap[e.which] = e.type == "keydown";
}

class Duvar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.govde = document.createElement("div");
        this.govde.style.width = "px";
        this.govde.style.height = "20px";
        this.govde.style.border = "2px solid black";
        this.govde.style.position = "absolute";
        this.govde.style.left = x + "px";
        this.govde.style.top = y + "px";
        document.body.append(this.govde);
    }
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

const duvar = new Duvar(90, 10);

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

        if (keyMap[37] && that.x > 10) that.x -= 1;
        if (keyMap[39] && that.x < W) that.x += 1;
        if (keyMap[38] && that.y > 10) that.y -= 1;
        if (keyMap[40] && that.y < H) that.y += 1;

        that.govde.style.left = that.x + "px";
        that.govde.style.top = that.y + "px";

        /*         document.onkeydown = function (e) {
                    switch (e.key) {
                        case "ArrowUp":
                            if () that.y -= 5;
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
        
                } */
    }
}

const dusmanlar = [];

dusmanlar.push(new Turuncgil(190, 150));
dusmanlar.push(new Turuncgil(12, 200));
dusmanlar.push(new Yesillik(160, 150));
dusmanlar.push(new Yesillik(170, 200));

const anakarakter = new AnaKarakter(40, 100);

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
        duvar.x < anakarakter.x + 20 &&
        duvar.x + 20 > anakarakter.x &&
        duvar.y < anakarakter.y + 20 &&
        duvar.y + 20 > anakarakter.y
    ) {

    }

    if (
        kirmiziKare.x < anakarakter.x + 20 &&
        kirmiziKare.x + 20 > anakarakter.x &&
        kirmiziKare.y < anakarakter.y + 20 &&
        kirmiziKare.y + 20 > anakarakter.y
    ) {
        location.reload();
        alert("Kazandınız! Yeniden Başlatmak İçin F5 e Basınız");
    }
}, 8);