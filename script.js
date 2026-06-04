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

// ============================================================
// DOM READY — Init all modules
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initRevealAnimations();
  initMenuTabs();
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
// MENU TABS — Render menu items dynamically
// ============================================================
function initMenuTabs() {
  const tabs    = document.querySelectorAll('.menu-tab');
  const grid    = document.getElementById('menuGrid');
  if (!tabs.length || !grid) return;

  // Render items for a given category key
  function renderMenu(categoryKey) {
    const category = menuData[categoryKey];
    if (!category) return;

    // Animate out
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(14px)';

    setTimeout(() => {
      grid.innerHTML = category.items.map(item => {
        const pricesHTML = item.prices.map(p => `
          <div class="menu-price-row">
            <span class="price-label">${p.label}</span>
            <span class="price-value">${p.price}</span>
          </div>
        `).join('');

        return `
          <div class="menu-item">
            <p class="menu-item-name">${item.name}</p>
            <div class="menu-item-prices">${pricesHTML}</div>
          </div>
        `;
      }).join('');

      // Animate in
      grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
    }, 180);
  }

  // Tab click handler
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Render the selected category
      renderMenu(tab.dataset.category);
    });
  });

  // Render initial category (cakes)
  renderMenu('cakes');
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
