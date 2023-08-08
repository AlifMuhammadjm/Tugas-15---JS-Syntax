// Buat 3 buah variable
let variablePertama = 100;
let variableKedua = "saya belajar javascript";
let variableKetiga = 50; // bisa mengganti nilai ini jika ada masalah

// Jumlahkan variable pertama dan kedua
let hasilPenjumlahan = variablePertama + variableKedua;

// Memeriksa hasil penjumlahan adalah NaN (Not-a-Number)
if (isNaN(hasilPenjumlahan)) {
    // Jika hasil penjumlahan bukan angka, ganti dengan nilai dari variable ketiga
    hasilPenjumlahan = variablePertama + variableKetiga;
}

// Tampilkan hasil
console.log("Hasil penjumlahan:", hasilPenjumlahan);
