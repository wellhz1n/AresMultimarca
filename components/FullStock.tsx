import React from 'react';
import type { Car } from '../types';
import CarCard from './CarCard';

interface FullStockProps {
  cars: Car[];
  onViewDetails: (car: Car) => void;
  onBack: () => void;
}

const FullStock: React.FC<FullStockProps> = ({ cars, onViewDetails, onBack }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-white">Estoque Completo</h1>
        <button onClick={onBack} className="flex items-center text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
          Voltar
        </button>
      </div>

       {cars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} onViewDetails={onViewDetails} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900 rounded-lg">
            <h3 className="text-2xl font-bold text-white">Nenhum veículo encontrado</h3>
            <p className="mt-2 text-gray-400">Tente ajustar seus filtros de busca ou volte para a página inicial.</p>
          </div>
        )}
    </section>
  );
};

export default FullStock;