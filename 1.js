let n = 10; // jumlah bilangan Fibonacci yang ingin ditampilkan
let a = 0, b = 1, c;

console.log("Deret Fibonacci: ");

for(let i = 1; i <= n; i++) {
    console.log(a);

    c = a + b;
    a = b;
    b = c;
}
