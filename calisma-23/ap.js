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
//Discord=ezher9911#1167
class AnaKarakter extends Yuvarlak {
    constructor(x, y) {
        super("Hero", "black", x, y);
    }

    hareket() {
        const that = this;

        that.ox = that.x;
        that.oy = that.y;

        if (that.x > 10) that.x--;
        else (console.log("Lütfen Alan'da Kalınız"));
        if (that.x < W - 2) that.x++;
        else (console.log("Lütfen Alan'da Kalınız"));
        if (that.y > 10) that.y--;
        else (console.log("Lütfen Alan'da Kalınız"));
        if (that.y < H - 2) that.y++;
        else (console.log("Lütfen Alan'da Kalınız"));

        that.govde.style.left = that.x + "px";
        that.govde.style.top = that.y + "px";
    }
}

setInterval(() => {
    anakarakter.hareket();
}, 1);

const anakarakter = new AnaKarakter(40, 100);

let drag = false;

anakarakter.govde.addEventListener("mousedown", (e) => {
    drag = true;
    anakarakter.x = e.clientX - 10;
    anakarakter.y = e.clientY - 10;
    anakarakter.govde.style.left = anakarakter.x + "px";
    anakarakter.govde.style.top = anakarakter.y + "px";
});

document.addEventListener("mousemove", (e) => {
    if (drag) {
        anakarakter.x = e.clientX - 10;
        anakarakter.y = e.clientY - 10;
        anakarakter.govde.style.left = anakarakter.x + "px";
        anakarakter.govde.style.top = anakarakter.y + "px";
    }
});

document.addEventListener("mouseup", () => {
    drag = false;
});
