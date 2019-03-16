function proses() {
    var nilai1 = parseInt(document.getElementById("nilai1").value);
    var nilai2 = parseInt(document.getElementById("nilai2").value);

    document.getElementById("hasilTambah").innerHTML = (nilai1 + nilai2);
    document.getElementById("hasilKurang").innerHTML = (nilai1 - nilai2);
    document.getElementById("hasilKali").innerHTML = (nilai1 * nilai2);
    document.getElementById("hasilBagi").innerHTML = (nilai1 / nilai2);
}