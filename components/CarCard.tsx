import React, { useState } from 'react';
import type { Car } from '../types';
import { CalendarIcon, FuelIcon, MileageIcon, TransmissionIcon } from './icons/SpecsIcons';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return `${mileage.toLocaleString('pt-BR')} km`;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === car.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? car.imageUrls.length - 1 : prevIndex - 1
    );
  };
  
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  }

  const specItems = [
    { icon: <CalendarIcon />, label: car.year },
    { icon: <MileageIcon />, label: formatMileage(car.mileage) },
    { icon: <TransmissionIcon />, label: car.transmission },
    { icon: <FuelIcon />, label: car.fuel },
  ];

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-1 group flex flex-col">
      <div className="relative">
        <div className="w-full h-56 overflow-hidden">
           {car.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${car.brand} ${car.model} - Imagem ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />
          ))}
        </div>
        
        {car.imageUrls.length > 1 && (
            <>
                <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous Image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next Image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
                    {car.imageUrls.map((_, index) => (
                    <button key={index} onClick={() => goToImage(index)} className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-yellow-500' : 'bg-white/50'}`}></button>
                    ))}
                </div>
            </>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white truncate">{car.brand}</h3>
        <p className="text-md text-gray-400 mb-3 truncate">{car.model}</p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-300 mb-4">
          {specItems.map((item, index) => (
             <span key={index} className="flex items-center gap-2">
                {item.icon}
                {item.label}
             </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
            {car.features.map(feature => (
                <span key={feature} className="text-xs bg-zinc-700 text-gray-300 px-2 py-1 rounded-full">{feature}</span>
            ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-zinc-700">
          <p className="text-2xl font-extrabold text-yellow-500 mb-4">{formatPrice(car.price)}</p>
          <button 
            type="button"
            onClick={() => onViewDetails(car)}
            className="w-full bg-yellow-500 text-zinc-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;