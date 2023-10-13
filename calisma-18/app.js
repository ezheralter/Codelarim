function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}

const indirilenler = elmYap("span", "Notlar", "etiket");
const txtIndirilenler = elmYap("input");

const btnEkle = elmYap("button", "Ekle");

btnEkle.onclick = function () {
    if (txtIndirilenler.value != "") {
        var indirme = elmYap("div", "", "satir", liste);
        var icerik = document.createElement("span");
        icerik.className = "satir-icerik";
        icerik.textContent = txtIndirilenler.value;
        var btnDegistir = elmYap("button", "Değiştir", "btndegistir");
        var btnSil = elmYap("button", "Kaldır", "btnsil");

        btnDegistir.onclick = function () {
            let soru = prompt("Ne Olsun?");
            if (soru != "") {
                icerik.textContent = soru;
            }
        }

        btnSil.onclick = function () {
            indirme.remove();
        }

        indirme.append(icerik);
        indirme.append(btnDegistir);
        indirme.append(btnSil);
        liste.append(indirme);
    }
    txtIndirilenler.value = "";
}

const liste = elmYap("div", "", "liste");