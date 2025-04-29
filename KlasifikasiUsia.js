function kategoriUsia(usia) {
    if (usia >= 0 && usia <= 12) {
      return "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
      return "Remaja";
    } else if (usia >= 18 && usia <= 59) {
      return "Dewasa";
    } else if (usia >= 60) {
      return "Lansia";
    } else {
      return "Tidak valid";
    }
  }
  
  let anak = 0, remaja = 0, dewasa = 0, lansia = 0;
  
  const jumlahOrang = parseInt(prompt("Masukkan jumlah orang:"));
  
  for (let i = 1; i <= jumlahOrang; i++) {
    const inputUsia = parseInt(prompt(`Masukkan usia orang ke-${i}:`));
    const kategori = kategoriUsia(inputUsia);
  
    switch (kategori) {
      case "Anak-anak":
        anak++;
        break;
      case "Remaja":
        remaja++;
        break;
      case "Dewasa":
        dewasa++;
        break;
      case "Lansia":
        lansia++;
        break;
      default:
        alert(`Usia tidak valid: ${inputUsia}`);
    }
  }
  
  alert(
    `Hasil Klasifikasi Usia:\n` +
    `Anak-anak : ${anak}\n` +
    `Remaja    : ${remaja}\n` +
    `Dewasa    : ${dewasa}\n` +
    `Lansia    : ${lansia}`
  );
  