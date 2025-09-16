import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CarDetail from './components/CarDetail';
import AdvancedSearch from './components/AdvancedSearch';
import type { Car, Filters } from './types';
import { MOCK_CARS, BRANDS, MODELS } from './constants';

type View = 'home' | 'carDetail' | 'advancedSearch';

const App: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    brand: 'all',
    model: 'all',
    searchTerm: '',
  });
  
  const [filteredCars, setFilteredCars] = useState<Car[]>(MOCK_CARS);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [previousView, setPreviousView] = useState<View>('home');

  const availableModels = useMemo(() => {
    if (filters.brand === 'all') {
      return [];
    }
    return MODELS[filters.brand] || [];
  }, [filters.brand]);

  const handleSearch = useCallback(() => {
    let carsToFilter = MOCK_CARS;

    if (filters.brand !== 'all') {
      carsToFilter = carsToFilter.filter(car => car.brand === filters.brand);
    }

    if (filters.model !== 'all' && filters.brand !== 'all') {
      carsToFilter = carsToFilter.filter(car => car.model === filters.model);
    }
    
    if (filters.searchTerm) {
        const lowercasedTerm = filters.searchTerm.toLowerCase();
        carsToFilter = carsToFilter.filter(car => 
            car.brand.toLowerCase().includes(lowercasedTerm) ||
            car.model.toLowerCase().includes(lowercasedTerm) ||
            car.year.toString().includes(lowercasedTerm) ||
            car.fuel.toLowerCase().includes(lowercasedTerm) ||
            car.features.some(feature => feature.toLowerCase().includes(lowercasedTerm))
        );
    }

    setFilteredCars(carsToFilter);
    document.getElementById('estoque')?.scrollIntoView({ behavior: 'smooth' });
  }, [filters]);

  const handleFilterChange = useCallback((newFilters: Partial<Filters>) => {
    setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters, ...newFilters };
        if (newFilters.brand && newFilters.brand !== prevFilters.brand) {
            updatedFilters.model = 'all';
        }
        return updatedFilters;
    });
  }, []);

  const handleViewDetails = useCallback((car: Car) => {
    setPreviousView(currentView);
    setSelectedCar(car);
    setCurrentView('carDetail');
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleBackToList = useCallback(() => {
    setSelectedCar(null);
    setCurrentView(previousView);
  }, [previousView]);
  
  const goToAdvancedSearch = useCallback(() => {
    setCurrentView('advancedSearch');
    window.scrollTo(0, 0);
  }, []);

  const goHome = useCallback(() => {
    setCurrentView('home');
    window.scrollTo(0,0);
  }, []);
  
  const renderContent = () => {
    if (currentView === 'carDetail' && selectedCar) {
      return <CarDetail car={selectedCar} onBack={handleBackToList} />;
    }
    
    if (currentView === 'advancedSearch') {
        return <AdvancedSearch 
                    allCars={MOCK_CARS} 
                    onViewDetails={handleViewDetails}
                    onBack={goHome}
                />;
    }

    return (
      <>
        <Hero 
          brands={BRANDS}
          models={availableModels}
          onFilterChange={handleFilterChange}
          currentFilters={filters}
          onSearch={handleSearch}
          onGoToAdvancedSearch={goToAdvancedSearch}
        />
        <FeaturedCars 
            cars={filteredCars} 
            onViewDetails={handleViewDetails}
            onGoToAdvancedSearch={goToAdvancedSearch}
        />
        <WhyChooseUs />
        <Contact />
      </>
    );
  };

  return (
    <div className="bg-zinc-900 text-gray-200 font-sans">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;