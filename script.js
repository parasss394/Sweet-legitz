
/* TAHUN OTOMATIS DI FOOTER */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* MENU HAMBURGER */
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Tutup menu setelah salah satu link dipilih
  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/* CAROUSEL BANNER */
const slides = [
  "images/banner1.png",
  "images/banner2.png",
  "images/banner3.png"
];

const heroImage = document.getElementById("hero-image");
const dots = document.querySelectorAll(".hero-dot");
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  if (!heroImage || dots.length === 0) return;

  currentSlide = index;
  heroImage.src = slides[currentSlide];
  heroImage.alt = "Banner Sweet Legitz " + (currentSlide + 1);

  dots.forEach(function (dot, dotIndex) {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

function startCarousel() {
  clearInterval(slideTimer);

  if (heroImage && dots.length > 0) {
    slideTimer = setInterval(function () {
      showSlide((currentSlide + 1) % slides.length);
    }, 5000);
  }
}

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    showSlide(Number(dot.dataset.slide));
    startCarousel();
  });
});

startCarousel();

/* PILIH VARIAN DARI KARTU PRODUK */
const productLinks = document.querySelectorAll("[data-product]");
const messageInput = document.getElementById("message");

productLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (messageInput) {
      messageInput.value = link.dataset.product + " - ";
    }
  });
});

/* FORM PEMESANAN WHATSAPP */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// GANTI NOMOR INI DENGAN NOMOR WHATSAPP TOKO YANG BENAR.
// Gunakan kode negara 62 tanpa tanda +, spasi, atau angka 0 di depan.
const nomorWhatsAppToko = "6282230744667";

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !alamat || !message) {
      formStatus.textContent = "Mohon lengkapi semua data terlebih dahulu.";
      return;
    }

    if (!/^\d{10,15}$/.test(nomorWhatsAppToko)) {
      formStatus.textContent =
        "Nomor WhatsApp toko belum benar. Silakan periksa kode di script.js.";
      return;
    }

    const teksPesan =
      "Halo Sweet Legitz, saya ingin memesan Bika Ambon.\n\n" +
      "Nama: " + name + "\n" +
      "Alamat: " + alamat + "\n" +
      "Pesanan: " + message;

    const linkWhatsApp =
      "https://wa.me/" +
      nomorWhatsAppToko +
      "?text=" +
      encodeURIComponent(teksPesan);

    window.open(linkWhatsApp, "_blank");
    formStatus.textContent =
      "Silakan lanjutkan dan kirim pesanan melalui WhatsApp.";
  });
}
