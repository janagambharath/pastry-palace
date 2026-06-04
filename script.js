/* ============================================================
   PASTRY PALACE — script.js
   Handles: Navbar, Mobile Menu, Reveal Animations,
            Menu Tabs + Data, Contact Form, Back-to-Top, Footer Year
   ============================================================ */

// ============================================================
// MENU DATA — easy to update, structured by category
// ============================================================
const menuData = {
  cakes: {
    label: 'Cakes',
    items: [
      { name: 'Pineapple Cake',                prices: [{ label: 'Half Kg', price: '₹390' }, { label: '1 Kg', price: '₹650' }] },
      { name: 'Black Forest Cake',             prices: [{ label: 'Half Kg', price: '₹430' }, { label: '1 Kg', price: '₹750' }] },
      { name: 'Butterscotch Cake',             prices: [{ label: 'Half Kg', price: '₹430' }, { label: '1 Kg', price: '₹750' }] },
      { name: 'Chocolate Fresh Fruit Cake',    prices: [{ label: 'Half Kg', price: '₹520' }, { label: '1 Kg', price: '₹950' }] },
      { name: 'Blueberry Cake',                prices: [{ label: 'Half Kg', price: '₹490' }] },
      { name: 'Fresh Fruit with Jelly Cake',   prices: [{ label: 'Half Kg', price: '₹480' }, { label: '1 Kg', price: '₹900' }] },
      { name: 'Fresh Fruit with Almonds Cake', prices: [{ label: 'Half Kg', price: '₹530' }, { label: '1 Kg', price: '₹950' }] },
      { name: 'Special Cake 1',                prices: [{ label: '1 Kg', price: '₹1,200' }] },
      { name: 'Special Cake 2',                prices: [{ label: '1 Kg', price: '₹1,400' }] },
    ]
  },
  pastries: {
    label: 'Pastries',
    items: [
      { name: 'Mango Pastry',             prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Chocolate Walnut Pastry',  prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Chocolate Flakes Pastry',  prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Chocolate Chips Pastry',   prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Chocolate Mousse Pastry',  prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Pineapple Pastry',         prices: [{ label: 'Per Piece', price: '₹45' }] },
      { name: 'Kiwi Pastry',              prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Fresh Fruit Pastry',       prices: [{ label: 'Per Piece', price: '₹65' }] },
      { name: 'Blueberry Pastry',         prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Black Forest Pastry',      prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Chocolate Truffle Pastry', prices: [{ label: 'Per Piece', price: '₹70' }] },
    ]
  },
  puddings: {
    label: 'Puddings & Desserts',
    items: [
      { name: 'Cream Roll',                      prices: [{ label: 'Per Piece', price: '₹35' }] },
      { name: 'Chocolate Fudge',                 prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Chocolate Eclair',                prices: [{ label: 'Per Piece', price: '₹50' }] },
      { name: 'Black Forest Pudding',            prices: [{ label: 'Per Piece', price: '₹60' }] },
      { name: 'Fruit Pudding',                   prices: [{ label: 'Per Piece', price: '₹40' }] },
      { name: 'Blueberry Pudding',               prices: [{ label: 'Per Piece', price: '₹40' }] },
      { name: 'Brownie with Chocolate Sauce',    prices: [{ label: 'Per Piece', price: '₹110' }] },
    ]
  },
  snacks: {
    label: 'Snacks',
    items: [
      { name: 'Paneer Veggie Hot Dog',     prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Chilli Paneer Hot Dog',     prices: [{ label: 'Per Piece', price: '₹80' }] },
      { name: 'Veg Sandwich',              prices: [{ label: 'Per Piece', price: '₹35' }] },
      { name: 'Veg Grill Sandwich',        prices: [{ label: 'Per Piece', price: '₹70' }] },
      { name: 'Chicken Grill Sandwich',    prices: [{ label: 'Per Piece', price: '₹85' }] },
      { name: 'Chicken Hot Dog',           prices: [{ label: 'Per Piece', price: '₹90' }] },
      { name: 'Veg Hot Dog',               prices: [{ label: 'Per Piece', price: '₹60' }] },
      { name: 'Paneer Tikka Hot Dog',      prices: [{ label: 'Per Piece', price: '₹80' }] },
      { name: 'Paneer Cutlet',             prices: [{ label: 'Per Piece', price: '₹40' }] },
      { name: 'Garlic Bread Slice',        prices: [{ label: 'Per Piece', price: '₹35' }] },
      { name: 'Butter Paneer Kulcha',      prices: [{ label: 'Per Piece', price: '₹60' }] },
      { name: 'Dhokla',                    prices: [{ label: '250g', price: '₹55' }] },
      { name: 'Khandvi',                   prices: [{ label: '250g', price: '₹60' }] },
    ]
  },
  patties: {
    label: 'Patties & Fast Food',
    items: [
      { name: 'Veg Patty',           prices: [{ label: 'Per Piece', price: '₹35' }] },
      { name: 'Mushroom Patty',      prices: [{ label: 'Per Piece', price: '₹50' }] },
      { name: 'Cheese Patty',        prices: [{ label: 'Per Piece', price: '₹40' }] },
      { name: 'Chicken Patty',       prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Kebab Patty',         prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Cheese Sandwich',     prices: [{ label: 'Per Piece', price: '₹55' }] },
      { name: 'Chicken Sandwich',    prices: [{ label: 'Per Piece', price: '₹60' }] },
      { name: 'Pasta Sandwich',      prices: [{ label: 'Per Piece', price: '₹95' }] },
      { name: 'Pizza Sandwich',      prices: [{ label: 'Per Piece', price: '₹90' }] },
      { name: 'Bread Pizza Sandwich',prices: [{ label: 'Per Piece', price: '₹90' }] },
      { name: 'Veg Bread Roll',      prices: [{ label: 'Per Piece', price: '₹50' }] },
      { name: 'Veg Spring Roll',     prices: [{ label: 'Per Piece', price: '₹45' }] },
      { name: 'Chicken Bread Roll',  prices: [{ label: 'Per Piece', price: '₹70' }] },
    ]
  },
  breads: {
    label: 'Breads',
    items: [
      { name: 'Garlic Bread',              prices: [{ label: 'Per Pack', price: '₹35' }] },
      { name: 'Cheese Bread',              prices: [{ label: 'Per Pack', price: '₹60' }] },
      { name: 'Daliya Bread',              prices: [{ label: 'Per Pack', price: '₹90' }] },
      { name: '100% Wheat Bread',          prices: [{ label: 'Per Pack', price: '₹75' }] },
      { name: 'Atta Multigrain Bread',     prices: [{ label: 'Per Pack', price: '₹60' }] },
      { name: 'Pizza Base',                prices: [{ label: 'Per Piece', price: '₹40' }] },
      { name: 'Atta Pizza Base',           prices: [{ label: 'Per Piece', price: '₹45' }] },
      { name: 'Plain Kulcha',              prices: [{ label: '5 pcs', price: '₹30' }] },
      { name: 'Onion Kulcha',              prices: [{ label: '4 pcs', price: '₹40' }] },
      { name: 'Atta Kulcha',               prices: [{ label: '4 pcs', price: '₹40' }] },
      { name: 'Soup Sticks',               prices: [{ label: 'Per Pack', price: '₹55' }] },
      { name: 'Dinner Roll',               prices: [{ label: '6 pcs', price: '₹55' }] },
      { name: 'Rusk',                      prices: [{ label: '400g', price: '₹70' }] },
      { name: 'Burger Bun',                prices: [{ label: '6 pcs', price: '₹40' }] },
      { name: 'Pav Bun',                   prices: [{ label: '6 pcs', price: '₹40' }] },
      { name: 'Atta Big Burger Bun',       prices: [{ label: '4 pcs', price: '₹50' }] },
      { name: 'Hot Dog Buns',              prices: [{ label: '6 pcs', price: '₹55' }] },
      { name: 'Special Milk Bread',        prices: [{ label: 'Big Pack', price: '₹60' }] },
    ]
  },
  drycakes: {
    label: 'Dry Cakes',
    items: [
      { name: 'Fruit Cake (With Egg)',    prices: [{ label: '300g', price: '₹120' }, { label: '500g', price: '₹200' }] },
      { name: 'Fruit Cake (Without Egg)', prices: [{ label: '400g', price: '₹200' }] },
      { name: 'Plain Vanilla Cake',       prices: [{ label: '250g', price: '₹120' }, { label: '350g', price: '₹190' }] },
      { name: 'Chocolate Cake',           prices: [{ label: '250g', price: '₹120' }, { label: '350g', price: '₹190' }] },
    ]
  },
  gifts: {
    label: 'Gift Packs',
    items: [
      { name: 'Butter Kaju Pista Gift Pack',       prices: [{ label: 'Per Pack', price: '₹410' }] },
      { name: 'Dry Fruit Cake Pack',               prices: [{ label: '500g', price: '₹320' }, { label: '800g', price: '₹450' }] },
      { name: 'Assorted Gift Pack',                prices: [{ label: 'Per Pack', price: '₹340' }] },
      { name: 'Kaju Pista Gift Pack',              prices: [{ label: 'Per Pack', price: '₹310' }] },
      { name: 'Fancy Chocolate Gift Pack',         prices: [{ label: 'Per Pack', price: '₹550' }, { label: '750g', price: '₹390' }] },
    ]
  },
  drinks: {
    label: 'Drinks',
    items: [
      { name: 'Special Kesar Badam Milk', prices: [{ label: '270ml', price: '₹60' }] },
      { name: 'Fruit Champagne',          prices: [{ label: 'Per Bottle', price: '₹375' }] },
    ]
  }
};

const whatsappNumber = "919212340001";

const orderState = {
  products: [],
  cart: [],
  filters: {
    category: 'all',
    search: '',
    sort: 'featured'
  }
};

const featuredProducts = new Set([
  'Black Forest Cake',
  'Chocolate Truffle Pastry',
  'Fresh Fruit with Almonds Cake',
  'Brownie with Chocolate Sauce',
  'Paneer Tikka Hot Dog',
  'Garlic Bread',
  'Fancy Chocolate Gift Pack',
  'Special Kesar Badam Milk'
]);

const pexelsImage = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const productImagePools = {
  cakes: [
    pexelsImage('8101695'),
    pexelsImage('18613263'),
    pexelsImage('1854652'),
    pexelsImage('2928378'),
    pexelsImage('19651067'),
    pexelsImage('8015237'),
    pexelsImage('27911708')
  ],
  pastries: [
    pexelsImage('23369274'),
    pexelsImage('23369295'),
    pexelsImage('1854652'),
    pexelsImage('2928378'),
    pexelsImage('19651067'),
    pexelsImage('6390678')
  ],
  puddings: [
    pexelsImage('13215205'),
    pexelsImage('27359377'),
    pexelsImage('6390678'),
    pexelsImage('1854652'),
    pexelsImage('10117396')
  ],
  snacks: [
    pexelsImage('12123656'),
    pexelsImage('1209029'),
    pexelsImage('18020338'),
    pexelsImage('33430556'),
    pexelsImage('15801051'),
    pexelsImage('27126839')
  ],
  patties: [
    pexelsImage('23369274'),
    pexelsImage('23369295'),
    pexelsImage('2160296'),
    pexelsImage('1209029'),
    pexelsImage('18020338'),
    pexelsImage('9406090')
  ],
  breads: [
    pexelsImage('19953736'),
    pexelsImage('9673517'),
    pexelsImage('37043987'),
    pexelsImage('27126839'),
    pexelsImage('36925848'),
    pexelsImage('2160296')
  ],
  drycakes: [
    pexelsImage('18613263'),
    pexelsImage('2928378'),
    pexelsImage('19651067'),
    pexelsImage('27911708')
  ],
  gifts: [
    pexelsImage('18060142'),
    pexelsImage('31746088'),
    pexelsImage('17517612'),
    pexelsImage('9159719'),
    pexelsImage('28769885')
  ],
  drinks: [
    pexelsImage('10117396'),
    pexelsImage('18039760'),
    pexelsImage('17379751'),
    pexelsImage('5390029'),
    pexelsImage('10754138'),
    pexelsImage('6405650')
  ]
};

const productImageRules = [
  { test: /champagne/i, image: pexelsImage('18039760') },
  { test: /gift|chocolate gift|kaju|pista|dry fruit/i, image: pexelsImage('31746088') },
  { test: /cream roll|eclair/i, image: pexelsImage('23369274') },
  { test: /burger bun|pav bun|hot dog buns/i, image: pexelsImage('9673517') },
  { test: /pizza base/i, image: pexelsImage('37043987') },
  { test: /paneer tikka/i, image: pexelsImage('33430556') },
  { test: /pineapple/i, image: pexelsImage('2928378') },
  { test: /black forest/i, image: pexelsImage('27911708') },
  { test: /butterscotch|vanilla/i, image: pexelsImage('19651067') },
  { test: /blueberry|fresh fruit|fruit/i, image: pexelsImage('18613263') },
  { test: /special cake/i, image: pexelsImage('8101695') },
  { test: /mango|kiwi|pineapple pastry/i, image: pexelsImage('2928378') },
  { test: /chocolate|truffle|walnut|chips|flakes|mousse|fudge|brownie/i, image: pexelsImage('13215205') },
  { test: /hot dog/i, image: pexelsImage('12123656') },
  { test: /sandwich/i, image: pexelsImage('1209029') },
  { test: /garlic bread|cheese bread/i, image: pexelsImage('27126839') },
  { test: /kulcha|bread roll|spring roll|patty|patties/i, image: pexelsImage('23369295') },
  { test: /dhokla|khandvi/i, image: pexelsImage('15801051') },
  { test: /wheat|multigrain|daliya|atta/i, image: pexelsImage('19953736') },
  { test: /soup sticks|dinner roll|rusk|milk bread/i, image: pexelsImage('37043987') },
  { test: /kesar|badam|milk/i, image: pexelsImage('10117396') },
];

// ============================================================
// DOM READY — Init all modules
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initRevealAnimations();
  initOrderOnline();
  initContactForm();
  initBackToTop();
  setFooterYear();
});

// ============================================================
// NAVBAR — Scroll detection
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load
}

// ============================================================
// MOBILE MENU — Hamburger toggle
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ============================================================
// REVEAL ANIMATIONS — IntersectionObserver
// ============================================================
function initRevealAnimations() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-right');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
}

