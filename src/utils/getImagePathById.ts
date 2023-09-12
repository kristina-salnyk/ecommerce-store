import parseNumber from './parseNumber';
import {PICSUM_PHOTOS_ID_LIMIT} from 'constants/shared';

const getImagePathById = (id: string, size: number): string => {
  const roundSize = Math.floor(size / 10) * 10;
  return `https://picsum.photos/id/${
    parseNumber(id) > PICSUM_PHOTOS_ID_LIMIT ? PICSUM_PHOTOS_ID_LIMIT : id
  }/${roundSize}/${roundSize}`;
};

export default getImagePathById;
