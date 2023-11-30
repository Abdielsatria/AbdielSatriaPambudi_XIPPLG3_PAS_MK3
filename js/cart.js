// Seleksi elemen dengan kelas "cart-items"
const CartItems = document.querySelector(".cart-items");

// Inisialisasi total belanja di keranjang
let cartTotal = 0;

// Fungsi untuk menampilkan item-item di keranjang
function displayCartItems() {
  // Mendapatkan item dari penyimpanan lokal
  const items = JSON.parse(localStorage.getItem("cart"));

  // Iterasi melalui setiap item dan membuat elemen HTML untuk ditambahkan ke keranjang
  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
      <p class="cart_id">${item.id}</p>
      <p class="cart_title">${item.title}</p>
      <img src="${item.image}" alt="${item.title}" class="cart_img" />
      <p class="cart_price">${item.price}</p>
      <p class="cart_delete">Delete</p>
    `;

    // Menambahkan elemen item ke dalam elemen dengan kelas "cart-items"
    CartItems.appendChild(cartItem);
  });
}

// Memanggil fungsi untuk menampilkan item-item saat halaman dimuat
displayCartItems();
