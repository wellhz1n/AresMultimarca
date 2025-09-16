import React from 'react';
import type { Car } from '../types';
import CarCard from './CarCard';

interface FeaturedCarsProps {
  cars: Car[];
  onViewDetails: (car: Car) => void;
  onGoToAdvancedSearch: () => void;
}

const FeaturedCars: React.FC<FeaturedCarsProps> = ({ cars, onViewDetails, onGoToAdvancedSearch }) => {
  const carsToShow = cars.slice(0, 6);

  return (
    <section id="estoque" className="py-16 sm:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Nosso Estoque</h2>
          <p className="mt-4 text-lg text-gray-400">Filtre e encontre o carro dos seus sonhos.</p>
        </div>
        {cars.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {carsToShow.map((car) => (
                <CarCard key={car.id} car={car} onViewDetails={onViewDetails} />
              ))}
            </div>
            {cars.length > 6 && (
              <div className="mt-12 text-center">
                <button
                  onClick={onGoToAdvancedSearch}
                  className="bg-yellow-500 text-zinc-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-600 transition-colors duration-300 text-lg"
                >
                  Ver Estoque Completo
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white">Nenhum veículo encontrado</h3>
            <p className="mt-2 text-gray-400">Tente ajustar seus filtros de busca.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCars;