require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const {errorHandlerMiddleware} = require('./middlewares/error-handler');
const notfound = require('./middlewares/not-found');
const router = require('./router/route');

app.use(express.json());
app.use('/api',router);


app.use(notfound);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGOURI);
    app.listen(PORT, () => console.log(`app is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
