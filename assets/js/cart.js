// ====================================================
// КОРЗИНА — хранение в localStorage
// ====================================================

function getCart() {
  try { return JSON.parse(localStorage.getItem('burmalda_cart') || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('burmalda_cart', JSON.stringify(cart));
}

function cartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

function updateCartBadge() {
  document.querySelectorAll('#cartBadge, [data-cart-badge]').forEach(el => {
    el.textContent = cartCount();
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function addToCart(productId, qty = 1) {
  const product = getProduct(productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  updateCartBadge();
  showToast(`«${product.name}» добавлен в корзину`);
}

function removeFromCart(productId) {
  const cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
}

function setCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function cartTotal() {
  return getCart().reduce((s, i) => {
    const p = getProduct(i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}
