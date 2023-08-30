import {PRODUCT_ITEM_IMAGE_LIMIT} from '../constants/shared';

const getImagePathById = (id: string, size: number): string => {
  const roundSize = Math.floor(size / 10) * 10;
  return `https://picsum.photos/id/${
    Number.parseFloat(id) > PRODUCT_ITEM_IMAGE_LIMIT
      ? PRODUCT_ITEM_IMAGE_LIMIT
      : id
  }/${roundSize}/${roundSize}`;
};

export default getImagePathById;
