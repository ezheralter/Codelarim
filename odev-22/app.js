const bilgiler = [
   { ad: "Ahmet", soyad: "Demir", meslek: "Öğrenci" },
   { ad: "Musa", soyad: "Kara", meslek: "Mühendis" },
   { ad: "Fatma", soyad: "Kısa", meslek: "Öğretmen" },
   { ad: "Veli", soyad: "Uzun", meslek: "İşçi" }
];

for (let n = 0; n < 4; n++) {
   const boks = document.createElement("div");
   boks.className = "box";
   boks.innerText = bilgiler[n];
   document.body.append(boks);
}