// ====================================================
// ДАННЫЕ МАГАЗИНА — редактируй здесь чтобы добавить товары
// ====================================================

const CATEGORIES = [
  { id: 1, name: '🥦 Овощи', slug: 'vegetables' },
  { id: 2, name: '🍎 Фрукты', slug: 'fruits' },
  { id: 3, name: '🥛 Молочное', slug: 'dairy' },
  { id: 4, name: '🍗 Мясо и птица', slug: 'meat' },
  { id: 5, name: '🥤 Напитки', slug: 'drinks' },
  { id: 6, name: '🍪 Выпечка и сладкое', slug: 'bakery' },
];

const PRODUCTS = [
  { id: 1,  category_id: 1, name: 'Помидоры черри',    description: 'Сочные черри-помидоры, 500 г', price: 149.90, stock: 35, image: 'uploads/demo-apple.svg',   active: true },
  { id: 2,  category_id: 1, name: 'Огурцы свежие',     description: 'Хрустящие огурцы, 1 кг',      price: 89.90,  stock: 48, image: 'uploads/demo-banana.svg',  active: true },
  { id: 3,  category_id: 2, name: 'Яблоки Гренни',     description: 'Яблоки зелёные, 1 кг',        price: 129.90, stock: 60, image: 'uploads/demo-apple.svg',   active: true },
  { id: 4,  category_id: 2, name: 'Бананы',            description: 'Сладкие бананы, 1 кг',        price: 79.90,  stock: 100,image: 'uploads/demo-banana.svg',  active: true },
  { id: 5,  category_id: 3, name: 'Молоко 3,2%',       description: 'Молоко пастеризованное, 1 л', price: 89.90,  stock: 80, image: 'uploads/demo-milk.svg',    active: true },
  { id: 6,  category_id: 3, name: 'Кефир 2,5%',        description: 'Кефир натуральный, 1 л',      price: 79.90,  stock: 55, image: 'uploads/demo-milk.svg',    active: true },
  { id: 7,  category_id: 4, name: 'Курица целая',      description: 'Охлаждённая курица, ~1.5 кг', price: 299.90, stock: 20, image: 'uploads/demo-chicken.svg', active: true },
  { id: 8,  category_id: 4, name: 'Куриные грудки',    description: 'Филе грудки, 1 кг',           price: 349.90, stock: 15, image: 'uploads/demo-chicken.svg', active: true },
  { id: 9,  category_id: 5, name: 'Апельсиновый сок',  description: 'Сок 100%, 1 л',               price: 119.90, stock: 45, image: 'uploads/demo-juice.svg',   active: true },
  { id: 10, category_id: 5, name: 'Вода негазированная',description:'Питьевая вода, 1,5 л',        price: 39.90,  stock: 200,image: 'uploads/demo-juice.svg',   active: true },
  { id: 11, category_id: 6, name: 'Овсяное печенье',   description: 'Домашнее печенье, 400 г',     price: 99.90,  stock: 30, image: 'uploads/demo-cookie.svg',  active: true },
  { id: 12, category_id: 6, name: 'Шоколадный торт',   description: 'Торт бисквитный, 800 г',      price: 599.90, stock: 8,  image: 'uploads/demo-cookie.svg',  active: true },
];

// ====================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ====================================================

function money(val) {
  return new Intl.NumberFormat('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(Number(val || 0)) + ' ₽';
}

function e(str) {
  const d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}

function getCategoryName(id) {
  const cat = CATEGORIES.find(c => c.id === id);
  return cat ? cat.name : '—';
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function productCard(p) {
  return `
  <article class="product-card">
    <a class="product-image-wrap" href="product.html?id=${p.id}">
      <img class="product-image" src="${e(p.image || 'uploads/placeholder.svg')}" alt="${e(p.name)}">
    </a>
    <div class="product-body">
      <div class="product-cat">${e(getCategoryName(p.category_id))}</div>
      <h3><a href="product.html?id=${p.id}">${e(p.name)}</a></h3>
      <p>${e(p.description)}</p>
      <div class="product-meta"><span>Остаток: ${p.stock} шт.</span></div>
      <div class="product-bottom">
        <strong>${money(p.price)}</strong>
        <button class="btn btn-primary small" onclick="addToCart(${p.id})">В корзину</button>
      </div>
    </div>
  </article>`;
}
