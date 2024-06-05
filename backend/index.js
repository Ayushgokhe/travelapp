const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./db/connectDb');
const userrouter = require('./routes/user')
const documentrouter = require('./routes/document')

// Configuration
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// Connecting to DB
connectDb(process.env.MONGO_URI, process.env.DB_NAME);

// Routes
app.use('/', userrouter)
app.use('/api/v1/document', documentrouter)

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
