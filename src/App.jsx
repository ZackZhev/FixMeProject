import React, { useEffect, useMemo, useState } from "react";

/**
 * Self-contained React landing page (no external UI libs)
 * TailwindCSS classes are used for styling.
 */

const Button = ({ asChild, className = "", children, ...props }) => {
  const Cmp = asChild ? "a" : "button";
  return (
    <Cmp
      {...props}
      className={`inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-0 rounded-xl px-4 py-2 ${className}`}
    >
      {children}
    </Cmp>
  );
};

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => <div className="p-6 pb-2">{children}</div>;
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold tracking-tight text-white">{children}</h3>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`h-11 rounded-xl border border-white/10 bg-white/10 px-3 text-white placeholder:text-white/50 ${className}`}
  />
);
const Textarea = ({ className = "", ...props }) => (
  <textarea
    {...props}
    className={`rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 ${className}`}
  />
);

const Icon = ({ path, className = "h-5 w-5", stroke = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={path} />
  </svg>
);
const icons = {
  wrench: "M14.7 6.3a4 4 0 0 0-5.66 5.66l-6.34 6.34 3 3 6.34-6.34a4 4 0 0 0 5.66-5.66l-3 3-3-3 3-3z",
  cog: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a7.97 7.97 0 0 0 .1-2l2-1-2-4-2 1a8 8 0 0 0-1.7-1l-.3-2h-5l-.3 2a8 8 0 0 0-1.7 1l-2-1-2 4 2 1a7.97 7.97 0 0 0 .1 2l-2 1 2 4 2-1c.52.39 1.1.72 1.7 1l.3 2h5l.3-2c.6-.28 1.18-.61 1.7-1l2 1 2-4-2-1z",
  shield: "M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z",
  clock: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  heartmsg: "M21 11.5c0 4-5 8.5-9 8.5S3 15.5 3 11.5 6 6 9.5 6c1.3 0 2.5.5 3.5 1.3C14 6.5 15.2 6 16.5 6 20 6 21 9 21 11.5zM8 20l-4 2 1-4",
  star: "M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 15.9 6.8 18l1-5.8-4.3-4.1 5.9-.9L12 2z",
  map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3zM9 3v15M15 6v15",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3.1 18.6 18.6 0 0 1-5.7-5.7A19 19 0 0 1 2.1 5.9 2 2 0 0 1 4.1 3h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2l-1.3 1.3a14.5 14.5 0 0 0 5.7 5.7l1.3-1.3a2 2 0 0 1 2-.5 13 13 0 0 0 2.6.7 2 2 0 0 1 1.6 2z",
  mail: "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm16 0-8 7L4 6",
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 md:px-8 ${className}`}>{children}</section>
);

const Kicker = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur-md">
    <Icon path={icons.star} className="h-3.5 w-3.5" /> {children}
  </span>
);

const BeforeAfter = ({ beforeUrl, afterUrl, height = 360 }) => {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height }}>
      <img src={beforeUrl} alt="Before" className="absolute inset-0 h-full w-full object-cover" />
      <img src={afterUrl} alt="After" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 0 0 ${pos}%)` }} />
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute left-[-1px] h-full w-0.5 bg-white/70" />
        <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow">Drag</div>
      </div>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} className="absolute bottom-3 left-1/2 w-2/3 -translate-x-1/2 cursor-ew-resize [accent-color:#ff6a00]" />
    </div>
  );
};

