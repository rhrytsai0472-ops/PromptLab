import { useState, useMemo } from 'react';
import { tools, categories, AITool } from './data/tools';

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < fullStars ? 'text-yellow-400' : i === fullStars && hasHalf ? 'text-yellow-400' : 'text-gray-300'}`}>
          {i < fullStars ? '★' : i === fullStars && hasHalf ? '★' : '☆'}
        </span>
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

function ToolCard({ tool }: { tool: AITool }) {
  const category = categories.find(c => c.id === tool.category);
  
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      <div className={`h-2 bg-gradient-to-r ${category?.color || 'from-gray-500 to-gray-700'}`} />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category?.icon}</span>
            <div>
              <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wide">{category?.name}</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {tool.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <StarRating rating={tool.rating} />
          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
            {tool.freeDetails}
          </span>
        </div>
        
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full text-center py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium text-sm hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Перейти →
        </a>
      </div>
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');

  const filteredTools = useMemo(() => {
    let result = tools;
    
    if (activeCategory !== 'all') {
      result = result.filter(tool => tool.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: tools.length };
    tools.forEach(tool => {
      counts[tool.category] = (counts[tool.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-lg">🤖</span>
              <span className="text-white/90 text-sm font-medium">Бесплатные AI-инструменты 2024</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Каталог бесплатных ИИ
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Более {tools.length} бесплатных AI-инструментов в {categories.length - 1} категориях. 
              Находите лучшие инструменты для ваших задач.
            </p>
            
            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Поиск инструментов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">Категории</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Сортировка:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
                className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">По рейтингу</option>
                <option value="name">По названию</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {categoryCounts[category.id] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Найдено: <span className="font-semibold text-gray-700">{filteredTools.length}</span> инструментов
            {searchQuery && (
              <span> по запросу «<span className="font-medium text-blue-600">{searchQuery}</span>»</span>
            )}
          </p>
        </div>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ничего не найдено</h3>
            <p className="text-gray-500">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600">{tools.length}</div>
            <div className="text-sm text-gray-500 mt-1">Инструментов</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">{categories.length - 1}</div>
            <div className="text-sm text-gray-500 mt-1">Категорий</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-sm text-gray-500 mt-1">Бесплатно</div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-orange-600">4.5</div>
            <div className="text-sm text-gray-500 mt-1">Средний рейтинг</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              🤖 Каталог бесплатных ИИ-инструментов • Обновлено 2024
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Все инструменты имеют бесплатный тариф. Условия могут меняться — проверяйте актуальную информацию на сайтах.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
