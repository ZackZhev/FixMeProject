// Services Data
const services = [
  {
    icon: "M14.7 6.3a4 4 0 0 0-5.66 5.66l-6.34 6.34 3 3 6.34-6.34a4 4 0 0 0 5.66-5.66l-3 3-3-3 3-3z",
    title: "Ходовая часть",
    desc: "Рычаги, амортизаторы, ШРУС и др."
  },
  {
    icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a7.97 7.97 0 0 0 .1-2l2-1-2-4-2 1a8 8 0 0 0-1.7-1l-.3-2h-5l-.3 2a8 8 0 0 0-1.7 1l-2-1-2 4 2 1a7.97 7.97 0 0 0 .1 2l-2 1 2 4 2-1c.52.39 1.1.72 1.7 1l.3 2h5l.3-2c.6-.28 1.18-.61 1.7-1l2 1 2-4-2-1z",
    title: "Двигатель",
    desc: "Диагностика, ремонт, прошивки"
  },
  {
    icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a7.97 7.97 0 0 0 .1-2l2-1-2-4-2 1a8 8 0 0 0-1.7-1l-.3-2h-5l-.3 2a8 8 0 0 0-1.7 1l-2-1-2 4 2 1a7.97 7.97 0 0 0 .1 2l-2 1 2 4 2-1c.52.39 1.1.72 1.7 1l.3 2h5l.3-2c.6-.28 1.18-.61 1.7-1l2 1 2-4-2-1z",
    title: "Электрика",
    desc: "Сканер, проводка, блоки"
  },
  {
    icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a7.97 7.97 0 0 0 .1-2l2-1-2-4-2 1a8 8 0 0 0-1.7-1l-.3-2h-5l-.3 2a8 8 0 0 0-1.7 1l-2-1-2 4 2 1a7.97 7.97 0 0 0 .1 2l-2 1 2 4 2-1c.52.39 1.1.72 1.7 1l.3 2h5l.3-2c.6-.28 1.18-.61 1.7-1l2 1 2-4-2-1z",
    title: "Кузов/малярные",
    desc: "Геометрия, покраска, полировка"
  },
  {
    icon: "M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z",
    title: "Гарантия",
    desc: "Прозрачность и контроль"
  },
  {
    icon: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    title: "Сроки",
    desc: "Работаем по дедлайнам"
  }
];

// Pricing Data
const pricing = [
  {
    name: "Базовый",
    price: "от 4 900с",
    features: ["Диагностика 25 пунктов", "Фото/видео отчёт", "Смета и согласование"],
    cta: "Заказать диагностику",
    popular: false
  },
  {
    name: "Стандарт",
    price: "от 14 900с",
    features: ["Диагностика 50 пунктов", "Ходовая + электрика", "Подменный авто по запросу"],
    cta: "Оформить под ключ",
    popular: true
  },
  {
    name: "Премиум",
    price: "Индивидуально",
    features: ["Кузов/малярные/ДВС", "Полный цикл под ключ", "Персональный менеджер"],
    cta: "Связаться",
    popular: false
  }
];

// Testimonials Data
const testimonials = [
  {
    quote: "FixME забрали авто и вернули как новое. Прозрачно и вовремя!",
    name: "Айзада",
    role: "Kia Sportage, Бишкек"
  },
  {
    quote: "Кузовные и ходовая — под ключ. Фотоотчёты и смета.",
    name: "Рустам",
    role: "BMW X5, Кара-Балта"
  },
  {
    quote: "После покраски машина лучше салонной. Отличная команда!",
    name: "Нурбек",
    role: "Lexus ES, Ош"
  }
];

// Before/After Gallery Data
const gallery = [
  {
    before: "https://images.unsplash.com/photo-1518306727298-4c17e1bf6943?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop"
  },
  {
    before: "https://images.unsplash.com/photo-1593941707874-ef25b8b90d06?q=80&w=1600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop"
  }
];

// Render Services
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  const parent = container.parentElement;
  container.remove();

  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.08]';
    card.innerHTML = `
      <div class="p-6 pb-2">
        <div class="flex items-center gap-3">
          <div class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-gray-900">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden>
              <path d="${service.icon}" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold tracking-tight text-white">${service.title}</h3>
        </div>
      </div>
      <div class="p-6 -mt-3 text-white/70">${service.desc}</div>
    `;
    parent.appendChild(card);
  });
}

