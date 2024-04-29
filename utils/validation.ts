export const isNotationValid = (notation: string) => {
  if (notation.length !== 2) {
    return false;
  }

  const firstChar = notation.toLowerCase().charCodeAt(0);
  const secondrChar = notation.toLowerCase().charCodeAt(1);

  const firstCharIsValid =
    firstChar >= 'a'.charCodeAt(0) && firstChar <= 'h'.charCodeAt(0);
  const secondCharIsValid =
    secondrChar >= '1'.charCodeAt(0) && secondrChar <= '8'.charCodeAt(0);

  return firstCharIsValid && secondCharIsValid;
};
