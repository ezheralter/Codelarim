const renkler = ["red", "black", "red", "black"];

for (let n = 1; n < 11; n++) {
    const boks = document.createElement("div");
    boks.className = "box";
    boks.innerText = n;
    boks.style.backgroundColor = renkler[n % 4];
    document.body.append(boks);
}
