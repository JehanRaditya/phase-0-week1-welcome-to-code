// <!-- ## Soal 2 -->

// <!-- ```js -->
// Kamu akan diberikan sebuah tanggal dalam tiga variabel,
// yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal.
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus
// kamu proses adalah menjadi 1 Mei 1945.
// // Gunakan switch case untuk kasus ini!

// Contoh:
// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

// //code switch case kamu disini
let tanggal = 12;
let tahun = 2001;
let monthNumber = 2;
let monthName;

switch (monthNumber) {
  case 1:
    monthName = "Januari";
    break;
  case 2:
    monthName = "Februari";
    break;
  case 3:
    monthName = "Maret";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "Mei";
    break;
  case 6:
    monthName = "Juni";
    break;
  case 7:
    monthName = "Juli";
    break;
  case 8:
    monthName = "Agustus";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "Oktober";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "Desember";
    break;
  default:
    console.log("Mana ada bulan segitu kocak!!");
}
console.log(tanggal + "-" + monthName + "-" + tahun);
