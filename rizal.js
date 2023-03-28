
let barang = [
    { nama: "Kemeja Pria", stock: 10, harga: 120000 },
    { nama: "Celana Jeans Pria", stock: 5, harga: 200000 },
    { nama: "Sepatu Air Jordan Pria", stock: 3, harga: 2000000 },
    { nama: "Sepatu Yeezy Pria", stock: 5, harga: 4000000 },
];

class AddtoCart {
    constructor(nama, qty, harga) {
        this.nama = nama;
        this.qty = qty;
        this.harga = harga;
    }
}

let listbarang = "";
barang.forEach((element, index) => {
    listbarang +=
        index +
        1 +
        ". " +
        element.nama +
        ", Stok: " +
        element.stock +
        ", Harga @ Rp. " +
        element.harga.toLocaleString("id-ID") +
        "\n";
});
let keranjang = [];

let menuawal = 0;
while (menuawal != 3) {
    let menuawal = prompt(`
      1. List Barang
      2. Keranjang
      3. Exit`);

    if (menuawal == 1) {
        let selectitem = parseInt(prompt(listbarang));
        if (selectitem <= 4) {
            let addqty = parseInt(
                prompt(`Nama Barang: ${barang[selectitem - 1].nama}
    Harga: Rp.${barang[selectitem - 1].harga.toLocaleString("id-ID")}
    Stok Tersedia: ${barang[selectitem - 1].stock}

      Beli berapa?`)
            );

            if (addqty < barang[selectitem - 1].stock) {
                keranjang.push(
                    new AddtoCart(
                        barang[selectitem - 1].nama,
                        addqty,
                        barang[selectitem - 1].harga
                    )
                );
            } else {
                prompt("Qty Melebihi Stok.");
            }
        } else {
            console.log("Masukkan 1-4");
        }
    } else if (menuawal == 2) {
        console.log(keranjang);
    } else if (menuawal == 3) {
        console.log("Terima Kasih Sudah Berbelanja");
    } else {
        console.log("Menu Tidak Ditemukan");
    }
}