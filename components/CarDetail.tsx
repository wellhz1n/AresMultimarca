import React, { useState } from 'react';
import type { Car } from '../types';
import { CalendarIcon, FuelIcon, MileageIcon, TransmissionIcon } from './icons/SpecsIcons';

interface CarDetailProps {
  car: Car;
  onBack: () => void;
}

const CarDetail: React.FC<CarDetailProps> = ({ car, onBack }) => {
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === car.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? car.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const specItems = [
    { icon: <CalendarIcon />, label: 'Ano', value: car.year },
    { icon: <MileageIcon />, label: 'KM', value: formatMileage(car.mileage) },
    { icon: <TransmissionIcon />, label: 'Câmbio', value: car.transmission },
    { icon: <FuelIcon />, label: 'Combustível', value: car.fuel },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Voltar ao Estoque
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="relative bg-zinc-800 rounded-lg overflow-hidden h-[500px]">
            <img
              src={car.imageUrls[currentImageIndex]}
              alt={`${car.brand} ${car.model} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
             {car.imageUrls.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                        aria-label="Previous Image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                        aria-label="Next Image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </>
             )}
          </div>
          {car.imageUrls.length > 1 && (
            <div className="flex space-x-2 mt-4">
              {car.imageUrls.map((url, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-24 h-16 rounded-md overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-yellow-500' : 'border-transparent hover:border-zinc-600'}`}
                >
                  <img src={url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Car Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-white">{car.brand} <span className="font-light">{car.model}</span></h1>
          <p className="text-5xl font-extrabold text-yellow-500 my-6">{formatPrice(car.price)}</p>

          <div className="border-y border-zinc-700 py-6">
            <h3 className="text-xl font-bold text-white mb-4">Especificações</h3>
            <div className="grid grid-cols-2 gap-4">
              {specItems.map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  {item.icon}
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="py-6">
            <h3 className="text-xl font-bold text-white mb-4">Opcionais</h3>
             <ul className="columns-2 gap-x-8">
                {car.features.map(feature => (
                    <li key={feature} className="flex items-center text-gray-300 mb-2">
                        <svg className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {feature}
                    </li>
                ))}
            </ul>
          </div>
          
           <div className="mt-auto pt-6">
             <a href="#" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943s-.182-.15-.38-.25"/>
                </svg>
                Falar com Consultor via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;