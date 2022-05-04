const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res) => {
  const customError = {
    message: err.message || 'Something went wrong, please try again later',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  res.status(customError.statusCode).json({ msg: customError.message });
};

module.exports = errorHandlerMiddleware;
