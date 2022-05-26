const OverallMethods = [
  'OPTIONS',
  'GET',
  'POST',
  'PUT',
  'DELETE',
  'CONNECT',
  'HEAD',
  'PATCH',
  'TRACE'
];

const PayloadMethods = OverallMethods.slice(2, 5);

const CORSMethods = OverallMethods.slice(0, 5);

export {
  OverallMethods,
  PayloadMethods,
  CORSMethods
}
