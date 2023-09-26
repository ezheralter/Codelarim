const bilgiler = [
   { ad: "Koyu", soyad: "Koyu", meslek: "Öğrenci" },
   { ad: "Koyu", soyad: "Koyu", meslek: "Mühendis" },
   { ad: "Koyu", soyad: "Koyu", meslek: "Öğretmen" },
   { ad: "Koyu", soyad: "Koyu", meslek: "İşçi" }
];

for (let bilgi of bilgiler) {
   const box = document.createElement("div");
   box.className = "box";
   box.innerHTML = (bilgi.ad + " " + bilgi.soyad + "<br>" + bilgi.meslek);
   document.body.append(box);
}
