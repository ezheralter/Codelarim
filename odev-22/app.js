const bilgiler = [
   { ad: "Ahmet ", soyad: "Demir ", meslek: "Öğrenci" },
   { ad: "Musa ", soyad: "Kara ", meslek: "Mühendis" },
   { ad: "Fatma ", soyad: "Kısa ", meslek: "Öğretmen" },
   { ad: "Veli ", soyad: "Uzun ", meslek: "İşçi" }
];

for (let bilgi of bilgiler) {
   const boks = document.createElement("div");
   boks.className = "box";
   boks.innerText = (bilgi.ad + bilgi.soyad + bilgi.meslek);
   document.body.append(boks);
}