// ============================================================
// ORDER ONLINE — Product catalog, cart, quick view, WhatsApp
// ============================================================
function initOrderOnline() {
  const grid = document.getElementById('orderGrid');
  if (!grid) return;

  orderState.products = buildProductCatalog();
  bindOrderControls();
  bindCartControls();
  bindQuickViewControls();
  setFloatingWhatsappLink();
  renderProducts();
  renderCart();
}

function buildProductCatalog() {
  return Object.entries(menuData).flatMap(([categoryKey, category], categoryIndex) => (
    category.items.map((item, itemIndex) => {
      const prices = item.prices.map((priceOption) => ({
        label: priceOption.label,
        amount: parsePrice(priceOption.price)
      }));
      const minPrice = Math.min(...prices.map(price => price.amount));

      return {
        id: `${slugify(categoryKey)}-${slugify(item.name)}-${itemIndex}`,
        name: item.name,
        categoryKey,
        categoryLabel: category.label,
        prices,
        minPrice,
        image: getProductImage(item.name, categoryKey, itemIndex),
        description: getProductDescription(item.name, categoryKey),
        featured: featuredProducts.has(item.name),
        featuredRank: featuredProducts.has(item.name) ? itemIndex : categoryIndex * 100 + itemIndex + 20
      };
    })
  ));
}

