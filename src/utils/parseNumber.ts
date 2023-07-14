const parseNumber = (value: string): number => {
  const parsedValue = Number.parseFloat(value);
  if (Number.isNaN(parsedValue)) {
    return 0;
  }
  return parsedValue;
};

export default parseNumber;
