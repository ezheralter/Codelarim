const txtAdSoyad = document.createElement("input");
document.body.append(txtAdSoyad);

const btnEkle = document.createElement("button");
btnEkle.innerHTML = "Ekle";
document.body.append(btnEkle);
btnEkle.style.backgroundColor = ("lightgreen")
btnEkle.style.color = ("white");

const renkler = ["yellow", "orange", "red", "darkred"];

let c = 0;
btnEkle.onclick = function () {
    if (txtAdSoyad.value.trim() != "") {
        let uye = document.createElement("div");
        uye.innerHTML = c + "-" + txtAdSoyad.value;
        liste.append(uye);
        c = c + 1;
        uye.style.backgroundColor = renkler[c % 4];
    }
    txtAdSoyad.value = "";
}

/* const btnDegistir = document.createElement("button");
btnDegistir.innerHTML = "Değiştir";
document.body.append(btnDegistir);
btnDegistir.style.backgroundColor = ("lightblue");
btnDegistir.style.color = ("white");

btnDegistir.onclick = function () {
    txtAdSoyad.value = "Ezher";
} */

const liste = document.createElement("div");
liste.style.width = "200px";
liste.style.border = "solid 2px gray";
liste.style.marginTop = "10px";
liste.style.minHeight = "20px";
document.body.append(liste);