function bindOrderControls() {
  const search = document.getElementById('orderSearch');
  const sort = document.getElementById('orderSort');
  const filters = document.querySelectorAll('.order-filter');
  const grid = document.getElementById('orderGrid');
  const inlineCart = document.getElementById('openCartInline');
  const floatingCart = document.getElementById('floatingCart');

  search?.addEventListener('input', () => {
    orderState.filters.search = search.value.trim().toLowerCase();
    renderProducts();
  });

  sort?.addEventListener('change', () => {
    orderState.filters.sort = sort.value;
    renderProducts();
  });

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      filters.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      filter.classList.add('active');
      filter.setAttribute('aria-selected', 'true');
      orderState.filters.category = filter.dataset.category || 'all';
      renderProducts();
    });
  });

  grid?.addEventListener('click', (event) => {
    const qtyButton = event.target.closest('[data-qty-action]');
    if (qtyButton) {
      updateQuantity(qtyButton.closest('[data-product-scope]'), qtyButton.dataset.qtyAction);
      return;
    }

    const actionButton = event.target.closest('[data-order-action]');
    if (!actionButton) return;

    const productId = actionButton.dataset.productId;
    const scope = actionButton.closest('[data-product-scope]');
    const selection = getSelectionFromScope(scope, productId);
    if (!selection) return;

    if (actionButton.dataset.orderAction === 'add') {
      addToCart(selection);
      openCart();
    }

    if (actionButton.dataset.orderAction === 'order') {
      openWhatsApp(buildSingleProductMessage(selection));
    }

    if (actionButton.dataset.orderAction === 'quick') {
      openQuickView(productId);
    }
  });

  grid?.addEventListener('input', (event) => {
    if (event.target.matches('[data-quantity]')) {
      normalizeQuantityInput(event.target);
      updateScopeTotal(event.target.closest('[data-product-scope]'));
    }
  });

  grid?.addEventListener('change', (event) => {
    if (event.target.matches('[data-option-select]')) {
      updateScopeTotal(event.target.closest('[data-product-scope]'));
    }
  });

  inlineCart?.addEventListener('click', openCart);
  floatingCart?.addEventListener('click', openCart);
}

