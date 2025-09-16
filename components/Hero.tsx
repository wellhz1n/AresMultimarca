import React from 'react';
import type { Filters } from '../types';

interface HeroProps {
  brands: string[];
  models: string[];
  onFilterChange: (filters: Partial<Filters>) => void;
  currentFilters: Filters;
  onSearch: () => void;
  onGoToAdvancedSearch: () => void;
}

const Hero: React.FC<HeroProps> = ({ brands, models, onFilterChange, currentFilters, onSearch, onGoToAdvancedSearch }) => {
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ brand: e.target.value, model: 'all' });
  };
  
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ model: e.target.value });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ searchTerm: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };
  
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Encontre o Seu Próximo Carro
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Explore nosso estoque de veículos premium com procedência garantida.
        </p>
        <div className="w-full max-w-4xl p-6 bg-zinc-800/80 backdrop-blur-sm rounded-lg shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end" onSubmit={handleFormSubmit}>
            <div className="md:col-span-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-300 text-left mb-1">Busca Rápida</label>
              <input
                type="text"
                id="search"
                value={currentFilters.searchTerm}
                onChange={handleSearchChange}
                placeholder="Marca, modelo, ano..."
                className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="brand" className="block text-sm font-medium text-gray-300 text-left mb-1">Marca</label>
              <select
                id="brand"
                value={currentFilters.brand}
                onChange={handleBrandChange}
                className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">Todas as Marcas</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="model" className="block text-sm font-medium text-gray-300 text-left mb-1">Modelo</label>
              <select
                id="model"
                value={currentFilters.model}
                onChange={handleModelChange}
                disabled={currentFilters.brand === 'all'}
                className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50"
              >
                <option value="all">Todos os Modelos</option>
                {models.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-zinc-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                Buscar
              </button>
            </div>
          </form>
           <div className="mt-4 text-center">
            <button
                onClick={onGoToAdvancedSearch}
                className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
            >
                Busca Avançada &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;