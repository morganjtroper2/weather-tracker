import { Router } from 'express';
import HistoryService from '../../service/historyService.js';
const router = Router();
router.get('/history', async (_req, res) => {
    try {
        const cities = await HistoryService.getCities();
        res.status(200).json(cities);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving history', error });
    }
});
router.delete('/history/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await HistoryService.removeCity(Number(id));
        res.status(200).json({ message: 'City removed from history' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error removing city from history', error });
    }
});
export default router;