function bindCartControls() {
  const closeCart = document.getElementById('closeCart');
  const overlay = document.getElementById('cartOverlay');
  const cartItems = document.getElementById('cartItems');
  const checkout = document.getElementById('checkoutCart');

  closeCart?.addEventListener('click', closeCartDrawer);
  overlay?.addEventListener('click', closeCartDrawer);
  checkout?.addEventListener('click', () => {
    if (!orderState.cart.length) return;
    openWhatsApp(buildCartMessage());
  });

  cartItems?.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-remove-cart-item]');
    if (!removeButton) return;
    orderState.cart = orderState.cart.filter(item => item.key !== removeButton.dataset.removeCartItem);
    renderCart();
  });
}

function bindQuickViewControls() {
  const quickView = document.getElementById('quickView');
  const quickViewContent = document.getElementById('quickViewContent');
  if (!quickView || !quickViewContent) return;

  quickView.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-quick-view]')) {
      closeQuickView();
      return;
    }

    const qtyButton = event.target.closest('[data-qty-action]');
    if (qtyButton) {
      updateQuantity(qtyButton.closest('[data-product-scope]'), qtyButton.dataset.qtyAction);
      return;
    }

    const actionButton = event.target.closest('[data-order-action]');
    if (!actionButton) return;

    const productId = actionButton.dataset.productId;
    const scope = actionButton.closest('[data-product-scope]');
    const selection = getSelectionFromScope(scope, productId);
    if (!selection) return;

    if (actionButton.dataset.orderAction === 'add') {
      addToCart(selection);
      closeQuickView();
      openCart();
    }

    if (actionButton.dataset.orderAction === 'order') {
      openWhatsApp(buildSingleProductMessage(selection));
    }
  });

  quickView.addEventListener('input', (event) => {
    if (event.target.matches('[data-quantity]')) {
      normalizeQuantityInput(event.target);
      updateScopeTotal(event.target.closest('[data-product-scope]'));
    }
  });

  quickView.addEventListener('change', (event) => {
    if (event.target.matches('[data-option-select]')) {
      updateScopeTotal(event.target.closest('[data-product-scope]'));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !quickView.hidden) closeQuickView();
  });
}

