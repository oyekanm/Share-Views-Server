const NotFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const ErrorBoundary = (err, req, res, next) => {
  const status = err.status ? err.status : err.status === 200 ? 500 : 500;
  const message = err.message;

  res
    .status(status)
    .json({
      message: message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  next();
};

module.exports = { NotFound, ErrorBoundary };
