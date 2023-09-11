const formatDate = (value: string): string => {
  const date = new Date(value);
  return date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      hourCycle: 'h23',
    })
    .replace(',', '');
};

export default formatDate;
