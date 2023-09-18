const arr = [];

for (let y = 0; y < 10; y++) {
    arr[y] = [];
    for (let x = 0; x < 10; x++) {
        arr[y][x] = "X";
    };
};
arr[5][8] = "A";
for (let n = 0; n < 10; n++) {
    arr[2][n] = "N";
}
for (let m = 0; m < 10; m++) {
    if (m != 2) arr[m][7] = "A";
}

//7 satırın hepsini a
console.table(arr);