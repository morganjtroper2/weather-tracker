import { Router } from 'express';
const router = Router();
import WeatherService from '../../service/weatherService.js';

router.post('/', async (req, res) => {
  const { city } = req.body;
  try {
    const weatherData = await WeatherService.getWeatherForCity(city);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving weather data', error });
  }
});

export default router;