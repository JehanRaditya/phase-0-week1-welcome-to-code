// # Conditional Statement | Part 1

// oke kawan-kawan, disini kalian akan belajar yang namanya Conditional Statement, Logical Operator, dan Comparisons Operator.

// singkatnya sih disini belajar if else, namun nanti ada soal yang dimana kamu harus belajar cara membaca dokumentasi dan cara belajar mandiri, yaitu soal bertema Switch hehe.

// yak Buka aja W3school dan kerjakan soal soal berikut

// ## Soal 1:
// ``js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
// //mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
/*
buat 2 variabel terlebih dahulun yaitu variabel nama dan peran
jika nama tersebut tidak diisi maka nanti akan menampilkan output "nama wajib diisi" , setelah nama diisi nanti output yang akan muncul adalah memilih peran
isi peran jika nanti akan ada pilihannya "pilih peranmu untuk memulai game" terdapat 3 pilihan perannya yaitu ksatria,tabib, dan penyihir
sesuai dengan peran masing masing ksatria,tabib, dan penyihir akan di diberi responnya masing masing
disini menggunakan backtik ` supaya bisa menuliskan string di dalam baris lainnya
*/
// isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "Ucok",
  peran = "Ksatria";

if (nama == "") {
  console.log("Nama Wajib Diisi");
} else if (peran == "") {
  console.log("Pilih Peranmu untuk memulai game: ");
} else if (peran == "Ksatria") {
  console.log(`halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
  console.log(
    `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
  );
} else {
  console.log(
    `tapi kayaknya bro ${nama} jadi bot aja ya, peran yang kamu pilih ga ada`
  );
}
