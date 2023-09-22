const kutu = document.getElementById("kutu");
const mesaj = document.getElementById("mesaj");

//setTimeout(() => kutu.remove(), 3000)

kutu.innerText = "Güle Güle";
kutu.style.color = "red";
kutu.style.backgroundColor = "Black";
kutu.style.width = "50%";

mesaj.style.backgroundColor = "yellow";
mesaj.style.border = "solid 1px";
mesaj.style.width = "100px";
mesaj.style.height = "70px";
mesaj.innerText = "Bu Bir Mesajdır"
mesaj.style.position = "absolute";
mesaj.style.right = "0";
mesaj.style.bottom = "0";

const byebye = document.createElement("div");

byebye.style.backgroundColor = "cyan";
document.body.append(byebye);
byebye.innerText = "Bye Bye"
byebye.style.width = "50px";
byebye.style.height = "50px";
byebye.style.position = "absolute";
byebye.style.right = "50%";
byebye.style.bottom = "50%";
byebye.style.border = "solid 5px";

const dolap = document.createElement("div");
dolap.className = "box";
dolap.innerText = "DOLAP";
document.body.append(dolap);