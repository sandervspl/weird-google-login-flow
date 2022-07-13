import * as i from 'types';

export type HeadingColors = i.ColorsFromTheme<'black' | 'white'>;
export type TextColors = i.ColorsFromTheme<'black' | 'white' | 'gray'>;

export type TextDefaultProps = {
  weight?: 400 | 600 | 700;
  size?: 12 | 14 | 16 | 18;
  lineHeight?: number;
  color?: TextColors;
};
