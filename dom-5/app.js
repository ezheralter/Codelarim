function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}

const adsoyad = elmYap("span", "Ad Soyad ", "etiket");
const txtAdSoyad = elmYap("input",);
elmYap("br");
elmYap("span", "Sınıf ").className = "etiket";
const txtSinif = elmYap("input");
elmYap("br");
elmYap("span", "Numara", "etiket");
const txtNo = elmYap("input");

const btnEkle = elmYap("button", "Ekle");

btnEkle.onclick = function () {
    if (txtAdSoyad.value != "" && txtSinif.value != "" && txtNo.value != "") {
        var ogrenci = elmYap("div", txtAdSoyad.value + " " + txtSinif.value + " " + txtNo.value, "satir", liste);
        var btnSil = elmYap("button", "Sil", "btnsil", ogrenci);
        btnSil.onclick = function () {
            ogrenci.remove();
        }
    }
    else {
        alert("Bütün alanları Doldurunuz");
    }
    txtAdSoyad.value = "";
    txtSinif.value = "";
    txtNo.value = "";
}

const liste = elmYap("div", "", "liste");
