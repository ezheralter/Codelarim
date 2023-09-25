const bilgiler = [
   "Ahmet Demir Öğrenci",
   "Musa Kara Mühendis",
   "Fatma Kısa Öğretmen",
   "Veli Uzun İşçi"];

for (let n = 0; n < 4; n++) {
   const boks = document.createElement("div");
   boks.className = "box";
   boks.innerText = bilgiler[n];
   document.body.append(boks);
}