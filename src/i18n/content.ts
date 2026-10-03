// All copy for the site, one object per language.
// English is served at "/", Kazakh at "/kk/", Russian at "/ru/".
// "/" sends visitors to the version matching their system language (see Base.astro).

export const LANGS = ['en', 'kk', 'ru'] as const;
export type Lang = (typeof LANGS)[number];

export const CONTACT = {
  phoneDisplay: '+7 706 610 16 20',
  phoneE164: '+77066101620',
  whatsapp: '77066101620',
  email: 'aya@dinobooks.kz',
  instagram: 'https://www.instagram.com/dinobooks.kz/',
  instagramHandle: '@dinobooks.kz',
};

export const SCHOOLS = ['Haileybury', 'Spectrum', 'Galaxy', 'Farabi', 'KIS', 'BIL', 'Quantum'];

export const PUBLISHERS = [
  'Oxford University Press',
  'Cambridge University Press',
  'Pearson',
  'Macmillan',
  'Usborne',
  'Penguin Readers',
];

type Step = { owner: 'school' | 'us'; title: string; text: string };
type Point = { title: string; text: string };
type Faq = { q: string; a: string };

export type Content = {
  htmlLang: string;
  path: string;
  langShort: string;
  langName: string;
  ogLocale: string;
  meta: { title: string; description: string };
  nav: { schools: string; parents: string; faq: string; contact: string; language: string };
  hero: { title: string; lead: string; cta: string; orEmail: string; cta2: string; shelf: string };
  clients: { title: string; text: string; more: string };
  schools: {
    title: string;
    lead: string;
    stepsTitle: string;
    owners: { school: string; us: string };
    steps: Step[];
    whyTitle: string;
    why: Point[];
    supplyTitle: string;
    supply: string[];
  };
  parents: {
    title: string;
    lead: string;
    listTitle: string;
    list: string[];
    instagram: string;
    whatsapp: string;
    wholesale: string;
  };
  faq: { title: string; items: Faq[] };
  contact: {
    title: string;
    lead: string;
    whatsappHint: string;
    emailHint: string;
    instagramHint: string;
    city: string;
  };
  footer: { line: string };
  wa: { school: string; parent: string; general: string };
  emailSubject: string;
};

