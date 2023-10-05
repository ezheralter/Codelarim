const button = document.createElement('button');
button.textContent = 'Tıkla';
document.body.appendChild(button);

let snTiklama = 0;
let zamanlayici;

button.onclick = function () {
    snTiklama++;
};


function showClickCount() {
    alert("10 Saniye Boyunca" + " " + snTiklama + " " + "Tıklama Oldu.");
    clearInterval(zamanlayici);
}


zamanlayici = setInterval(showClickCount, 10000);