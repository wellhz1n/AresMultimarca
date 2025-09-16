import React, { useState, useMemo, useCallback } from 'react';
import type { Car, AdvancedFilters } from '../types';
import CarCard from './CarCard';
import { BRANDS, MODELS, PRICE_RANGE, YEAR_RANGE, MILEAGE_RANGE, TRANSMISSION_TYPES, FUEL_TYPES, FEATURES } from '../constants';

interface AdvancedSearchProps {
  allCars: Car[];
  onViewDetails: (car: Car) => void;
  onBack: () => void;
}

const formatCurrency = (value: number) => `R$ ${value.toLocaleString('pt-BR')}`;
const formatKm = (value: number) => `${value.toLocaleString('pt-BR')} km`;

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({ allCars, onViewDetails, onBack }) => {
  const initialFilters: AdvancedFilters = {
    brand: 'all',
    model: 'all',
    price: { min: PRICE_RANGE.min, max: PRICE_RANGE.max },
    year: { min: YEAR_RANGE.min, max: YEAR_RANGE.max },
    mileage: { min: MILEAGE_RANGE.min, max: MILEAGE_RANGE.max },
    transmissions: [],
    fuels: [],
    features: [],
  };

  const [filters, setFilters] = useState<AdvancedFilters>(initialFilters);
  const [results, setResults] = useState<Car[]>(allCars);

  const availableModels = useMemo(() => {
    if (filters.brand === 'all') return [];
    return MODELS[filters.brand] || [];
  }, [filters.brand]);

  const handleFilterChange = (field: keyof AdvancedFilters, value: any) => {
    setFilters(prev => {
        const updated = {...prev, [field]: value};
        if(field === 'brand' && prev.brand !== value) {
            updated.model = 'all';
        }
        return updated;
    });
  };
  
  const handleCheckboxChange = (field: 'transmissions' | 'fuels' | 'features', value: string) => {
    const currentValues = filters[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    handleFilterChange(field, newValues);
  };
  
  const handleSearch = useCallback(() => {
    let filtered = allCars;

    if (filters.brand !== 'all') {
      filtered = filtered.filter(c => c.brand === filters.brand);
    }
    if (filters.model !== 'all' && filters.brand !== 'all') {
      filtered = filtered.filter(c => c.model === filters.model);
    }
    filtered = filtered.filter(c => c.price >= filters.price.min && c.price <= filters.price.max);
    filtered = filtered.filter(c => c.year >= filters.year.min && c.year <= filters.year.max);
    filtered = filtered.filter(c => c.mileage >= filters.mileage.min && c.mileage <= filters.mileage.max);

    if (filters.transmissions.length > 0) {
      filtered = filtered.filter(c => filters.transmissions.includes(c.transmission));
    }
    if (filters.fuels.length > 0) {
      filtered = filtered.filter(c => filters.fuels.includes(c.fuel));
    }
    if (filters.features.length > 0) {
      filtered = filtered.filter(c => filters.features.every(feat => c.features.includes(feat)));
    }
    
    setResults(filtered);
  }, [filters, allCars]);

  const FilterInput: React.FC<{label: string, children: React.ReactNode}> = ({label, children}) => (
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
        {children}
      </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
        <div className="mb-8 flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-white">Busca Avançada</h1>
            <button onClick={onBack} className="flex items-center text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
              Voltar
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-zinc-700 pb-4">Filtros</h3>
                <div className="space-y-6">
                    <FilterInput label="Marca">
                        <select value={filters.brand} onChange={e => handleFilterChange('brand', e.target.value)} className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
                            <option value="all">Todas as Marcas</option>
                            {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                    </FilterInput>
                    <FilterInput label="Modelo">
                        <select value={filters.model} onChange={e => handleFilterChange('model', e.target.value)} disabled={filters.brand === 'all'} className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50">
                            <option value="all">Todos os Modelos</option>
                            {availableModels.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </FilterInput>
                    <FilterInput label="Preço">
                        <div>
                            <span className="text-xs text-gray-400">Mínimo: {formatCurrency(filters.price.min)}</span>
                            <input type="range" min={PRICE_RANGE.min} max={PRICE_RANGE.max} value={filters.price.min} onChange={e => handleFilterChange('price', { ...filters.price, min: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                        </div>
                        <div className="mt-2">
                             <span className="text-xs text-gray-400">Máximo: {formatCurrency(filters.price.max)}</span>
                            <input type="range" min={PRICE_RANGE.min} max={PRICE_RANGE.max} value={filters.price.max} onChange={e => handleFilterChange('price', { ...filters.price, max: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                        </div>
                    </FilterInput>
                     <FilterInput label="Ano">
                        <div>
                            <span className="text-xs text-gray-400">Mínimo: {filters.year.min}</span>
                            <input type="range" min={YEAR_RANGE.min} max={YEAR_RANGE.max} value={filters.year.min} onChange={e => handleFilterChange('year', { ...filters.year, min: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                        </div>
                        <div className="mt-2">
                            <span className="text-xs text-gray-400">Máximo: {filters.year.max}</span>
                            <input type="range" min={YEAR_RANGE.min} max={YEAR_RANGE.max} value={filters.year.max} onChange={e => handleFilterChange('year', { ...filters.year, max: Number(e.target.value) })} className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                        </div>
                    </FilterInput>
                    <FilterInput label="Câmbio">
                        {TRANSMISSION_TYPES.map(t => <div key={t}><label className="flex items-center"><input type="checkbox" checked={filters.transmissions.includes(t)} onChange={() => handleCheckboxChange('transmissions', t)} className="mr-2 bg-zinc-700 border-zinc-600 text-yellow-500 focus:ring-yellow-500" />{t}</label></div>)}
                    </FilterInput>
                    <FilterInput label="Combustível">
                        {FUEL_TYPES.map(f => <div key={f}><label className="flex items-center"><input type="checkbox" checked={filters.fuels.includes(f)} onChange={() => handleCheckboxChange('fuels', f)} className="mr-2 bg-zinc-700 border-zinc-600 text-yellow-500 focus:ring-yellow-500" />{f}</label></div>)}
                    </FilterInput>
                    <FilterInput label="Opcionais">
                            <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                                {FEATURES.map(feat => <div key={feat}><label className="flex items-center text-sm"><input type="checkbox" checked={filters.features.includes(feat)} onChange={() => handleCheckboxChange('features', feat)} className="mr-2 bg-zinc-700 border-zinc-600 text-yellow-500 focus:ring-yellow-500" />{feat}</label></div>)}
                            </div>
                    </FilterInput>
                </div>
                 <div className="flex flex-col gap-4 mt-8 border-t border-zinc-700 pt-6">
                    <button onClick={handleSearch} className="w-full px-8 py-2 bg-yellow-500 text-zinc-900 font-bold rounded-md hover:bg-yellow-600 transition-colors">Buscar</button>
                    <button onClick={() => { setFilters(initialFilters); setResults(allCars); }} className="w-full px-6 py-2 border border-zinc-600 rounded-md text-white hover:bg-zinc-700 transition-colors">Limpar Filtros</button>
                </div>
            </aside>
            <main className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-white mb-6">{results.length} veículos encontrados</h2>
                {results.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {results.map((car) => (
                        <CarCard key={car.id} car={car} onViewDetails={onViewDetails} />
                        ))}
                    </div>
                    ) : (
                    <div className="text-center py-16 bg-zinc-900 rounded-lg">
                        <h3 className="text-2xl font-bold text-white">Nenhum veículo encontrado</h3>
                        <p className="mt-2 text-gray-400">Tente ajustar seus filtros de busca.</p>
                    </div>
                )}
            </main>
        </div>
    </div>
  );
};

export default AdvancedSearch;