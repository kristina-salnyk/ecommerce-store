import {useState} from 'react';
import React from 'react-native';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../atoms/Input';
import {SearchBarStyled} from './SearchBar.styled';

const SearchBar = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchBarStyled>
      <Input
        value={searchQuery}
        onChange={setSearchQuery}
        icon={<Icon name="search" size={30} color={theme.color.gray} />}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
