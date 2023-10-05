function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}

elmYap("span", "Tarih:", "etiket");
const txtTarih = elmYap("input",);
elmYap("br");
elmYap("span", "Havanın Durumu:").className = "etiket";
const txtHavaD = elmYap("input");
elmYap("br");
elmYap("span", "Derece:", "etiket");
const txtDerece = elmYap("input");
elmYap("br");
elmYap("span", "Bölge:", "etiket");
const txtBolge = elmYap("input");

const btnEkle = elmYap("button", "Ekle");

btnEkle.onclick = function () {
    if (txtTarih.value != "") {
        elmYap(
            "div",
            "Tarih :" + txtTarih.value + "<br>" +
            "Hava D. :" + txtHavaD.value + "<br>" +
            "Derece :" + txtDerece.value + "<br>" +
            "Bölge :" + txtBolge.value, "satir", liste);
    }
    txtTarih.value = "";
    txtHavaD.value = "";
    txtDerece.value = "";
    txtBolge.value = "";
}

const liste = elmYap("div", "", "liste");