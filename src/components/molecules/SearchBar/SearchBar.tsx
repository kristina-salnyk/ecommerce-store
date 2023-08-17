import React, {FC, useState} from 'react';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../atoms/Input';
import {DEFAULT_ICON_SIZE} from '../../../constants/shared';
import {SearchBarStyled} from './SearchBar.styled';

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const theme = useTheme();

  return (
    <SearchBarStyled>
      <Input
        value={searchQuery}
        onChange={setSearchQuery}
        icon={
          <Icon
            name="search"
            size={DEFAULT_ICON_SIZE}
            color={theme.color.gray}
          />
        }
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
