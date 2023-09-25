const renkler = ["brown", "gray"];

let soru = +prompt("Kaç Tane Kutu Olsun?");

for (let n = 0; n < soru; n++) {
    const boks = document.createElement("div");
    boks.className = "box";
    boks.innerText = n + 1;
    boks.style.backgroundColor = renkler[n % 2];
    document.body.append(boks);
}
