const { StatusCodes } = require('http-status-codes');
const { ValidationError } = require('mongoose').MongooseError;
const { CustomAPIError } = require('../errors/custom-api');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (err instanceof ValidationError) {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }

  // Handle other unexpected errors
  console.error(err); // Log the error for debugging purposes

  // Send a JSON response with only the error message
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Something went wrong. Please try again later.' });
};

module.exports = { errorHandlerMiddleware };
