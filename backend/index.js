const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./db/connectDb.js')

//configuration
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// connecting to DB
connectDb(process.env.MONGO_URI, process.env.DB_NAME);

//starting the server
app.listen(port, () => {
  console.log(`listening on port: ${port} - http://localhost:${port}`);
});