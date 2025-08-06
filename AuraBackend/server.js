const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();


app.use(express.json());
app.use(cors({
  origin: 'https://aura-project-7f33.vercel.app',
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('Backend is running!'));


app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
