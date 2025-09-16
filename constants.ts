import type { Car } from './types';

export const MOCK_CARS: Car[] = [
  { 
    id: 1, 
    brand: 'BMW', 
    model: '320i M Sport', 
    year: 2023, 
    mileage: 15000, 
    transmission: 'Automático', 
    fuel: 'Flex', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Teto Solar', 'Bancos de Couro'], 
    price: 280000, 
    imageUrls: [
      'https://i.ytimg.com/vi/ICRzG2Xb-6o/maxresdefault.jpg',
      'https://i1.vehiclecdn.com/carimages/i1/par/parks/177/17773391/bmw-3-series-petrol-2020.41c487.jpg'
    ] 
  },
  { 
    id: 2, 
    brand: 'Audi', 
    model: 'A3 Sedan S Line', 
    year: 2022, 
    mileage: 25000, 
    transmission: 'Automático', 
    fuel: 'Gasolina', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Bancos de Couro', 'Central Multimídia'], 
    price: 195000, 
    imageUrls: [
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/18446210/pexels-photo-18446210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ] 
  },
  { 
    id: 3, 
    brand: 'Mercedes-Benz', 
    model: 'C 180 Avantgarde', 
    year: 2021, 
    mileage: 30000, 
    transmission: 'Automático', 
    fuel: 'Flex', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Central Multimídia', 'Câmera de Ré'], 
    price: 230000, 
    imageUrls: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ] 
  },
  { 
    id: 4, 
    brand: 'Toyota', 
    model: 'Corolla Altis Hybrid', 
    year: 2023, 
    mileage: 10000, 
    transmission: 'Manual', 
    fuel: 'Híbrido', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Teto Solar', 'ACC'], 
    price: 185000, 
    imageUrls: [
      'https://www.motorbiscuit.com/wp-content/uploads/2021/03/2021-Honda-Civic-Hatchback-Sport-Touring-cover.jpg',
      'https://images.pexels.com/photos/16322421/pexels-photo-16322421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ] 
  },
  { 
    id: 5, 
    brand: 'Honda', 
    model: 'Civic Touring', 
    year: 2022, 
    mileage: 22000, 
    transmission: 'Automático', 
    fuel: 'Gasolina', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Bancos de Couro', 'Teto Solar'], 
    price: 175000, 
    imageUrls: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ] 
  },
  { 
    id: 6, 
    brand: 'Volkswagen', 
    model: 'Jetta GLI', 
    year: 2023, 
    mileage: 8000, 
    transmission: 'Automático', 
    fuel: 'Gasolina', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Teto Solar', 'Painel Digital'], 
    price: 225000, 
    imageUrls: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/18418709/pexels-photo-18418709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ] 
  },
  { 
    id: 7, 
    brand: 'BMW', 
    model: 'X1 sDrive20i X-Line', 
    year: 2021, 
    mileage: 35000, 
    transmission: 'Automático', 
    fuel: 'Flex', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Porta-malas elétrico', 'Bancos de Couro'], 
    price: 255000, 
    imageUrls: [
      'https://images.pexels.com/photos/18388506/pexels-photo-18388506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/16843460/pexels-photo-16843460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ] 
  },
  { 
    id: 8, 
    brand: 'Audi', 
    model: 'Q5 Performance Black', 
    year: 2020, 
    mileage: 45000, 
    transmission: 'Automático', 
    fuel: 'Gasolina', 
    features: ['Ar Condicionado', 'Direção Elétrica', 'Tração Quattro', 'Teto Solar'], 
    price: 290000, 
    imageUrls: [
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/18446215/pexels-photo-18446215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ] 
  }
]
;

export const BRANDS: string[] = ['BMW', 'Audi', 'Mercedes-Benz', 'Toyota', 'Honda', 'Volkswagen'];

export const MODELS: { [key: string]: string[] } = {
  'BMW': ['320i M Sport', 'X1 sDrive20i X-Line', 'M3'],
  'Audi': ['A3 Sedan S Line', 'Q5 Performance Black', 'RS6'],
  'Mercedes-Benz': ['C 180 Avantgarde', 'GLA 200', 'AMG GT'],
  'Toyota': ['Corolla Altis Hybrid', 'Hilux', 'RAV4'],
  'Honda': ['Civic Touring', 'HR-V', 'CR-V'],
  'Volkswagen': ['Jetta GLI', 'T-Cross', 'Amarok'],
};

// --- Dynamic constants for advanced search ---

const getMinMax = (prop: keyof Car) => {
    const values = MOCK_CARS.map(car => car[prop] as number);
    return {
        min: Math.min(...values),
        max: Math.max(...values),
    };
};

export const PRICE_RANGE = getMinMax('price');
export const YEAR_RANGE = getMinMax('year');
export const MILEAGE_RANGE = getMinMax('mileage');

export const TRANSMISSION_TYPES = [...new Set(MOCK_CARS.map(car => car.transmission))];
export const FUEL_TYPES = [...new Set(MOCK_CARS.map(car => car.fuel))];
export const FEATURES = [...new Set(MOCK_CARS.flatMap(car => car.features))].sort();