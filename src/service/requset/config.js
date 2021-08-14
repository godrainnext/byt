let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://120.79.86.32:3000/';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://120.79.86.32:3000/';
} else {
  BASE_URL = 'http://120.79.86.32:3000/';
}

export { TIME_OUT, BASE_URL };
