if (process.env.NODE_ENV === 'test') {
  module.exports = 0;
  // Using require instead of import because dynamic imports aren't supported by ES6
} else {
  module.exports = 1000;
}
