const getImagePathById = (id: string, size: number): string => {
  const roundSize = Math.floor(size / 10) * 10;
  return `https://picsum.photos/id/${id}/${roundSize}/${roundSize}`;
};

export default getImagePathById;
