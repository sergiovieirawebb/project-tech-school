const errorMiddleware = (err, _req, res, next) => {
  res.status(err.code || 500).json({ message: err.message || 'Erro inesperado. Por favor, tente mais tarde!' });
  return next();
};

module.exports = errorMiddleware;
