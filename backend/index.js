// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDb = require('./db/connectDb');
// const userrouter = require('./routes/user')
// const documentrouter = require('./routes/document')

// // Configuration
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(cors({ origin: process.env.CLIENT_URL }));
// app.use(express.json());

// // Connecting to DB
// connectDb(process.env.MONGO_URI, process.env.DB_NAME);

// // Routes
// app.use('/', userrouter)
// app.use('/api/v1/document', documentrouter)

// // Starting the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./db/connectDb');
const userrouter = require('./routes/user');
const documentrouter = require('./routes/document');
const countryDaysRouter = require('./routes/country');  // Import the new route

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
app.use('/api/v1/user', userrouter);
app.use('/api/v1/document', documentrouter);
app.use('/api/v1/country', countryDaysRouter);  // Use the new route

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDb = require('./db/connectDb');
// const userRouter = require('./routes/user');
// const documentRouter = require('./routes/document');
// const countryDaysRouter = require('./routes/country');  // Import the new route

// // Load environment variables
// dotenv.config();
// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(cors({ origin: process.env.CLIENT_URL }));
// app.use(express.json());

// // Connecting to DB
// connectDb(process.env.MONGO_URI, process.env.DB_NAME);

// // Routes
// app.use('/api/v1/user', userRouter);
// app.use('/api/v1/document', documentRouter);
// app.use('/api/v1/country', countryDaysRouter);  // Use the new route

// // Starting the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

