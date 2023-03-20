let barang = [
  { nama: "Kemeja Pria", stock: 10, harga: 120000 },
  { nama: "Celana Jeans Pria", stock: 5, harga: 200000 },
  { nama: "Sepatu Air Jordan Pria", stock: 3, harga: 2000000 },
  { nama: "Sepatu Yeezy Pria", stock: 5, harga: 4000000 },
];

let tampilanBelanja = "";

barang.forEach((val, index) => {
  tampilanBelanja +=
    index +
    1 +
    ". " +
    val.nama +
    " Stock " +
    val.stock +
    " Rp.@" +
    val.harga.toLocaleString("id-ID") +
    "\n";
});
console.log(tampilanBelanja);
// let keranjang = [];
// let menuawal = prompt(`
//       1. Menu
//       2. Keranjang
//       3. Exit`);

// switch (menu) {
// 	case 1:
// 		break;
// 	case 2:
// 		break;
// 	case 3:
// 		console.log("Terima Kasih Sudah Berbelanja.");
// 		break;
// 	default:
// 		console.log("Menu Belum Tersedia.");
// 		break;
// }
