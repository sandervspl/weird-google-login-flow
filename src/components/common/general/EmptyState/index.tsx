import * as React from 'react';

import { Text } from 'common/typography';
import SearchIcon from 'vectors/search.svg';

import { EmptyStateContainer } from './styled';

export const EmptyState: React.FC<EmptyStateProps> = ({ text }) => {
  return (
    <EmptyStateContainer>
      <SearchIcon />
      <Text>{text}</Text>
    </EmptyStateContainer>
  );
};

type EmptyStateProps = {
  text: string;
};