const ru: Content = {
  htmlLang: 'ru',
  path: '/ru/',
  langShort: 'Рус',
  langName: 'Русский',
  ogLocale: 'ru_KZ',
  meta: {
    title: 'Dinobooks: книги на английском для школ и детей в Казахстане',
    description:
      'Поставляем международным школам Казахстана книги Oxford, Cambridge, Pearson, Macmillan и других международных издательств. Таможню и доставку до школы берём на себя. Детские книги на английском от 0+ в Алматы.',
  },
  nav: { schools: 'Школам', parents: 'Родителям', faq: 'Вопросы', contact: 'Контакты', language: 'Язык сайта' },
  hero: {
    title: 'Книги на английском для школ и детей',
    lead:
      'Привозим в Казахстан книги международных издательств: учебники и ридеры для международных школ, книжки с картинками и первые книги для чтения для детей. Таможня и доставка на нас, как и все риски в пути.',
    cta: 'Отправить список книг',
    orEmail: 'или на почту',
    cta2: 'Книги для детей',
    shelf: 'Издательства, книги которых мы привозим',
  },
  clients: {
    title: 'Школы, которые у нас заказывают',
    text: 'Мы поставляли книги почти всем международным школам Казахстана. Среди них:',
    more: 'и другие',
  },
  schools: {
    title: 'Вы присылаете список. Мы привозим книги.',
    lead:
      'Покупка книг за рубежом означает валютные платежи, экспедиторов, таможенных брокеров и коробки, которые могут прийти с опозданием или повреждёнными. Всё это мы берём на себя. Школа работает с одним поставщиком в Казахстане и получает книги у своих дверей.',
    stepsTitle: 'Как проходит заказ',
    owners: { school: 'Школа', us: 'Dinobooks' },
    steps: [
      { owner: 'school', title: 'Присылаете список', text: 'Названия, ISBN, если есть, и количество. Подойдёт Excel, PDF или фото списка.' },
      { owner: 'us', title: 'Получаете расчёт', text: 'Проверяем наличие и присылаем цену по каждой позиции и срок поставки. Вы решаете, прежде чем мы что-либо закажем.' },
      { owner: 'us', title: 'Заказ и доставка', text: 'Заказываем книги у издательств и везём их в Казахстан.' },
      { owner: 'us', title: 'Таможня', text: 'Растаможиваем груз и оформляем все документы.' },
      { owner: 'school', title: 'Получаете книги', text: 'Привозим коробки в школу. Если чего-то не хватает или что-то повреждено, заменяем за свой счёт.' },
    ],
    whyTitle: 'Почему школам так проще',
    why: [
      { title: 'Один поставщик в Казахстане', text: 'Договор с казахстанской компанией и оплата в тенге. Никаких валютных переводов.' },
      { title: 'Риски на нас', text: 'Пока книги не доехали до школы, задержки, повреждения и потери остаются нашей заботой.' },
      { title: 'Все издательства в одной поставке', text: 'Oxford, Cambridge, Pearson, Macmillan и другие приходят вместе, а не отдельным заказом у каждого.' },
    ],
    supplyTitle: 'Что заказывают школы',
    supply: [
      'Учебники и рабочие тетради',
      'Книги для учителя',
      'Ридеры по уровням (graded readers)',
      'Художественная и познавательная литература для библиотеки',
    ],
  },
  parents: {
    title: 'Книги для вашего ребёнка',
    lead:
      'Книги на английском для детей от 0+. Напишите нам возраст ребёнка и уровень английского, и мы подскажем, что почитать.',
    listTitle: 'Что у нас есть',
    list: [
      'Книжки-картонки и книжки с картинками для самых маленьких',
      'Первые книги для чтения и ридеры по уровням, в том числе Penguin Readers',
      'Книги с заданиями, раскраски и тетради Kumon',
      'Исламские книги для детей',
    ],
    instagram: 'Смотреть книги в Instagram',
    whatsapp: 'Спросить в WhatsApp',
    wholesale: 'Нужны книги оптом для детского сада, языкового центра или магазина? В Алматы продаём и оптом.',
  },
  faq: {
    title: 'Вопросы',
    items: [
      {
        q: 'Что нужно, чтобы получить расчёт?',
        a: 'Список названий с количеством. ISBN помогает найти точное издание, но если его нет, хватит названия и автора. Формат любой: Excel, PDF, Word или фото.',
      },
      {
        q: 'Можете найти конкретное издание или книгу другого издательства?',
        a: 'Пришлите название или ISBN. Проверим, можем ли достать книгу, и до заказа сообщим цену и срок.',
      },
      {
        q: 'Кто отвечает, если книги придут повреждёнными или потеряются?',
        a: 'Мы. Пока книги не в школе, риск на нас. Если что-то пришло повреждённым или чего-то не хватает, заменим за свой счёт.',
      },
      {
        q: 'Можно ли родителям купить одну-две книги?',
        a: 'Да. Напишите нам в Instagram или WhatsApp возраст ребёнка и уровень английского, и мы поможем выбрать.',
      },
      {
        q: 'С какими издательствами вы работаете?',
        a: 'Oxford University Press, Cambridge University Press, Pearson, Macmillan, Usborne, Penguin Readers и другие. Если нужно другое издательство, спросите.',
      },
    ],
  },
  contact: {
    title: 'Пришлите список книг',
    lead: 'Для начала хватит названий и количества. В ответ пришлём цену и срок поставки.',
    whatsappHint: 'Файл со списком можно отправить прямо в чат',
    emailHint: 'Удобно для длинных списков и документов',
    instagramHint: 'Детские книги и новости',
    city: 'Алматы, Казахстан',
  },
  footer: { line: 'Книги на английском для школ и детей в Казахстане' },
  wa: {
    school: 'Здравствуйте! Мы из школы, хотим получить расчёт на книги.',
    parent: 'Здравствуйте! Хочу подобрать книги на английском для ребёнка.',
    general: 'Здравствуйте! У меня вопрос о книгах.',
  },
  emailSubject: 'Список книг для расчёта',
};

