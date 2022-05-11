export function getRangeOf(typedArray) {
  if (!typedArray) throw 'A typedArray should be specified, for example "Int8Array".';

  if (!(typedArray.__proto__ && (typedArray.__proto__ === Int8Array.prototype.__proto__.constructor))) throw `${typedArray} is not type of TypedArray.`;

  let lowerBoundary = 0;
  let upperBoundary = 0;
  let isFloat = typedArray.name.toLowerCase().includes('float');
  let isBigInt = typedArray.name.toLowerCase().includes('bigint');
  if (isFloat || isBigInt) return [0, 0];


  try {
    const array = new typedArray(1);
    for(let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
      array[0] = i;
      if (!(array[0] === i)) {
        upperBoundary = i - 1;
        break;
      }
    }

    for(let i = 0; i > Number.MIN_SAFE_INTEGER; i--) {
      array[0] = i;
      if (!(array[0] === i)) {
        lowerBoundary = i + 1;
        break;
      }
    }
  } catch(e) {
    console.error(e);
  }

  return [lowerBoundary, upperBoundary];

}
