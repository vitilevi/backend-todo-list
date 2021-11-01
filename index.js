require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { PORT, URL_LOCATION } = process.env;

const errorMiddleware = require('./middlewares/error');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(
  cors({
    origin: URL_LOCATION || `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());

app.use('/user', userRoutes);
app.use(errorMiddleware.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
