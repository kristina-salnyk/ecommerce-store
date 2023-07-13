import React, {FC, useState} from 'react';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../atoms/Input';
import {ICON_SIZE} from '../../../constants/shared';
import {SearchBarStyled} from './SearchBar.styled';

const SearchBar: FC = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SearchBarStyled>
      <Input
        value={searchQuery}
        onChange={setSearchQuery}
        icon={<Icon name="search" size={ICON_SIZE} color={theme.color.gray} />}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
