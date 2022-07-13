import { debounce } from 'lodash';

export const useDebounceHover: useDebounceHoverType = (
  callback,
  delay = 500,
) => debounce((item) => {
  callback(item);
}, delay);

type useDebounceHoverType = <HoverItem = undefined>(
  callback: (item: HoverItem) => void,
  delay?: number,
) => (item: HoverItem) => void;