const kk: Content = {
  htmlLang: 'kk',
  path: '/kk/',
  langShort: 'Қаз',
  langName: 'Қазақша',
  ogLocale: 'kk_KZ',
  meta: {
    title: 'Dinobooks: мектептер мен балаларға ағылшынша кітаптар',
    description:
      'Қазақстанның халықаралық мектептеріне Oxford, Cambridge, Pearson, Macmillan және басқа халықаралық баспалардың кітаптарын жеткіземіз. Кеденді және мектепке дейін жеткізуді өзімізге аламыз. Алматыда 0+ жастағы балаларға арналған ағылшынша кітаптар.',
  },
  nav: { schools: 'Мектептерге', parents: 'Ата-аналарға', faq: 'Сұрақтар', contact: 'Байланыс', language: 'Сайт тілі' },
  hero: {
    title: 'Мектептер мен балаларға ағылшынша кітаптар',
    lead:
      'Қазақстанға халықаралық баспалардың кітаптарын әкелеміз: халықаралық мектептерге оқулықтар мен оқу кітаптарын, балаларға суретті кітаптар мен алғашқы оқу кітаптарын. Кеден мен жеткізу, сондай-ақ жолдағы барлық тәуекел біздің мойнымызда.',
    cta: 'Кітаптар тізімін жіберу',
    orEmail: 'немесе поштаға',
    cta2: 'Балаларға арналған кітаптар',
    shelf: 'Кітаптарын біз әкелетін баспалар',
  },
  clients: {
    title: 'Бізден тапсырыс беретін мектептер',
    text: 'Біз Қазақстандағы халықаралық мектептердің барлығына дерлік кітап жеткіздік. Олардың ішінде:',
    more: 'және басқалар',
  },
  schools: {
    title: 'Сіз тізім жібересіз. Біз кітаптарды жеткіземіз.',
    lead:
      'Шетелден кітап сатып алу валюталық төлемдерді, экспедиторларды, кеден брокерлерін және кешігіп немесе зақымданып келуі мүмкін қораптарды білдіреді. Мұның бәрін біз өз мойнымызға аламыз. Мектеп Қазақстандағы бір жеткізушімен жұмыс істейді және кітаптарды өз есігінің алдында қабылдайды.',
    stepsTitle: 'Тапсырыс қалай орындалады',
    owners: { school: 'Мектеп', us: 'Dinobooks' },
    steps: [
      { owner: 'school', title: 'Тізім жібересіз', text: 'Кітап атаулары, бар болса ISBN және саны. Excel, PDF немесе тізімнің фотосы да жарайды.' },
      { owner: 'us', title: 'Баға есебін аласыз', text: 'Кітаптардың бар-жоғын тексеріп, әр кітаптың бағасы мен жеткізу мерзімін жібереміз. Тапсырыс бермес бұрын шешімді өзіңіз қабылдайсыз.' },
      { owner: 'us', title: 'Тапсырыс және тасымал', text: 'Баспаларға тапсырыс беріп, кітаптарды Қазақстанға жеткіземіз.' },
      { owner: 'us', title: 'Кеден', text: 'Жүкті кедендік ресімдеуден өткізіп, барлық құжаттарды дайындаймыз.' },
      { owner: 'school', title: 'Кітаптарды қабылдайсыз', text: 'Қораптарды мектепке әкелеміз. Бірдеңе жетпесе немесе зақымданса, өз есебімізден ауыстырамыз.' },
    ],
    whyTitle: 'Мектептерге неге ыңғайлы',
    why: [
      { title: 'Қазақстандағы бір жеткізуші', text: 'Қазақстандық компаниямен келісімшарт және теңгемен төлем. Валюталық аударымдар жоқ.' },
      { title: 'Тәуекел бізде', text: 'Кітаптар мектепке жеткенше кешігу, зақымдану және жоғалу біздің жауапкершілігімізде.' },
      { title: 'Барлық баспа бір жеткізілімде', text: 'Oxford, Cambridge, Pearson, Macmillan және басқалары әрқайсысына бөлек тапсырыспен емес, бірге келеді.' },
    ],
    supplyTitle: 'Мектептер не тапсырыс береді',
    supply: [
      'Оқулықтар мен жұмыс дәптерлері',
      'Мұғалімге арналған кітаптар',
      'Деңгей бойынша оқу кітаптары (graded readers)',
      'Кітапханаға арналған көркем және танымдық әдебиет',
    ],
  },
  parents: {
    title: 'Балаңызға арналған кітаптар',
    lead:
      '0+ жастағы балаларға арналған ағылшынша кітаптар. Баланың жасы мен ағылшын тілі деңгейін жазыңыз, біз не оқуға болатынын ұсынамыз.',
    listTitle: 'Бізде не бар',
    list: [
      'Ең кішкентайларға арналған картон кітаптар мен суретті кітаптар',
      'Алғашқы оқу кітаптары және деңгей бойынша ридерлер, соның ішінде Penguin Readers',
      'Тапсырмалары бар кітаптар, бояу кітаптары және Kumon дәптерлері',
      'Балаларға арналған исламдық кітаптар',
    ],
    instagram: 'Instagram-да кітаптарды көру',
    whatsapp: 'WhatsApp-та сұрау',
    wholesale: 'Балабақшаға, тіл орталығына немесе дүкенге көп кітап керек пе? Алматыда көтерме сауда да бар.',
  },
  faq: {
    title: 'Сұрақтар',
    items: [
      {
        q: 'Баға есебін алу үшін не керек?',
        a: 'Саны көрсетілген кітап атауларының тізімі. ISBN нақты басылымды табуға көмектеседі, бірақ ол болмаса, атауы мен авторы жеткілікті. Кез келген формат: Excel, PDF, Word немесе фото.',
      },
      {
        q: 'Белгілі бір басылымды немесе басқа баспаның кітабын таба аласыздар ма?',
        a: 'Атауын немесе ISBN-ін жіберіңіз. Кітапты әкеле алатынымызды тексеріп, тапсырыс бермес бұрын бағасы мен мерзімін хабарлаймыз.',
      },
      {
        q: 'Кітаптар зақымданып келсе немесе жоғалса, кім жауап береді?',
        a: 'Біз. Кітаптар мектепке жеткенше тәуекел бізде. Бірдеңе зақымданып келсе немесе жетпесе, өз есебімізден ауыстырамыз.',
      },
      {
        q: 'Ата-аналар бір-екі кітап сатып ала ала ма?',
        a: 'Иә. Instagram немесе WhatsApp арқылы баланың жасы мен ағылшын тілі деңгейін жазыңыз, таңдауға көмектесеміз.',
      },
      {
        q: 'Қандай баспалармен жұмыс істейсіздер?',
        a: 'Oxford University Press, Cambridge University Press, Pearson, Macmillan, Usborne, Penguin Readers және басқалары. Басқа баспа керек болса, сұраңыз.',
      },
    ],
  },
  contact: {
    title: 'Кітаптар тізімін жіберіңіз',
    lead: 'Бастау үшін атаулары мен саны жеткілікті. Жауап ретінде бағасы мен жеткізу мерзімін жібереміз.',
    whatsappHint: 'Тізім файлын тікелей чатқа жіберуге болады',
    emailHint: 'Ұзын тізімдер мен құжаттарға ыңғайлы',
    instagramHint: 'Балалар кітаптары және жаңалықтар',
    city: 'Алматы, Қазақстан',
  },
  footer: { line: 'Қазақстандағы мектептер мен балаларға ағылшынша кітаптар' },
  wa: {
    school: 'Сәлеметсіз бе! Біз мектептенбіз, кітаптарға баға есебін алғымыз келеді.',
    parent: 'Сәлеметсіз бе! Балама ағылшынша кітап таңдағым келеді.',
    general: 'Сәлеметсіз бе! Кітаптар туралы сұрағым бар.',
  },
  emailSubject: 'Баға есебіне арналған кітаптар тізімі',
};

