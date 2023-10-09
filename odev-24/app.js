function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}

const Gorev = elmYap("span", "Yapılacak İşler", "etiket");
const txtGorev = elmYap("input",);

const btnEkle = elmYap("button", "Ekle");

btnEkle.onclick = function () {
    if (txtGorev.value != "") {
        var Is = elmYap("div", txtGorev.value, "satir", liste);
        var btnSil = elmYap("button", "Bitti", "btnsil", Is);
        btnSil.onclick = function () {
            Is.remove();
        }
    }
    txtGorev.value = "";
}

const liste = elmYap("div", "", "liste");
