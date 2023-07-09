import React from 'react';
import PropTypes from 'prop-types';

import {ImageItemStyled} from './ImageItem.styled';

const ImageItem = ({image, options}) => (
  <ImageItemStyled
    source={{uri: image}}
    alt="Product image"
    width={options.width}
    height={options.height}
  />
);

export default ImageItem;

ImageItem.propTypes = {
  image: PropTypes.string.isRequired,
  options: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};
