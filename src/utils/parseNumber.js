const parseNumber = value => {
  const parsedValue = Number.parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    return 0;
  }
  return parsedValue;
};

export default parseNumber;
