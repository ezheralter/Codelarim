const button = document.createElement('button');
button.textContent = 'Tıkla';
document.body.appendChild(button);

const sayach = document.createElement("div");
document.body.append(sayach);

let snTiklama = 0;
let zamanlayici;
let saniye = 10;

button.onclick = function () {
    snTiklama++;
};

function sayacGoster() {
    saniye--;
    sayach.innerHTML = saniye;
}

function showClickCount() {
    alert("10 Saniye Boyunca" + " " + snTiklama + " " + "Tıklama Oldu.");
    clearInterval(zamanlayici);
}


setTimeout(showClickCount, 10000);
zamanlayici = setInterval(sayacGoster, 1000);