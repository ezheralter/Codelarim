scr = document.createElement("div");
scr.className = "scr";
document.body.append(scr);

let en = 700;
let boy = 500;
let karSayi = 500;
let karlar = [];

for (let n = 0; n <= karSayi; n++) {
    karlar[n] = document.createElement("div");
    scr.append(karlar[n]);
    karlar[n].className = "kar";
    karlar[n].x = Math.round(Math.random() * en);
    karlar[n].y = -Math.round(Math.random() * boy);
    karlar[n].hiz = Math.random() * 3;
}

setInterval(() => {
    for (let n = 0; n <= karSayi; n++) {
        if (karlar[n].y > 500) karlar[n].y = -Math.round(Math.random() * boy);
        else karlar[n].y += karlar[n].hiz;

        karlar[n].x += (3 - Math.random() * 3);
        if (karlar[n].x > en) karlar[n].x = 0;
        karlar[n].style.left = karlar[n].x + "px";
        karlar[n].style.top = karlar[n].y + "px";
    }
}, 20);