function renderProducts() {
  const grid = document.getElementById('orderGrid');
  const count = document.getElementById('orderProductCount');
  if (!grid) return;

  const products = getVisibleProducts();

  if (count) {
    count.textContent = products.length === 1
      ? 'Showing 1 item'
      : `Showing ${products.length} items`;
  }

  if (!products.length) {
    grid.innerHTML = `
      <div class="order-empty">
        <h3>No treats found</h3>
        <p>Try another search or choose a different category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(renderProductCard).join('');
  attachImageFallbacks(grid);
  grid.querySelectorAll('[data-product-scope]').forEach(updateScopeTotal);
}

function getVisibleProducts() {
  const { category, search, sort } = orderState.filters;
  const filtered = orderState.products.filter((product) => {
    const matchesCategory = category === 'all' || product.categoryKey === category;
    const matchesSearch = !search || `${product.name} ${product.categoryLabel} ${product.description}`.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  return filtered.sort((a, b) => {
    if (sort === 'price-asc') return a.minPrice - b.minPrice;
    if (sort === 'price-desc') return b.minPrice - a.minPrice;
    if (sort === 'az') return a.name.localeCompare(b.name);
    return a.featuredRank - b.featuredRank;
  });
}

function renderProductCard(product) {
  return `
    <article class="order-card" data-product-scope data-product-id="${product.id}">
      <div class="order-image-frame">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy" data-product-image />
        <div class="order-image-fallback">
          <span>Pastry Palace</span>
        </div>
        ${product.featured ? '<span class="order-badge">Bestseller</span>' : ''}
      </div>
      <div class="order-card-body">
        <p class="order-category">${escapeHTML(product.categoryLabel)}</p>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="order-description">${escapeHTML(product.description)}</p>
        <div class="order-price-row">
          <span data-unit-price>${formatPrice(product.prices[0].amount)}</span>
          <small data-price-note>${escapeHTML(product.prices[0].label)}</small>
        </div>
        ${renderOptionControl(product)}
        <div class="order-card-footer">
          ${renderQuantityControl()}
          <strong class="order-line-total" data-line-total>${formatPrice(product.prices[0].amount)}</strong>
        </div>
        <div class="order-actions">
          <button class="btn btn-outline" type="button" data-order-action="add" data-product-id="${product.id}">Add To Cart</button>
          <button class="btn btn-primary" type="button" data-order-action="order" data-product-id="${product.id}">Order Now</button>
        </div>
        <button class="quick-view-trigger" type="button" data-order-action="quick" data-product-id="${product.id}">Quick View</button>
      </div>
    </article>
  `;
}

function renderOptionControl(product) {
  const shouldShowSelect = product.categoryKey === 'cakes' || product.prices.length > 1;
  if (!shouldShowSelect) return '';

  const label = product.categoryKey === 'cakes' ? 'Size' : 'Pack';
  const options = product.prices.map((price, index) => (
    `<option value="${index}">${escapeHTML(price.label)} - ${formatPrice(price.amount)}</option>`
  )).join('');

  return `
    <label class="order-option-label">
      <span>${label}</span>
      <select data-option-select>
        ${options}
      </select>
    </label>
  `;
}

function renderQuantityControl(quantity = 1) {
  return `
    <div class="quantity-control" aria-label="Quantity selector">
      <button type="button" data-qty-action="decrease" aria-label="Decrease quantity">-</button>
      <input type="number" value="${quantity}" min="1" max="99" data-quantity aria-label="Quantity" />
      <button type="button" data-qty-action="increase" aria-label="Increase quantity">+</button>
    </div>
  `;
}

function updateQuantity(scope, action) {
  if (!scope) return;
  const input = scope.querySelector('[data-quantity]');
  if (!input) return;

  const current = clampQuantity(input.value);
  input.value = action === 'increase' ? Math.min(current + 1, 99) : Math.max(current - 1, 1);
  updateScopeTotal(scope);
}

function updateScopeTotal(scope) {
  if (!scope) return;
  const product = getProductById(scope.dataset.productId);
  if (!product) return;

  const optionIndex = Number(scope.querySelector('[data-option-select]')?.value || 0);
  const quantity = clampQuantity(scope.querySelector('[data-quantity]')?.value || 1);
  const price = product.prices[optionIndex] || product.prices[0];
  const unitPrice = scope.querySelector('[data-unit-price]');
  const priceNote = scope.querySelector('[data-price-note]');
  const lineTotal = scope.querySelector('[data-line-total]');

  if (unitPrice) unitPrice.textContent = formatPrice(price.amount);
  if (priceNote) priceNote.textContent = price.label;
  if (lineTotal) lineTotal.textContent = formatPrice(price.amount * quantity);
}

function normalizeQuantityInput(input) {
  input.value = clampQuantity(input.value);
}

function getSelectionFromScope(scope, productId) {
  const product = getProductById(productId);
  if (!product || !scope) return null;

  const optionIndex = Number(scope.querySelector('[data-option-select]')?.value || 0);
  const quantity = clampQuantity(scope.querySelector('[data-quantity]')?.value || 1);
  return createSelection(product, optionIndex, quantity);
}

function createSelection(product, optionIndex, quantity) {
  const option = product.prices[optionIndex] || product.prices[0];
  const linePrice = option.amount * quantity;

  return {
    key: `${product.id}-${slugify(option.label)}`,
    productId: product.id,
    categoryKey: product.categoryKey,
    name: product.name,
    image: product.image,
    optionLabel: option.label,
    unitPrice: option.amount,
    quantity,
    linePrice
  };
}

function addToCart(selection) {
  const existing = orderState.cart.find(item => item.key === selection.key);
  if (existing) {
    existing.quantity = Math.min(existing.quantity + selection.quantity, 99);
    existing.linePrice = existing.quantity * existing.unitPrice;
  } else {
    orderState.cart.push({ ...selection });
  }
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const checkout = document.getElementById('checkoutCart');
  const floatingCount = document.getElementById('floatingCartCount');
  const inlineCount = document.getElementById('inlineCartCount');
  const count = orderState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = getCartTotal();

  if (floatingCount) floatingCount.textContent = count;
  if (inlineCount) inlineCount.textContent = count;
  if (cartTotal) cartTotal.textContent = formatPrice(total);
  if (checkout) checkout.disabled = orderState.cart.length === 0;

  if (!cartItems) return;

  if (!orderState.cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <h4>Your cart is empty</h4>
        <p>Add cakes, pastries, breads, or snacks and order through WhatsApp.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = orderState.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy" data-product-image />
        <div class="order-image-fallback"><span>Pastry Palace</span></div>
      </div>
      <div class="cart-item-info">
        <strong>${escapeHTML(item.name)}</strong>
        ${shouldShowOptionLine(item) ? `<span>${escapeHTML(item.optionLabel)}</span>` : ''}
        <span>Qty: ${item.quantity}</span>
        <b>${formatPrice(item.linePrice)}</b>
      </div>
      <button type="button" data-remove-cart-item="${item.key}" aria-label="Remove ${escapeHTML(item.name)}">Remove</button>
    </div>
  `).join('');
  attachImageFallbacks(cartItems);
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer || !overlay) return;

  overlay.hidden = false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('cart-open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (!drawer || !overlay) return;

  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.hidden = true;
  document.body.classList.remove('cart-open');
}

