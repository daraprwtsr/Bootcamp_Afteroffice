function penjumlahan(a, b) {
    return a + b;
  }
  
  function pengurangan(a, b) {
    return a - b;
  }
  
  function perkalian(a, b) {
    return a * b;
  }
  
  function pembagian(a, b) {
    if (b === 0) {
      return "Tidak bisa dibagi dengan nol";
    }
    return a / b;
  }
  
  const operasi = prompt(
    "Pilih operasi:\n1. Penjumlahan\n2. Pengurangan\n3. Perkalian\n4. Pembagian"
  );
  
  const angka1 = parseFloat(prompt("Masukkan angka ke 1:"));
  const angka2 = parseFloat(prompt("Masukkan angka ke 2:"));
  
  let hasil;
  let namaOperasi;
  
  switch (operasi) {
    case "1":
      hasil = penjumlahan(angka1, angka2);
      namaOperasi = "Penjumlahan";
      break;
    case "2":
      hasil = pengurangan(angka1, angka2);
      namaOperasi = "Pengurangan";
      break;
    case "3":
      hasil = perkalian(angka1, angka2);
      namaOperasi = "Perkalian";
      break;
    case "4":
      hasil = pembagian(angka1, angka2);
      namaOperasi = "Pembagian";
      break;
    default:
      hasil = "Operasi tidak valid";
      namaOperasi = "Tidak diketahui";
  }
  
  alert(
    `Operasi : ${namaOperasi}\nAngka 1 : ${angka1}\nAngka 2 : ${angka2}\nHasil  : ${hasil}`
  );
  