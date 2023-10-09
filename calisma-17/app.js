function elmYap(tip, html, cls, hedef = document.body) {
    let elm = document.createElement(tip);
    elm.innerHTML = html;
    elm.className = cls
    hedef.append(elm);

    return elm;
}
const btnEkle = elmYap("button", "Tıkla");
btnEkle.onclick = function () {
    alert("Canım Annem İyiki Varsın Bana Pasta Yapabilirmisin :)");
}