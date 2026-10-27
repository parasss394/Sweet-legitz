// ================================================
// BAGIAN 0: TAHUN OTOMATIS DI FOOTER
// ================================================

// new Date().getFullYear() artinya "ambil tahun sekarang dari komputer/HP pengunjung"
// misal sekarang 2026, maka nilainya = 2026
// textContent = ... artinya "tulis angka itu ke dalam elemen HTML ber-id 'year'"
// Jadi teks "© 2026 Sweet Legitz" di footer akan otomatis update sendiri tiap tahun,
// tanpa perlu kamu edit manual setiap kali tahun berganti
document.getElementById('year').textContent = new Date().getFullYear();


// ================================================
// BAGIAN 1: MENU HAMBURGER (tombol ☰ khusus tampilan HP)
// ================================================

// Langkah 1: ambil elemen HTML yang kita butuhkan, simpan ke variabel
// document.getElementById("xxx") artinya "cari elemen HTML yang id-nya xxx"
const menuBtn = document.getElementById("menu-btn"); // tombol ☰
const navMenu = document.getElementById("nav-menu"); // daftar menu (Beranda, Tentang Kami, dst)

// Langkah 2: pasang "pendengar klik" pada tombol menu
// Artinya: "kalau tombol ini diklik, jalankan kode di dalam kurung kurawal { }"
menuBtn.addEventListener("click", function () {

  // classList.toggle("active") artinya:
  // - kalau menu belum kelihatan (belum punya class "active") -> tampilkan
  // - kalau menu sudah kelihatan (sudah punya class "active")  -> sembunyikan
  navMenu.classList.toggle("active");

});


// Langkah 3: tutup menu otomatis saat salah satu link menu diklik
// (supaya nyaman dipakai di HP, menu tidak perlu ditutup manual)

// querySelectorAll(".nav-menu a") artinya:
// "ambil SEMUA tag <a> yang ada di dalam elemen class nav-menu"
// hasilnya berupa daftar/list berisi 5 link (Beranda, Tentang Kami, dst)
const navLinks = document.querySelectorAll(".nav-menu a");

// Karena hasilnya berupa DAFTAR (bukan satu elemen saja),
// kita perlu ulangi kode di bawah untuk SETIAP link satu per satu.
// forEach artinya "lakukan hal berikut untuk setiap item dalam daftar"
navLinks.forEach(function (satuLink) {

  // pasang juga "pendengar klik" di setiap link menu
  satuLink.addEventListener("click", function () {

    // classList.remove("active") artinya: hapus class "active"
    // jadi menu langsung tertutup lagi setelah link diklik
    navMenu.classList.remove("active");

  });

});



const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// Nomor WhatsApp pemilik Sweet Legitz
const nomorWhatsAppToko = "6282230744667";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !alamat || !message) {
    formStatus.style.color = "green";
    formStatus.textContent = "Mohon lengkapi semua data.";
    return;
  }

  const teksPesan =
    "Halo Sweet Legitz, saya ingin memesan Bika Ambon.\n\n" +
    "Nama: " + name + "\n" +
    "Alamat Pengiriman: " + alamat + "\n" +
    "Pesanan: " + message;

  const linkWhatsApp =
    "https://wa.me/" + nomorWhatsAppToko +
    "?text=" + encodeURIComponent(teksPesan);

  window.open(linkWhatsApp, "_blank");

  formStatus.style.color = "green";
  formStatus.textContent = "Pemesanan akan langsung diarahkan ke WA CS Sweet Legitz.";
});


const banner = document.querySelectorAll(".banner");
let index = 0;

setInterval(function () {
    banner[index].classList.remove("aktif");

    index = (index + 1) % banner.length;

    banner[index].classList.add("aktif");
}, 3000);
