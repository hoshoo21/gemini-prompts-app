const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// API Routes
app.use('/api', apiRouter);

app.use(express.json());

// API Routes
app.use('/api', apiRouter);
