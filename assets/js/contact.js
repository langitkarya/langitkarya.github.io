

function sendWA() {
    var nama = document.getElementById("nama").value;
    var nowa = document.getElementById("nowa").value;
    var pesan = document.getElementById("pesan").value;

    if (nama == "") {
        alert("Nama tidak boleh kosong");
        nama.focus();
        return false;
    } else if (nowa == "") {
        alert("No HP(WhatsApp) tidak boleh kosong");
        nowa.focus();
        return false;
    } else if (pesan == ""){
        alert("Pesan tidak boleh kosong");
        pesan.focus();
        return false;
    }
    
    var name = encodeURIComponent(nama);
    var nohp = encodeURIComponent(nowa);
    var message = encodeURIComponent(pesan);

    var link = "https://wa.me/6287837732237?text=Nama:%20"+name+"%0ANo%20HP%20%28WhatssApp%29%3A%20"+nohp+"%0APesan%3A%20"+message+"";

    window.open(link, "_blank").focus();
}