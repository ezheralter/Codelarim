let dersler = [
    ["Matematik", 100, 98],
    ["Türkçe", 76, 68],
    ["Geometri", 70, 90],
    ["Fizik", 89, 80]
];


for (let n = 0; n < dersler.length; n++) {
    let ort = (dersler[n][1] + dersler[n][2]) / 2;
    document.write("- " + dersler[n][0] + ":  Yazılı: " + dersler[n][1] + " Sözlü: " + dersler[n][2] + " Ortalama: " + ort + "<br>");
}

for (let n in dersler) {
    document.write("* " + dersler[n][0] + ":  Yazılı: " + dersler[n][1] + " Sözlü: " + dersler[n][2] + " Ortalama: " + ort + "<br>");
}

for (let ders of dersler) {
    document.write("~ " + ders[0] + ":  Yazılı: " + ders[1] + " Sözlü:" + ders[2] + " Ortalama: " + ort + "<br>");
}