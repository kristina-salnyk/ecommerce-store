import React, {FC, useCallback, useState} from 'react';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../atoms/Input';
import {DEFAULT_ICON_SIZE} from '../../../constants/shared';
import {SearchBarStyled} from './SearchBar.styled';

interface SearchBarProps {
  onChangeSearchQuery: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({onChangeSearchQuery}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const theme = useTheme();

  const onPressSearch = useCallback(() => {
    onChangeSearchQuery(searchQuery);
  }, [onChangeSearchQuery, searchQuery]);

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
        onPressIcon={onPressSearch}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
