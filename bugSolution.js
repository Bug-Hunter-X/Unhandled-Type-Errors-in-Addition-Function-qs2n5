function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers'; //Handle non-number input
  }
  return a + b;
}