function openQuickView(productId) {
  const product = getProductById(productId);
  const quickView = document.getElementById('quickView');
  const content = document.getElementById('quickViewContent');
  if (!product || !quickView || !content) return;

  content.innerHTML = `
    <article class="quick-view-product" data-product-scope data-product-id="${product.id}">
      <div class="quick-view-image">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" data-product-image />
        <div class="order-image-fallback"><span>Pastry Palace</span></div>
      </div>
      <div class="quick-view-copy">
        <p class="order-category">${escapeHTML(product.categoryLabel)}</p>
        <h3 id="quickViewTitle">${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>
        <div class="order-price-row">
          <span data-unit-price>${formatPrice(product.prices[0].amount)}</span>
          <small data-price-note>${escapeHTML(product.prices[0].label)}</small>
        </div>
        ${renderOptionControl(product)}
        <div class="order-card-footer">
          ${renderQuantityControl()}
          <strong class="order-line-total" data-line-total>${formatPrice(product.prices[0].amount)}</strong>
        </div>
        <div class="order-actions">
          <button class="btn btn-outline" type="button" data-order-action="add" data-product-id="${product.id}">Add To Cart</button>
          <button class="btn btn-primary" type="button" data-order-action="order" data-product-id="${product.id}">Order Now</button>
        </div>
      </div>
    </article>
  `;

  quickView.hidden = false;
  document.body.classList.add('modal-open');
  attachImageFallbacks(content);
  updateScopeTotal(content.querySelector('[data-product-scope]'));
}

