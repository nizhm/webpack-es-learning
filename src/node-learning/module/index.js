import printMsg from './print.js';

(async () => {
  const Encodings = await import('../commons/encoding.mjs');
  console.log(Encodings);
})();

