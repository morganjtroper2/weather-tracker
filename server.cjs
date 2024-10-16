import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
dotenv.config();
import routes from './routes/index.js';
const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/dist'));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
