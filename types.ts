export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  transmission: 'Automático' | 'Manual';
  fuel: 'Gasolina' | 'Flex' | 'Diesel' | 'Elétrico' | 'Híbrido';
  features: string[];
  price: number;
  imageUrls: string[];
}

export interface Filters {
  brand: string;
  model: string;
  searchTerm: string;
}

export interface AdvancedFilters {
  brand: string;
  model: string;
  price: { min: number; max: number };
  year: { min: number; max: number };
  mileage: { min: number; max: number };
  transmissions: string[];
  fuels: string[];
  features: string[];
}