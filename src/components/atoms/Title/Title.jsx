import React from 'react-native';
import PropTypes from 'prop-types';

import {TitleStyled} from './Title.styled';

const Title = ({text}) => <TitleStyled>{text}</TitleStyled>;

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
