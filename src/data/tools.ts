export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  rating: number;
  isFree: boolean;
  freeDetails: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'Все', icon: '🌐', color: 'from-gray-500 to-gray-700' },
  { id: 'text', name: 'Текст и чат', icon: '💬', color: 'from-blue-500 to-blue-700' },
  { id: 'image', name: 'Изображения', icon: '🎨', color: 'from-purple-500 to-purple-700' },
  { id: 'code', name: 'Код', icon: '💻', color: 'from-green-500 to-green-700' },
  { id: 'audio', name: 'Аудио и музыка', icon: '🎵', color: 'from-pink-500 to-pink-700' },
  { id: 'video', name: 'Видео', icon: '🎬', color: 'from-red-500 to-red-700' },
  { id: 'education', name: 'Образование', icon: '📚', color: 'from-yellow-500 to-yellow-700' },
  { id: 'productivity', name: 'Продуктивность', icon: '⚡', color: 'from-indigo-500 to-indigo-700' },
  { id: 'design', name: 'Дизайн', icon: '✨', color: 'from-teal-500 to-teal-700' },
];

export const tools: AITool[] = [
  // Текст и чат
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Мощный чат-бот от OpenAI. Отвечает на вопросы, пишет тексты, анализирует данные и помогает с задачами.',
    category: 'text',
    url: 'https://chat.openai.com',
    tags: ['чат', 'текст', 'анализ'],
    rating: 4.8,
    isFree: true,
    freeDetails: 'Бесплатная версия GPT-3.5'
  },
  {
    id: '2',
    name: 'Claude',
    description: 'AI-ассистент от Anthropic. Отлично справляется с длинными текстами, анализом и творческими задачами.',
    category: 'text',
    url: 'https://claude.ai',
    tags: ['чат', 'анализ', 'письмо'],
    rating: 4.7,
    isFree: true,
    freeDetails: 'Бесплатный тариф с ограничениями'
  },
  {
    id: '3',
    name: 'Gemini',
    description: 'Мультимодальный AI от Google. Понимает текст, изображения и работает с Google-сервисами.',
    category: 'text',
    url: 'https://gemini.google.com',
    tags: ['чат', 'мультимодальный', 'Google'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Полностью бесплатный доступ'
  },
  {
    id: '4',
    name: 'Perplexity',
    description: 'AI-поисковик, который находит информацию в интернете и даёт ответы с источниками.',
    category: 'text',
    url: 'https://perplexity.ai',
    tags: ['поиск', 'исследование', 'источники'],
    rating: 4.6,
    isFree: true,
    freeDetails: 'Бесплатные запросы ежедневно'
  },
  {
    id: '5',
    name: 'DeepL Write',
    description: 'AI-инструмент для улучшения текстов, исправления грамматики и стилистики на разных языках.',
    category: 'text',
    url: 'https://www.deepl.com/write',
    tags: ['письмо', 'грамматика', 'перевод'],
    rating: 4.4,
    isFree: true,
    freeDetails: 'Бесплатный лимит символов'
  },
  // Изображения
  {
    id: '6',
    name: 'Bing Image Creator',
    description: 'Генератор изображений от Microsoft на базе DALL-E 3. Создаёт картинки по текстовому описанию.',
    category: 'image',
    url: 'https://www.bing.com/images/create',
    tags: ['генерация', 'DALL-E', 'арт'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Бесплатные кредиты ежедневно'
  },
  {
    id: '7',
    name: 'Leonardo AI',
    description: 'Платформа для генерации изображений с множеством стилей. Отлично подходит для игр и концепт-арта.',
    category: 'image',
    url: 'https://leonardo.ai',
    tags: ['генерация', 'арт', 'игры'],
    rating: 4.6,
    isFree: true,
    freeDetails: '150 токенов в день бесплатно'
  },
  {
    id: '8',
    name: 'Ideogram',
    description: 'AI-генератор изображений с отличным пониманием текста на картинках. Создаёт изображения с надписями.',
    category: 'image',
    url: 'https://ideogram.ai',
    tags: ['генерация', 'текст', 'дизайн'],
    rating: 4.4,
    isFree: true,
    freeDetails: 'Бесплатные генерации ежедневно'
  },
  {
    id: '9',
    name: 'Playground AI',
    description: 'Бесплатный генератор изображений с удобным интерфейсом и множеством моделей.',
    category: 'image',
    url: 'https://playgroundai.com',
    tags: ['генерация', 'редактирование', 'модели'],
    rating: 4.3,
    isFree: true,
    freeDetails: '500 изображений в день'
  },
  {
    id: '10',
    name: 'Stable Diffusion (Hugging Face)',
    description: 'Открытая модель генерации изображений. Доступна через Hugging Face Spaces бесплатно.',
    category: 'image',
    url: 'https://huggingface.co/spaces/stabilityai/stable-diffusion',
    tags: ['open-source', 'генерация', 'модели'],
    rating: 4.2,
    isFree: true,
    freeDetails: 'Полностью бесплатно'
  },
  // Код
  {
    id: '11',
    name: 'GitHub Copilot Free',
    description: 'AI-помощник для программирования от GitHub. Подсказывает код прямо в редакторе.',
    category: 'code',
    url: 'https://github.com/features/copilot',
    tags: ['кодинг', 'подсказки', 'IDE'],
    rating: 4.7,
    isFree: true,
    freeDetails: 'Бесплатно для студентов и OSS'
  },
  {
    id: '12',
    name: 'Codeium',
    description: 'Бесплатная альтернатива Copilot. Автодополнение кода в 70+ языках программирования.',
    category: 'code',
    url: 'https://codeium.com',
    tags: ['автодополнение', 'бесплатно', 'IDE'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Полностью бесплатно'
  },
  {
    id: '13',
    name: 'Tabnine',
    description: 'AI-автодополнение кода, обученное на открытых репозиториях. Работает локально.',
    category: 'code',
    url: 'https://www.tabnine.com',
    tags: ['автодополнение', 'локально', 'приватность'],
    rating: 4.3,
    isFree: true,
    freeDetails: 'Базовая версия бесплатна'
  },
  {
    id: '14',
    name: 'Replit AI',
    description: 'Онлайн IDE с встроенным AI-ассистентом. Пишет, объясняет и отлаживает код.',
    category: 'code',
    url: 'https://replit.com',
    tags: ['IDE', 'онлайн', 'отладка'],
    rating: 4.4,
    isFree: true,
    freeDetails: 'Бесплатный план с AI-функциями'
  },
  // Аудио и музыка
  {
    id: '15',
    name: 'Suno AI',
    description: 'Генератор музыки и песен по текстовому описанию. Создаёт полноценные треки с вокалом.',
    category: 'audio',
    url: 'https://suno.ai',
    tags: ['музыка', 'вокал', 'генерация'],
    rating: 4.6,
    isFree: true,
    freeDetails: '5 песен в день бесплатно'
  },
  {
    id: '16',
    name: 'ElevenLabs',
    description: 'Реалистичная генерация речи и клонирование голоса. Поддерживает множество языков.',
    category: 'audio',
    url: 'https://elevenlabs.io',
    tags: ['озвучка', 'голос', 'TTS'],
    rating: 4.7,
    isFree: true,
    freeDetails: '10 000 символов в месяц'
  },
  {
    id: '17',
    name: 'Mubert',
    description: 'AI-генератор фоновой музыки. Создаёт бесконечные музыкальные потоки для любого настроения.',
    category: 'audio',
    url: 'https://mubert.com',
    tags: ['музыка', 'фон', 'стриминг'],
    rating: 4.2,
    isFree: true,
    freeDetails: 'Бесплатное прослушивание'
  },
  {
    id: '18',
    name: 'Adobe Podcast',
    description: 'AI-инструмент для улучшения качества аудио. Убирает шумы и делает голос студийным.',
    category: 'audio',
    url: 'https://podcast.adobe.com/enhance',
    tags: ['аудио', 'шумоподавление', 'подкасты'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Бесплатно с аккаунтом Adobe'
  },
  // Видео
  {
    id: '19',
    name: 'Runway ML',
    description: 'Платформа для генерации и редактирования видео с помощью AI. Генерация видео из текста и изображений.',
    category: 'video',
    url: 'https://runwayml.com',
    tags: ['видео', 'генерация', 'редактирование'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Бесплатные кредиты при регистрации'
  },
  {
    id: '20',
    name: 'Pika',
    description: 'Генератор коротких видео из текста и изображений. Создаёт анимации и видеоклипы.',
    category: 'video',
    url: 'https://pika.art',
    tags: ['видео', 'анимация', 'генерация'],
    rating: 4.3,
    isFree: true,
    freeDetails: 'Бесплатные генерации ежедневно'
  },
  {
    id: '21',
    name: 'HeyGen',
    description: 'Создание видео с AI-аватарами. Озвучивает текст реалистичным голосом с синхронизацией губ.',
    category: 'video',
    url: 'https://www.heygen.com',
    tags: ['аватары', 'видео', 'презентации'],
    rating: 4.4,
    isFree: true,
    freeDetails: '1 минута видео бесплатно'
  },
  // Образование
  {
    id: '22',
    name: 'Khan Academy (Khanmigo)',
    description: 'AI-репетитор от Khan Academy. Помогает с математикой, наукой и другими предметами.',
    category: 'education',
    url: 'https://www.khanacademy.org/khan-labs',
    tags: ['обучение', 'репетитор', 'математика'],
    rating: 4.6,
    isFree: true,
    freeDetails: 'Полностью бесплатно'
  },
  {
    id: '23',
    name: 'Duolingo Max',
    description: 'AI-функции для изучения языков. Объясняет ошибки и ведёт диалоги на изучаемом языке.',
    category: 'education',
    url: 'https://www.duolingo.com',
    tags: ['языки', 'обучение', 'практика'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Базовое обучение бесплатно'
  },
  {
    id: '24',
    name: 'Quizlet Q-Chat',
    description: 'AI-помощник для подготовки к экзаменам. Создаёт карточки и тесты из ваших материалов.',
    category: 'education',
    url: 'https://quizlet.com',
    tags: ['карточки', 'экзамены', 'запоминание'],
    rating: 4.3,
    isFree: true,
    freeDetails: 'Базовые функции бесплатны'
  },
  // Продуктивность
  {
    id: '25',
    name: 'Notion AI',
    description: 'AI-ассистент внутри Notion. Пишет, суммирует, переводит и организует информацию.',
    category: 'productivity',
    url: 'https://www.notion.so',
    tags: ['заметки', 'письмо', 'организация'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'Пробный период AI-функций'
  },
  {
    id: '26',
    name: 'Otter.ai',
    description: 'AI-транскрибация аудио и видео. Превращает встречи и записи в текст с таймкодами.',
    category: 'productivity',
    url: 'https://otter.ai',
    tags: ['транскрибация', 'встречи', 'субтитры'],
    rating: 4.4,
    isFree: true,
    freeDetails: '300 минут в месяц'
  },
  {
    id: '27',
    name: 'Gamma',
    description: 'AI-генератор презентаций. Создаёт красивые слайды из текстового описания за секунды.',
    category: 'productivity',
    url: 'https://gamma.app',
    tags: ['презентации', 'слайды', 'дизайн'],
    rating: 4.5,
    isFree: true,
    freeDetails: '10 AI-презентаций бесплатно'
  },
  // Дизайн
  {
    id: '28',
    name: 'Canva AI',
    description: 'AI-инструменты для дизайна: генерация изображений, удаление фона, Magic Resize и другие.',
    category: 'design',
    url: 'https://www.canva.com',
    tags: ['дизайн', 'шаблоны', 'редактирование'],
    rating: 4.6,
    isFree: true,
    freeDetails: 'Базовые AI-функции бесплатны'
  },
  {
    id: '29',
    name: 'Figma AI',
    description: 'AI-функции в Figma: генерация макетов, автозаполнение контентом, умное изменение размеров.',
    category: 'design',
    url: 'https://www.figma.com',
    tags: ['UI/UX', 'макеты', 'прототипы'],
    rating: 4.5,
    isFree: true,
    freeDetails: 'AI-функции в бесплатном плане'
  },
  {
    id: '30',
    name: 'Remove.bg',
    description: 'AI-удаление фона с изображений за 5 секунд. Работает с фото любого качества.',
    category: 'design',
    url: 'https://www.remove.bg',
    tags: ['фон', 'обработка', 'фото'],
    rating: 4.4,
    isFree: true,
    freeDetails: 'Бесплатные превью'
  },
  {
    id: '31',
    name: 'Uizard',
    description: 'AI-генератор UI-дизайнов. Превращает скриншоты и описания в редактируемые макеты.',
    category: 'design',
    url: 'https://uizard.io',
    tags: ['UI', 'прототипы', 'wireframes'],
    rating: 4.2,
    isFree: true,
    freeDetails: 'Бесплатный план с ограничениями'
  },
];
