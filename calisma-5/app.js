let markalar = [];
let marka;
while (true) {
    marka = prompt("Bir Marka Giriniz");
    if (marka == "")
        break;
    markalar.push(marka);
}

for (let n = 0; n < markalar.length; n++) {
    document.write(n + "- " + markalar[n] + "<br>");
}