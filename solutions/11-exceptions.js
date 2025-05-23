export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
function parseJson (json) {
  try {
    return JSON.parse(json);
  }catch (error) {
    throw new ParseError('Invalid JSON string');
  }
}
export {parseJson};
// END
