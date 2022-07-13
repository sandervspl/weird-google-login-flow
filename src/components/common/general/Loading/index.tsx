import * as React from 'react';

import LoadingSvg from 'vectors/loading.svg';

import { LoadingContainer } from './styled';

export const Loading: React.FC<LoadingProps> = ({
  variant, size, position = 'static',
}) => {
  return (
    <LoadingContainer {...{ variant, size, position }}>
      <LoadingSvg />
    </LoadingContainer>
  );
};

export type LoadingProps = {
  variant?: 'black' | 'white';
  size?: 'small' | 'big';
  position?: 'static' | 'absolute';
};
