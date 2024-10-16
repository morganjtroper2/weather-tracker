//import fs from 'fs/promises';
//import path from 'node:path';
class HistoryService {
    constructor() {
        this.cities = [];
    }
    async getCities() {
        return this.cities;
    }
    async removeCity(id) {
        this.cities = this.cities.filter(city => city.id !== id);
    }
    async addCity(city) {
        this.cities.push(city);
    }
}
export default new HistoryService();
