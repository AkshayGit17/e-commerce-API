require('express-async-errors');
require('dotenv').config();

const express = require('express');
const app = express();

const morgan = require('morgan');

const authRouter = require('./routes/authRoutes');
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

//connect to DB
const connectDB = require('./db/connect');

//middlewares
app.use(express.json());
app.use(morgan('tiny'));

//routes
app.get('/', (req, res) => {
  res.status(200).send('Ecommerce API');
});
app.use('/api/v1/auth', authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
