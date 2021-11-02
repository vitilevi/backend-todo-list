require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { PORT } = process.env;

const errorMiddleware = require('./middlewares/error');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(userRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
