// Navigasi mobile
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Tutup menu setelah salah satu link navigasi dipilih
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Dialog detail produk
const productDialog = document.getElementById("productDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogDescription = document.getElementById("dialogDescription");
const dialogClose = document.getElementById("dialogClose");
const dialogOk = document.getElementById("dialogOk");

document.querySelectorAll(".detail-button").forEach((button) => {
  button.addEventListener("click", () => {
    dialogTitle.textContent = button.dataset.product;
    dialogDescription.textContent = button.dataset.description;
    productDialog.showModal();
  });
});

function closeProductDialog() {
  productDialog.close();
}

dialogClose.addEventListener("click", closeProductDialog);
dialogOk.addEventListener("click", closeProductDialog);

// Klik area gelap di luar dialog untuk menutupnya
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) closeProductDialog();
});
