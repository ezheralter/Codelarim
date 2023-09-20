const tr = {
    il_1: "Van",
    ilce_1: "Edremit",
    nufus_1: 19872,
    il_2: "Siirt",
    ilce_2: "Kurtalan",
    nufus_2: 10607
};

const sehirler = [
    {
        ad: "Van",
        nufus: 1200,
        unlu: ["Van Kedisi", "Van Kalesi", "Muradiye Şelalesi"],
        ilceler: [
            { ad: "Edremit", nufus: 145 },
            { ad: "Gevaş", nufus: 75 },
            { ad: "Erciş", nufus: 150 }
        ]
    },

    {
        ad: "Siirt",
        nufus: 450,
        unlu: ["Fıstık", "Ziyaret"],
        ilceler: [
            { ad: "Pervari", nufus: 45 },
            { ad: "Tillo", nufus: 35 }
        ]
    }
];

tr.il_1 = "Van";
tr.ilce_1 = "Edremit";
tr.nufus_1 = "19872";

tr.il_2 = "Siirt";
tr.ilce_2 = "Kurtalan";
tr.nufus_2 = "10607";

console.log(tr);
console.log(sehirler);

//document.write(sehirler.filter(s => s.ad == "Van")[0].ilceler.map(i => i.ad).join("<br>"));