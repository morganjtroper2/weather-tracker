//import fs from 'fs/promises';
//import path from 'node:path';

interface City {
  id: number;
  name: string;
}

class HistoryService {
  private cities: City[] = [];

  public async getCities(): Promise<City[]> {

    return this.cities;
  }

  public async removeCity(id: number): Promise<void> {
    this.cities = this.cities.filter(city => city.id !== id);
  
  }

  public async addCity(city: City): Promise<void> {
    this.cities.push(city);
  }
}

export default new HistoryService();