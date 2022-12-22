const validateRequest = (err, _, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(404).send({ message: err.message }); // Bad request
  }
  next();
};
module.exports = validateRequest;
