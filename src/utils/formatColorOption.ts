const formatColorOption = (value: string): string => {
  const formattedValue = value.replace(/_/g, ' ');
  return formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
};

export default formatColorOption;
