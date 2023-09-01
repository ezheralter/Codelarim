const ogrenciler = [
    ["Ahmet", 125, [20, 50, 80]],
    ["Veli", 145, [40, 30, 45]],
    ["Ali", 178, [35, 56, 85]],
    ["Fatma", 252, [55, 67, 89]],
    ["Ezher", 991, [90, 95, 78]]
];

/* for (let n in ogrenciler) {
    document.write(ogrenciler[n][0] + "<br>");
} */

for (let ogrenci of ogrenciler) {
    document.write(ogrenci[0] + "-" + ogrenci[1] + "<br>");
}