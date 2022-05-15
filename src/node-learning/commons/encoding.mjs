const CharacterEncodings = new Map([
  ['utf8', 'utf8'],
  ['utf-8', 'utf8'],
  ['UTF8', 'utf8'],
  ['UTF-8', 'utf8'],
  ['utf16le', 'utf16le'],
  ['utf-16le', 'utf16le'],
  ['ucs2', 'utf16le'],
  ['ucs-2', 'utf16le'],
  ['latin1', 'latin1'],
  ['binary', 'latin1'],
  ['base64', 'base64'],
  // ['base64url', 'base64url'],
  ['hex', 'hex'],
  ['ascii', 'ascii']
]);

export { CharacterEncodings as Encodings }
