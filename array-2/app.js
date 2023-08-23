let kitalar = ["Asya", "Avrupa", "Kuzey Amerika", "Güney Amerika", "Avustralya", "Afrika", "Antartika", "Atlantis", "Mu"];

document.write(kitalar.length);

//-----------------------------------------------------------

for (let n = 0; n < kitalar.length; n++) {
    document.write("- " + kitalar[n] + "<br>");
}
//-----------------------------------------------------------

for (let n in kitalar) {
    document.write(n + ". kıta " + kitalar[n] + "<br>");
}
//------------------------------------------------------------

for (let kita of kitalar) {
    document.write("* " + kita + "<br>");
}
//------------------------------------------------------------

kitalar.forEach((kita) => {
    document.write("> " + kita + "<br>");
});
//------------------------------------------------------------