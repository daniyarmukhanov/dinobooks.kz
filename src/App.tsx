import React, { useState } from 'react';
import { Globe, CheckCircle, XCircle, BookOpen, Truck, FileCheck, ShieldCheck, ArrowRight, Mail, MapPin, Instagram, Menu, X } from 'lucide-react';

type Language = 'en' | 'ru' | 'kz';

const translations = {
  en: {
    slogan: "Your one-stop shop",
    nav: {
      services: "Services",
      efficiency: "Efficiency",
      partners: "Partners",
      contact: "Contact",
      requestQuote: "Request Quote"
    },
    hero: {
      title: "Frictionless International Procurement for Schools",
      subtitle: "Direct access to global publishers and school supplies with radical transparency.",
      cta: "Get Cost Analysis"
    },
    publishers: {
      title: "Direct Access to Global Publishers"
    },
    efficiency: {
      title: "Why Dino Education?",
      subtitle: "The true cost of direct buying vs. our transparent partnership.",
      col1: "Direct Buying",
      col2: "Dino Education",
      row1: { label: "Margin", val1: "Hidden markups up to 40%", val2: "Fixed 5% margin over publisher prices" },
      row2: { label: "Tax Compliance", val1: "Complex foreign invoices", val2: "100% compliant with 2026 Kazakhstan tax laws (16% VAT)" },
      row3: { label: "Logistics", val1: "Multiple forwarders, customs delays", val2: "Turnkey UK/US imports & door-to-door delivery" },
      row4: { label: "Certification", val1: "Self-managed local certification", val2: "Fully certified for local use" }
    },
    services: {
      title: "Our Turnkey Services",
      s1: { title: "Procurement", desc: "Direct sourcing from top global educational publishers." },
      s2: { title: "Customs Clearance", desc: "Hassle-free import handling and documentation." },
      s3: { title: "Certification", desc: "Ensuring all materials meet Kazakhstan educational standards." },
      s4: { title: "Door-to-Door Delivery", desc: "Direct delivery to your school library, fully insured." }
    },
    trust: {
      title: "Trusted by Leading Schools in Kazakhstan"
    },
    footer: {
      address: "Almaty, Al-Farabi 95",
      contact: "Contact Us",
      follow: "Follow Us"
    },
    modal: {
      title: "Request a Quote",
      subtitle: "Upload your book list and we'll get back to you with a transparent cost analysis.",
      email: "Email Address",
      phone: "Phone Number",
      file: "Book List (File)",
      submit: "Submit Request",
      success: "Your request has been sent successfully! We will contact you soon.",
      close: "Close"
    }
  },
  ru: {
    slogan: "Всё в одном месте",
    nav: {
      services: "Услуги",
      efficiency: "Эффективность",
      partners: "Партнеры",
      contact: "Контакты",
      requestQuote: "Запросить расчет"
    },
    hero: {
      title: "Беспроблемные международные закупки для школ",
      subtitle: "Прямой доступ к мировым издательствам и школьным принадлежностям с абсолютной прозрачностью.",
      cta: "Получить анализ стоимости"
    },
    publishers: {
      title: "Прямой доступ к мировым издательствам"
    },
    efficiency: {
      title: "Почему Dino Education?",
      subtitle: "Реальная стоимость самостоятельных закупок в сравнении с нашим прозрачным партнерством.",
      col1: "Самостоятельные закупки",
      col2: "Dino Education",
      row1: { label: "Наценка", val1: "Скрытые наценки до 40%", val2: "Фиксированная наценка 5% к ценам издательств" },
      row2: { label: "Налоговое соответствие", val1: "Сложные иностранные счета", val2: "100% соответствие налоговому законодательству РК 2026 года (НДС 16%)" },
      row3: { label: "Логистика", val1: "Множество экспедиторов, задержки на таможне", val2: "Импорт из Великобритании/США под ключ и доставка до двери" },
      row4: { label: "Сертификация", val1: "Самостоятельная местная сертификация", val2: "Полная сертификация для использования в РК" }
    },
    services: {
      title: "Наши услуги под ключ",
      s1: { title: "Закупки", desc: "Прямые поставки от ведущих мировых образовательных издательств." },
      s2: { title: "Таможенное оформление", desc: "Беспроблемное оформление импорта и документации." },
      s3: { title: "Сертификация", desc: "Обеспечение соответствия всех материалов образовательным стандартам Казахстана." },
      s4: { title: "Доставка до двери", desc: "Прямая доставка в школьную библиотеку с полной страховкой." }
    },
    trust: {
      title: "Нам доверяют ведущие школы Казахстана"
    },
    footer: {
      address: "Алматы, пр. Аль-Фараби, 95",
      contact: "Связаться с нами",
      follow: "Подписывайтесь"
    },
    modal: {
      title: "Запросить расчет",
      subtitle: "Загрузите список книг, и мы свяжемся с вами с прозрачным анализом стоимости.",
      email: "Email адрес",
      phone: "Номер телефона",
      file: "Список книг (Файл)",
      submit: "Отправить запрос",
      success: "Ваш запрос успешно отправлен! Мы скоро свяжемся с вами.",
      close: "Закрыть"
    }
  },
  kz: {
    slogan: "Барлығын бізден табасыз",
    nav: {
      services: "Қызметтер",
      efficiency: "Тиімділік",
      partners: "Серіктестер",
      contact: "Байланыс",
      requestQuote: "Бағаны сұрау"
    },
    hero: {
      title: "Мектептерге арналған кедергісіз халықаралық сатып алулар",
      subtitle: "Әлемдік баспаларға және мектеп құралдарына толық ашықтықпен тікелей қол жеткізу.",
      cta: "Құнын талдауды алу"
    },
    publishers: {
      title: "Әлемдік баспаларға тікелей қол жеткізу"
    },
    efficiency: {
      title: "Неліктен Dino Education?",
      subtitle: "Тікелей сатып алудың нақты құны біздің ашық серіктестігімізбен салыстырғанда.",
      col1: "Тікелей сатып алу",
      col2: "Dino Education",
      row1: { label: "Үстеме баға", val1: "40%-ға дейінгі жасырын үстеме бағалар", val2: "Баспа бағасына бекітілген 5% үстеме баға" },
      row2: { label: "Салықтық сәйкестік", val1: "Күрделі шетелдік шот-фактуралар", val2: "2026 жылғы ҚР салық заңнамасына 100% сәйкестік (16% ҚҚС)" },
      row3: { label: "Логистика", val1: "Көптеген экспедиторлар, кедендік кідірістер", val2: "Ұлыбритания/АҚШ-тан кілтке дейін импорт және есікке дейін жеткізу" },
      row4: { label: "Сертификаттау", val1: "Өздігінен жергілікті сертификаттау", val2: "ҚР-да пайдалану үшін толық сертификатталған" }
    },
    services: {
      title: "Біздің кілтке дейінгі қызметтеріміз",
      s1: { title: "Сатып алу", desc: "Жетекші әлемдік білім беру баспаларынан тікелей жеткізу." },
      s2: { title: "Кедендік ресімдеу", desc: "Импорт пен құжаттаманы кедергісіз өңдеу." },
      s3: { title: "Сертификаттау", desc: "Барлық материалдардың Қазақстанның білім беру стандарттарына сәйкестігін қамтамасыз ету." },
      s4: { title: "Есікке дейін жеткізу", desc: "Мектеп кітапханасына тікелей жеткізу, толық сақтандырылған." }
    },
    trust: {
      title: "Қазақстанның жетекші мектептері бізге сенеді"
    },
    footer: {
      address: "Алматы қ., Әл-Фараби даңғылы, 95",
      contact: "Бізбен байланыс",
      follow: "Бізге жазылыңыз"
    },
    modal: {
      title: "Бағаны сұрау",
      subtitle: "Кітаптар тізімін жүктеп салыңыз, біз сізге ашық құн талдауымен хабарласамыз.",
      email: "Email мекенжайы",
      phone: "Телефон нөмірі",
      file: "Кітаптар тізімі (Файл)",
      submit: "Сұранысты жіберу",
      success: "Сіздің сұранысыңыз сәтті жіберілді! Біз жақында хабарласамыз.",
      close: "Жабу"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[lang];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSubmitStatus('success');
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Slogan */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                  D
                </div>
                <span className="text-2xl font-bold tracking-tight"><span className="text-sky-500">Dino</span> <span className="text-amber-400">Education</span></span>
              </div>
              <span className="hidden md:inline-block text-sm font-medium text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                {t.slogan}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors">{t.nav.services}</a>
              <a href="#efficiency" className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors">{t.nav.efficiency}</a>
              <a href="#partners" className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors">{t.nav.partners}</a>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                {(['en', 'ru', 'kz'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 text-xs font-semibold uppercase rounded-md transition-all ${
                      lang === l 
                        ? 'bg-white text-sky-600 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                {t.nav.requestQuote}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                {(['en', 'ru', 'kz'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 text-xs font-semibold uppercase rounded-md transition-all ${
                      lang === l 
                        ? 'bg-white text-sky-600 shadow-sm' 
                        : 'text-slate-500'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <a href="#services" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-500 rounded-md">{t.nav.services}</a>
            <a href="#efficiency" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-500 rounded-md">{t.nav.efficiency}</a>
            <a href="#partners" onClick={toggleMenu} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-500 rounded-md">{t.nav.partners}</a>
            <button onClick={() => { toggleMenu(); setIsModalOpen(true); }} className="block w-full mt-4 px-3 py-3 text-base font-medium text-center text-white bg-slate-900 hover:bg-slate-800 rounded-md">{t.nav.requestQuote}</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-sky-500/10 blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-400/10 blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <Globe className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-sky-50 tracking-wide">{t.slogan}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl leading-tight">
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 || i === 1 ? 'text-sky-400' : ''}>{word} </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-1">
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a href="#efficiency" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-sm transition-all">
              {t.nav.efficiency}
            </a>
          </div>
        </div>
      </section>

      {/* Publishers Row */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            {t.publishers.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Publisher Logos (Placeholders using text for now, in reality these would be SVGs) */}
            <div className="text-2xl font-serif font-bold text-slate-800">OXFORD</div>
            <div className="text-2xl font-serif font-bold text-slate-800">CAMBRIDGE</div>
            <div className="text-2xl font-sans font-bold text-slate-800 tracking-tighter">Pearson</div>
            <div className="text-2xl font-serif font-bold text-slate-800 italic">MACMILLAN</div>
          </div>
        </div>
      </section>

      {/* Efficiency / Comparison Section */}
      <section id="efficiency" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.efficiency.title}</h2>
            <p className="text-lg text-slate-600">{t.efficiency.subtitle}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-3 border-b border-slate-200 bg-slate-50/50">
              <div className="p-6"></div>
              <div className="p-6 text-center border-r border-slate-200">
                <h3 className="text-xl font-bold text-slate-500">{t.efficiency.col1}</h3>
              </div>
              <div className="p-6 text-center bg-sky-50/50">
                <h3 className="text-xl font-bold text-sky-600 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-6 h-6" />
                  {t.efficiency.col2}
                </h3>
              </div>
            </div>

            {/* Table Rows */}
            {[
              { id: 'row1', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'row2', icon: <FileCheck className="w-5 h-5" /> },
              { id: 'row3', icon: <Truck className="w-5 h-5" /> },
              { id: 'row4', icon: <ShieldCheck className="w-5 h-5" /> },
            ].map((row, idx) => {
              const rowData = t.efficiency[row.id as keyof typeof t.efficiency] as any;
              return (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-3 border-b border-slate-200 md:border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                  {/* Feature Label */}
                  <div className="p-4 md:p-6 flex items-center gap-3 md:border-r border-slate-100 bg-slate-100/50 md:bg-slate-50/30">
                    <div className="w-10 h-10 rounded-full bg-white md:bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm md:shadow-none shrink-0">
                      {row.icon}
                    </div>
                    <span className="font-bold md:font-semibold text-slate-900 text-lg md:text-base">{rowData.label}</span>
                  </div>
                  
                  {/* Direct Buying */}
                  <div className="p-4 md:p-6 flex flex-col md:flex-row items-start gap-2 md:gap-3 md:border-r border-slate-100">
                    <span className="md:hidden text-xs font-bold text-slate-400 uppercase tracking-wider">{t.efficiency.col1}</span>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{rowData.val1}</span>
                    </div>
                  </div>
                  
                  {/* Dino Education */}
                  <div className="p-4 md:p-6 flex flex-col md:flex-row items-start gap-2 md:gap-3 bg-sky-50/50 md:bg-sky-50/30">
                    <span className="md:hidden text-xs font-bold text-sky-600 uppercase tracking-wider">{t.efficiency.col2}</span>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                      <span className="text-slate-900 font-medium">{rowData.val2}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 's1', icon: <BookOpen className="w-8 h-8" /> },
              { id: 's2', icon: <FileCheck className="w-8 h-8" /> },
              { id: 's3', icon: <ShieldCheck className="w-8 h-8" /> },
              { id: 's4', icon: <Truck className="w-8 h-8" /> },
            ].map((service, idx) => {
              const sData = t.services[service.id as keyof typeof t.services] as any;
              return (
                <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{sData.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{sData.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust / Partners Section */}
      <section id="partners" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.trust.title}</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            {/* Partner Logos (Placeholders) */}
            <div className="text-xl md:text-2xl font-bold tracking-tight text-center">QUANTUM<br/><span className="text-sm font-normal text-slate-400">STEM SCHOOL</span></div>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-center">FARABI<br/><span className="text-sm font-normal text-slate-400">INTERNATIONAL</span></div>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-center">KIS<br/><span className="text-sm font-normal text-slate-400">KAZAKHSTAN INT.</span></div>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-center">SILK WAY<br/><span className="text-sm font-normal text-slate-400">SCHOOL</span></div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-sky-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to optimize your procurement?</h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Contact us today for a free cost analysis and see how much your school can save with our transparent 5% margin model.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-sky-700 bg-white hover:bg-slate-50 rounded-xl shadow-xl transition-all hover:-translate-y-1">
            <Mail className="w-5 h-5 mr-2" />
            {t.nav.requestQuote}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">
            
            {/* Brand */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-sky-500 rounded-md flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <span className="text-xl font-bold tracking-tight"><span className="text-sky-500">Dino</span> <span className="text-amber-400">Education</span></span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
                B2B educational supply partner in Kazakhstan. Transparent, compliant, and reliable.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-white font-semibold mb-2">{t.footer.contact}</h4>
              <a href="mailto:info@dinobooks.kz" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Mail className="w-4 h-4" />
                info@dinobooks.kz
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.footer.address}
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <h4 className="text-white font-semibold mb-2">{t.footer.follow}</h4>
              <a href="https://instagram.com/dinobooks.kz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Instagram className="w-5 h-5" />
                @dinobooks.kz
              </a>
            </div>

          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Dino Education. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Quote Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.modal.title}</h3>
              <p className="text-slate-600 mb-6 text-sm">{t.modal.subtitle}</p>
              
              {submitStatus === 'success' ? (
                <div className="bg-sky-50 text-sky-800 p-6 rounded-xl flex flex-col items-center text-center">
                  <CheckCircle className="w-16 h-16 text-sky-500 mb-4" />
                  <p className="font-semibold text-lg">{t.modal.success}</p>
                  <button 
                    onClick={() => setIsModalOpen(false)} 
                    className="mt-6 px-8 py-3 bg-sky-600 text-white rounded-xl font-medium hover:bg-sky-700 transition-colors shadow-sm"
                  >
                    {t.modal.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.modal.email}</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                      placeholder="email@school.kz" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.modal.phone}</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white" 
                      placeholder="+7 (700) 000-0000" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.modal.file}</label>
                    <input 
                      type="file" 
                      name="file" 
                      required 
                      accept=".pdf,.xls,.xlsx,.csv,.numbers,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 focus:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200 cursor-pointer" 
                    />
                    <p className="text-xs text-slate-500 mt-2 font-medium">PDF, Excel, CSV, Numbers</p>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 flex items-start gap-2">
                      <XCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-xl font-bold shadow-lg shadow-amber-400/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center mt-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      t.modal.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