const en: Content = {
  htmlLang: 'en',
  path: '/',
  langShort: 'Eng',
  langName: 'English',
  ogLocale: 'en_US',
  meta: {
    title: 'Dinobooks: English books for schools and children in Kazakhstan',
    description:
      'We supply international schools in Kazakhstan with books from Oxford, Cambridge, Pearson, Macmillan and other international publishers, and handle customs and delivery to the school. English children’s books from 0+ in Almaty.',
  },
  nav: { schools: 'For schools', parents: 'For parents', faq: 'Questions', contact: 'Contacts', language: 'Site language' },
  hero: {
    title: 'English books for schools and children',
    lead:
      'We bring books from international publishers to Kazakhstan: coursebooks and readers for international schools, picture books and first readers for children at home. Customs and delivery are on us, and so is every risk on the way.',
    cta: 'Send a book list',
    orEmail: 'or by email to',
    cta2: 'Books for children',
    shelf: 'Publishers we bring to Kazakhstan',
  },
  clients: {
    title: 'Schools that order from us',
    text: 'We have supplied almost every international school in Kazakhstan. Among them:',
    more: 'and others',
  },
  schools: {
    title: 'You send a list. We deliver the books.',
    lead:
      'Buying books from abroad means foreign payments, freight forwarders, customs brokers, and boxes that can arrive late or damaged. We take all of that off the school. You work with one supplier in Kazakhstan, and the books arrive at your door.',
    stepsTitle: 'How an order works',
    owners: { school: 'Your school', us: 'Dinobooks' },
    steps: [
      { owner: 'school', title: 'Send the list', text: 'Titles, ISBNs if you have them, and quantities. An Excel file, a PDF or a photo of the list all work.' },
      { owner: 'us', title: 'Get a quote', text: 'We check availability and send a price for each title and a delivery date. You decide before anything is ordered.' },
      { owner: 'us', title: 'Ordering and shipping', text: 'We order from the publishers and ship the books to Kazakhstan.' },
      { owner: 'us', title: 'Customs', text: 'We clear the shipment through customs and handle all the paperwork.' },
      { owner: 'school', title: 'Receive the books', text: 'We bring the boxes to your school. If anything is missing or damaged, we replace it at our cost.' },
    ],
    whyTitle: 'Why it is easier for schools',
    why: [
      { title: 'One supplier in Kazakhstan', text: 'A contract with a Kazakhstan company and payment in tenge. No foreign transfers.' },
      { title: 'The risk is ours', text: 'Until the books reach your school, delays, damage and losses are our problem.' },
      { title: 'Every publisher in one delivery', text: 'Oxford, Cambridge, Pearson, Macmillan and others arrive together, not as a separate order with each.' },
    ],
    supplyTitle: 'What schools order',
    supply: [
      'Coursebooks and workbooks',
      'Teacher’s books',
      'Graded readers',
      'Fiction and non-fiction for the library',
    ],
  },
  parents: {
    title: 'Books for your child',
    lead:
      'English books for children from 0+. Tell us your child’s age and level of English, and we’ll suggest what to read.',
    listTitle: 'What we have',
    list: [
      'Board books and picture books for the youngest',
      'First readers and graded readers, including Penguin Readers',
      'Activity books, colouring books and Kumon workbooks',
      'Islamic books for children',
    ],
    instagram: 'See the books on Instagram',
    whatsapp: 'Ask on WhatsApp',
    wholesale: 'Need books in bulk for a kindergarten, a language centre or a shop? We also sell wholesale in Almaty.',
  },
  faq: {
    title: 'Questions',
    items: [
      {
        q: 'What do you need from us to prepare a quote?',
        a: 'A list of titles with quantities. ISBNs help us find the exact edition, but if you don’t have them, titles and authors are enough. Any format works: Excel, PDF, Word or a photo.',
      },
      {
        q: 'Can you get a specific edition, or a book from another publisher?',
        a: 'Send us the title or ISBN. We’ll check whether we can get it and tell you the price and delivery date before you order.',
      },
      {
        q: 'Who is responsible if books arrive damaged or go missing?',
        a: 'We are. The risk is ours until the books are at your school. If something arrives damaged or short, we replace it at our cost.',
      },
      {
        q: 'Can parents buy just one or two books?',
        a: 'Yes. Message us on Instagram or WhatsApp with your child’s age and level of English, and we’ll help you choose.',
      },
      {
        q: 'Which publishers do you work with?',
        a: 'Oxford University Press, Cambridge University Press, Pearson, Macmillan, Usborne, Penguin Readers and others. If you need a different publisher, ask us.',
      },
    ],
  },
  contact: {
    title: 'Send us your book list',
    lead: 'Titles and quantities are enough to start. We’ll reply with prices and a delivery date.',
    whatsappHint: 'You can attach the list file right in the chat',
    emailHint: 'Good for long lists and documents',
    instagramHint: 'Children’s books and news',
    city: 'Almaty, Kazakhstan',
  },
  footer: { line: 'English books for schools and children in Kazakhstan' },
  wa: {
    school: 'Hello! We’re a school and would like a quote for books.',
    parent: 'Hello! I’d like to choose English books for my child.',
    general: 'Hello! I have a question about books.',
  },
  emailSubject: 'Book list for a quote',
};

export const content: Record<Lang, Content> = { ru, kk, en };

export const waLink = (text: string) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
export const mailLink = (subject: string) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;
