const dugme1 = document.createElement("button");
dugme1.innerHTML = "lskjdsdfksta";
document.body.append(dugme1);

const dugme2 = document.createElement("button");
dugme2.innerHTML = "2kjwıadnş";
document.body.append(dugme2);

dugme1.onclick = function () {
    dugme1.innerHTML = "Okumayı Öğren";
    dugme1.style.backgroundColor = "green";
    dugme2.style.backgroundColor = "red";
    dugme2.innerHTML = "2 Milyar TL";
}

dugme2.onclick = function () {
    dugme1.style.backgroundColor = "red";
    dugme2.style.backgroundColor = "green";
}