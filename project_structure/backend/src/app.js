const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/tickets');


const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);


app.get('/', (req, res) => res.json({ ok: true, service: 'Infra Tickets API' }));


module.exports = app;