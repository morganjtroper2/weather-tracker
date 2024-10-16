import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
class WeatherService {
    constructor() {
        this.baseURL = process.env.API_BASE_URL || 'https://api.openweathermap.org';
        this.apiKey = process.env.API_KEY || '2a2581b7f9f05777e2d5f668ad95400e';
    }
    async fetchLocationData(query) {
        const url = `${this.baseURL}/geo/1.0/direct?q=${query}&appid=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }
        const data = await response.json();
        return data;
    }
    async fetchWeatherData(coordinates) {
        const url = `${this.baseURL}/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const weatherData = await response.json();
        return weatherData;
    }
    async getWeatherForCity(city) {
        const locationData = await this.fetchLocationData(city);
        if (locationData.length === 0) {
            throw new Error('No location data found for the specified city');
        }
        const coordinates = { lat: locationData[0].lat, lon: locationData[0].lon };
        const weatherData = await this.fetchWeatherData(coordinates);
        return weatherData;
    }
}
export default new WeatherService();