const Testimonials = () => {
  const items = useMemo(() => [
    { quote: "FixME забрали авто и вернули как новое. Прозрачно и вовремя!", name: "Айзада", role: "Kia Sportage, Бишкек" },
    { quote: "Кузовные и ходовая — под ключ. Фотоотчёты и смета.", name: "Рустам", role: "BMW X5, Кара-Балта" },
    { quote: "После покраски машина лучше салонной. Отличная команда!", name: "Нурбек", role: "Lexus ES, Ош" },
  ], []);
  const [idx, setIdx] = useState(0);
  useEffect(() => { const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 4000); return () => clearInterval(id); }, [items.length]);
  return (
    <div className="relative">
      <Card className="text-white">
        <CardContent className="p-8">
          <p className="mb-6 text-lg leading-relaxed text-white/90">“{items[idx].quote}”</p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500" />
            <div>
              <div className="font-semibold">{items[idx].name}</div>
              <div className="text-xs text-white/60">{items[idx].role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIdx(i)} className={`h-1.5 w-6 rounded-full transition-all ${i === idx ? "bg-orange-500" : "bg-white/30 hover:bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
};

const CarIllustration = (props) => (
  <svg viewBox="0 0 512 256" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <defs>
      <linearGradient id="g" x1="0" x2="1"><stop offset="0%" stopColor="#0b1220" /><stop offset="100%" stopColor="#1f2a44" /></linearGradient>
    </defs>
    <rect width="512" height="256" fill="url(#g)" rx="16" />
    <g fill="#fff" opacity="0.9">
      <path d="M90 160h332c18 0 28-36-10-56l-66-34c-6-3-12-5-18-5H182c-7 0-13 2-19 5l-63 34c-40 20-29 56-10 56z" />
      <circle cx="160" cy="170" r="26" />
      <circle cx="360" cy="170" r="26" />
      <rect x="210" y="96" width="88" height="20" rx="8" />
    </g>
  </svg>
);

const pricing = [
  { name: "Базовый", price: "от 4 900с", features: ["Диагностика 25 пунктов", "Фото/видео отчёт", "Смета и согласование"], cta: "Заказать диагностику", popular: false },
  { name: "Стандарт", price: "от 14 900с", features: ["Диагностика 50 пунктов", "Ходовая + электрика", "Подменный авто по запросу"], cta: "Оформить под ключ", popular: true },
  { name: "Премиум", price: "Индивидуально", features: ["Кузов/малярные/ДВС", "Полный цикл под ключ", "Персональный менеджер"], cta: "Связаться", popular: false },
];

const services = [
  { icon: icons.wrench, title: "Ходовая часть", desc: "Рычаги, амортизаторы, ШРУС и др." },
  { icon: icons.cog, title: "Двигатель", desc: "Диагностика, ремонт, прошивки" },
  { icon: icons.cog, title: "Электрика", desc: "Сканер, проводка, блоки" },
  { icon: icons.cog, title: "Кузов/малярные", desc: "Геометрия, покраска, полировка" },
  { icon: icons.shield, title: "Гарантия", desc: "Прозрачность и контроль" },
  { icon: icons.clock, title: "Сроки", desc: "Работаем по дедлайнам" },
];

export default function AutoRepairLanding() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0F1A] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0F1A]/70 backdrop-blur-xl">
        <Section className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg">
              <Icon path={icons.wrench} className="h-4 w-4 text-gray-900" />
            </div>
            <span className="font-semibold tracking-wide">FixME — авто под ключ</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {[
              ["Услуги", "services"],
              ["Отзывы", "testimonials"],
              ["До/После", "gallery"],
              ["Цены", "pricing"],
              ["Контакты", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm text-white/80 transition hover:text-white">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="bg-orange-600 hover:bg-orange-500">
              <a href="#contact">Связаться</a>
            </Button>
          </div>
        </Section>
      </header>

      <div id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(1200px_600px_at_70%_20%,#1E2A44_0%,#0A0F1A_60%)]" />
        <Section className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Kicker>Ремонт и сервис премиум-уровня</Kicker>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Профессиональный сервис <span className="text-orange-500">авторемонта</span></h1>
            <p className="mt-4 max-w-xl text-white/70">Заберём авто, оформим договор, сделаем полную диагностику и ремонт. Всё под ключ — прозрачно, быстро, с гарантией.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="h-11 rounded-xl bg-orange-600 px-6 text-base hover:bg-orange-500">Рассчитать смету</Button>
              <a href="#services" className="h-11 rounded-xl border border-white/20 bg-white/5 px-6 text-base text-white hover:bg-white/10 inline-flex items-center justify-center">Смотреть услуги</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Сканер", "Фотоотчёт", "Гарантия"].map((t, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm backdrop-blur-xl">{t}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-white/10 to-white/0 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121A2A]/60 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.08),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,.06),transparent_60%)]" />
              <img alt="Modern car service garage" className="h-80 w-full object-cover md:h-[420px]" src="https://images.unsplash.com/photo-1599256630548-9f9303c04759?q=80&w=1600&auto=format&fit=crop" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                {["Подъёмник", "Механик", "Контроль"].map((label) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center text-xs backdrop-blur-sm">{label}</div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>Наши услуги</Kicker>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Всё, что нужно — в одном месте</h2>
          <p className="mt-3 text-white/70">Шесть ключевых направлений для полноценного сервиса. Прозрачная смета и отчёт по каждому шагу.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-gray-900">
                    <Icon path={s.icon} />
                  </div>
                  <CardTitle>{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="-mt-3 text-white/70">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="testimonials" className="py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <Kicker>Отзывы</Kicker>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Нас выбирают снова</h2>
            <p className="mt-3 max-w-md text-white/70">Сервис под ключ — это про доверие. Мы фиксируем каждый этап, согласуем смету и соблюдаем сроки.</p>
            <ul className="mt-6 space-y-3 text-white/75">
              <li className="flex items-center gap-2"><Icon path={icons.shield} className="h-5 w-5 text-orange-500"/> Гарантия на работы и запчасти</li>
              <li className="flex items-center gap-2"><Icon path={icons.clock} className="h-5 w-5 text-orange-500"/> Чёткие дедлайны</li>
              <li className="flex items-center gap-2"><Icon path={icons.heartmsg} className="h-5 w-5 text-orange-500"/> Личный менеджер</li>
            </ul>
          </div>
          <Testimonials />
        </div>
      </Section>

      <Section id="gallery" className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>До / После</Kicker>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Видимый результат</h2>
          <p className="mt-3 text-white/70">Свайпните слайдер и сравните результат.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <BeforeAfter beforeUrl="https://images.unsplash.com/photo-1518306727298-4c17e1bf6943?q=80&w=1600&auto=format&fit=crop" afterUrl="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop" />
          <BeforeAfter beforeUrl="https://images.unsplash.com/photo-1593941707874-ef25b8b90d06?q=80&w=1600&auto=format&fit=crop" afterUrl="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </Section>

      <Section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>Цены</Kicker>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Честно и прозрачно</h2>
          <p className="mt-3 text-white/70">Выбирайте пакет под задачу. Всё по вашему одобрению.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricing.map((p) => (
            <Card key={p.name} className={`${p.popular ? "ring-2 ring-orange-500" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {p.name}
                  {p.popular && <span className="rounded-full bg-orange-600/90 px-2 py-0.5 text-xs font-semibold">Популярно</span>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">{p.price}</div>
                <ul className="mt-4 space-y-2 text-white/75">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><Icon path={icons.star} className="h-4 w-4 text-orange-500" /> {f}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-orange-600 hover:bg-orange-500">{p.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <Kicker>Контакты</Kicker>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Расскажите, что беспокоит авто</h2>
            <p className="mt-3 max-w-md text-white/70">Оставьте заявку — менеджер свяжется, уточнит детали и предложит решение. Или звоните прямо сейчас.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div className="flex items-center gap-2"><Icon path={icons.phone} className="h-5 w-5 text-orange-500"/> <a href="tel:+996706660009" className="hover:underline">0706 660 009</a> / <a href="tel:+996554660009" className="hover:underline">0554 660 009</a></div>
              <div className="flex items-center gap-2"><Icon path={icons.mail} className="h-5 w-5 text-orange-500"/> <a href="mailto:fixme@example.com" className="hover:underline">fixme@example.com</a></div>
              <div className="flex items-center gap-2"><Icon path={icons.map} className="h-5 w-5 text-orange-500"/> Бишкек, Тоголок Молдо, 5</div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <CarIllustration className="h-40 w-full" />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Заявка на сервис</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input placeholder="Имя" />
                <Input placeholder="Телефон" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input placeholder="Марка/модель" />
                <Input placeholder="Год / объём" />
              </div>
              <Textarea rows={5} placeholder="Коротко опишите проблему" />
              <Button className="w-full bg-orange-600 hover:bg-orange-500">Отправить</Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="mt-20 border-t border-white/10 bg-[#0A0F1A] py-10">
        <Section className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-white/70">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-gray-900">
              <Icon path={icons.wrench} className="h-4 w-4 text-gray-900" />
            </div>
            <span>FixME — ремонт авто под ключ</span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="transition hover:text-white">Instagram</a>
            <a href="#" className="transition hover:text-white">Facebook</a>
            <a href="tel:+996706660009" className="transition hover:text-white">Позвонить</a>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} FixME. Все права защищены.</p>
        </Section>
      </footer>
    </div>
  );
}
