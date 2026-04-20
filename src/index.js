function klimalarSoniniHisobla(n) {
    if (n <= 2) {
        return n;
    }
    let klimalar = new Array(n + 1).fill(0);
    klimalar[1] = 1;
    klimalar[2] = 2;
    for (let i = 3; i <= n; i++) {
        klimalar[i] = klimalar[i - 1] + klimalar[i - 2];
    }
    return klimalar[n];
}

console.log(klimalarSoniniHisobla(4)); // 5
console.log(klimalarSoniniHisobla(5)); // 8
console.log(klimalarSoniniHisobla(6)); // 13
