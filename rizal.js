let barang = [
	{ nama: "Kemeja Pria", stock: 10, harga: 120000 },
	{ nama: "Celana Jeans Pria", stock: 5, harga: 200000 },
	{ nama: "Sepatu Air Jordan Pria", stock: 3, harga: 2000000 },
	{ nama: "Sepatu Yeezy Pria", stock: 5, harga: 4000000 },
];

let listbarang = "";
barang.forEach((element, index) => {
	listbarang +=
		index +
		1 +
		". " +
		barang.nama +
		", Stok:" +
		barang.stock +
		", Harga @ Rp." +
		barang.harga +
		"\n";
});
let keranjang = [];
let menuawal = prompt(`
		      1. List Barang
		      2. Keranjang
		      3. Exit`);

if (menuawal == 1) {
	prompt(listbarang);
} else if (menuawal == 2) {
} else if (menuawal == 3) {
	console.log("Terima Kasih Sudah Berbelanja");
} else {
	console.log("Menu Tidak Ditemukan");
}