function closeQuickView() {
  const quickView = document.getElementById('quickView');
  if (!quickView) return;
  quickView.hidden = true;
  document.body.classList.remove('modal-open');
}

function buildSingleProductMessage(selection) {
  const lines = [
    'Hello Pastry Palace 👋',
    '',
    'I would like to order:',
    '',
    `Product: ${selection.name}`
  ];

  if (shouldShowOptionLine(selection)) lines.push(`Size: ${selection.optionLabel}`);

  lines.push(
    `Quantity: ${selection.quantity}`,
    '',
    `Price: ${formatPrice(selection.linePrice)}`,
    '',
    'Please confirm availability.',
    '',
    'Thank you.'
  );

  return lines.join('\n');
}

function buildCartMessage() {
  const lines = [
    'Hello Pastry Palace 👋',
    '',
    'I would like to order:',
    ''
  ];

  orderState.cart.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.name}`);
    if (shouldShowOptionLine(item)) lines.push(item.optionLabel);
    lines.push(`Qty: ${item.quantity}`);
    lines.push(formatPrice(item.linePrice));
    lines.push('');
  });

  lines.push(`Total: ${formatPrice(getCartTotal())}`);
  lines.push('');
  lines.push('Please confirm availability.');

  return lines.join('\n');
}

function openWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function setFloatingWhatsappLink() {
  const floatingWhatsapp = document.getElementById('floatingWhatsapp');
  if (!floatingWhatsapp) return;

  const message = [
    'Hello Pastry Palace 👋',
    '',
    'I would like to place an order.',
    'Please share availability.'
  ].join('\n');

  floatingWhatsapp.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getProductById(productId) {
  return orderState.products.find(product => product.id === productId);
}

function getCartTotal() {
  return orderState.cart.reduce((sum, item) => sum + item.linePrice, 0);
}

function shouldShowOptionLine(item) {
  return item.categoryKey === 'cakes' || !/^Per\s/i.test(item.optionLabel);
}

function getProductImage(name, categoryKey, itemIndex) {
  const rule = productImageRules.find(item => item.test.test(name));
  if (rule) return rule.image;

  const pool = productImagePools[categoryKey] || productImagePools.cakes;
  return pool[itemIndex % pool.length];
}

function getProductDescription(name, categoryKey) {
  if (categoryKey === 'cakes') {
    return 'Celebration-ready cake with soft sponge, rich cream, and elegant bakery finishing.';
  }
  if (categoryKey === 'pastries') {
    return 'Fresh pastry layers with smooth cream, bright flavor, and a polished boutique finish.';
  }
  if (categoryKey === 'puddings') {
    return 'A chilled dessert treat made for quick cravings and sweet after-meal moments.';
  }
  if (categoryKey === 'snacks') {
    return 'Savory bakery snack prepared fresh for tea-time, parties, and everyday bites.';
  }
  if (categoryKey === 'patties') {
    return 'Warm, flaky, and filling fast-food favorite from the Pastry Palace counter.';
  }
  if (categoryKey === 'breads') {
    return 'Daily-baked bread and buns made for fresh breakfasts, sandwiches, and family meals.';
  }
  if (categoryKey === 'drycakes') {
    return 'Tea-time dry cake with soft crumb, rich flavor, and premium bakery freshness.';
  }
  if (categoryKey === 'gifts') {
    return 'Premium gift pack for celebrations, visits, festivals, and sweet surprises.';
  }
  if (categoryKey === 'drinks') {
    return 'Refreshing beverage pairing for cakes, snacks, and celebration orders.';
  }
  return `${name} made fresh at Pastry Palace.`;
}

function attachImageFallbacks(root) {
  root.querySelectorAll('img[data-product-image]').forEach((img) => {
    const markFailed = () => img.closest('.order-image-frame, .cart-item-image, .quick-view-image')?.classList.add('image-failed');
    img.addEventListener('error', markFailed, { once: true });
    if (img.complete && img.naturalWidth === 0) markFailed();
  });
}

function parsePrice(priceText) {
  const digits = String(priceText).replace(/[^\d]/g, '');
  return Number(digits) || 0;
}

function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

function clampQuantity(value) {
  const quantity = Number.parseInt(value, 10);
  if (Number.isNaN(quantity)) return 1;
  return Math.min(Math.max(quantity, 1), 99);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

// ============================================================
// CONTACT FORM — Frontend validation + success state
// ============================================================
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.querySelector('#fname');
    const email   = form.querySelector('#femail');
    const message = form.querySelector('#fmessage');

    // Basic validation
    let isValid = true;

    [name, email, message].forEach(field => {
      if (field && !field.value.trim()) {
        field.style.borderColor = '#E24B4A';
        isValid = false;
      } else if (field) {
        field.style.borderColor = '';
      }
    });

    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#E24B4A';
      isValid = false;
    }

    if (!isValid) return;

    // Show success message
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Reset form after a short delay
    setTimeout(() => {
      form.reset();
      if (success) success.hidden = true;
    }, 4500);
  });

  // Clear error state on input
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
      field.style.borderColor = '';
    });
  });
}

// ============================================================
// BACK TO TOP — Show/hide button
// ============================================================
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================================
// FOOTER YEAR — Auto-update copyright year
// ============================================================
function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