// Render Pricing
function renderPricing() {
  const container = document.getElementById('pricing-container');
  if (!container) return;

  const parent = container.parentElement;
  container.remove();

  pricing.forEach(plan => {
    const card = document.createElement('div');
    card.className = `rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${plan.popular ? 'ring-2 ring-orange-500' : ''}`;

    const featuresHTML = plan.features.map(feature => `
      <li class="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-orange-500" aria-hidden>
          <path d="M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 15.9 6.8 18l1-5.8-4.3-4.1 5.9-.9L12 2z" />
        </svg>
        ${feature}
      </li>
    `).join('');

    card.innerHTML = `
      <div class="p-6 pb-2">
        <h3 class="text-lg font-semibold tracking-tight text-white flex items-center justify-between">
          ${plan.name}
          ${plan.popular ? '<span class="rounded-full bg-orange-600/90 px-2 py-0.5 text-xs font-semibold">Популярно</span>' : ''}
        </h3>
      </div>
      <div class="p-6">
        <div class="text-3xl font-bold text-white">${plan.price}</div>
        <ul class="mt-4 space-y-2 text-white/75">
          ${featuresHTML}
        </ul>
        <button class="mt-6 w-full bg-orange-600 hover:bg-orange-500 transition inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 rounded-xl px-4 py-2">${plan.cta}</button>
      </div>
    `;
    parent.appendChild(card);
  });
}

// Render Testimonials Carousel
let currentTestimonialIndex = 0;

function renderTestimonials() {
  const container = document.getElementById('testimonials-carousel');
  if (!container) return;

  const testimonial = testimonials[currentTestimonialIndex];

  container.innerHTML = `
    <div class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white">
      <div class="p-8">
        <p class="mb-6 text-lg leading-relaxed text-white/90">"${testimonial.quote}"</p>
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500"></div>
          <div>
            <div class="font-semibold">${testimonial.name}</div>
            <div class="text-xs text-white/60">${testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 flex justify-center gap-2">
      ${testimonials.map((_, i) => `
        <button
          data-index="${i}"
          aria-label="Go to slide ${i + 1}"
          class="testimonial-dot h-1.5 w-6 rounded-full transition-all ${i === currentTestimonialIndex ? 'bg-orange-500' : 'bg-white/30 hover:bg-white/50'}"
        ></button>
      `).join('')}
    </div>
  `;

  // Add click handlers to dots
  container.querySelectorAll('.testimonial-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentTestimonialIndex = parseInt(e.target.dataset.index);
      renderTestimonials();
    });
  });
}

// Auto-rotate testimonials
function startTestimonialsRotation() {
  setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    renderTestimonials();
  }, 4000);
}

// Render Before/After Gallery
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  const parent = container.parentElement;
  container.remove();

  gallery.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'relative w-full overflow-hidden rounded-2xl shadow-xl';
    wrapper.style.height = '360px';
    wrapper.innerHTML = `
      <img src="${item.before}" alt="Before" class="absolute inset-0 h-full w-full object-cover" />
      <img src="${item.after}" alt="After" class="absolute inset-0 h-full w-full object-cover before-after-img" style="clip-path: inset(0 0 0 50%);" />
      <div class="absolute inset-y-0 before-after-divider" style="left: 50%;">
        <div class="absolute left-[-1px] h-full w-0.5 bg-white/70"></div>
        <div class="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow">Drag</div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        class="before-after-slider absolute bottom-3 left-1/2 w-2/3 -translate-x-1/2 cursor-ew-resize"
        style="accent-color: #ff6a00;"
        data-index="${index}"
      />
    `;
    parent.appendChild(wrapper);
  });

  // Add slider event listeners
  document.querySelectorAll('.before-after-slider').forEach(slider => {
    const wrapper = slider.parentElement;
    const img = wrapper.querySelector('.before-after-img');
    const divider = wrapper.querySelector('.before-after-divider');

    slider.addEventListener('input', (e) => {
      const value = e.target.value;
      img.style.clipPath = `inset(0 0 0 ${value}%)`;
      divider.style.left = `${value}%`;
    });
  });
}

// Handle contact form submission
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show success message
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Отправлено!';
    button.disabled = true;
    button.classList.remove('bg-orange-600', 'hover:bg-orange-500');
    button.classList.add('bg-green-600');

    // Reset form after 2 seconds
    setTimeout(() => {
      form.reset();
      button.textContent = originalText;
      button.disabled = false;
      button.classList.add('bg-orange-600', 'hover:bg-orange-500');
      button.classList.remove('bg-green-600');
    }, 2000);
  });
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything
export function initApp() {
  renderServices();
  renderPricing();
  renderTestimonials();
  renderGallery();
  initContactForm();
  setCurrentYear();
  initSmoothScroll();
  startTestimonialsRotation();
}
