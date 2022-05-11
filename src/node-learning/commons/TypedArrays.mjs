const TypedArraysKey = [
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Uint8Array',
  'Uint16Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'BigInt64Array',
  'BigUint64Array',
];

const TypedArraysIterator = TypedArraysKey.reduce((previousValue, currentValue) => {
  previousValue.push([currentValue, global[currentValue]]);
  return previousValue;
}, []);

const TypedArraysMap = new Map(TypedArraysIterator);

export { TypedArraysKey, TypedArraysMap }
