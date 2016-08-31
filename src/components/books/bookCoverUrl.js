import replaceAll from '../../utils/replaceAll';

// https://openlibrary.org/dev/docs/api/covers

export default ({isbn, size}) => {
  if(size.length > 1 || size !== size.toUpperCase()) {
    throw new TypeError(`Book cover size must be either 'S', 'M', or 'L', not ${size}`)
  }
  return `https://covers.openlibrary.org/b/isbn/${replaceAll(isbn, '-', '')}-${size}.jpg?default=false`;
};
