let delay = 1000;

if (process.env.NODE_ENV === 'test') {
  delay = 0;
}

export default delay;
