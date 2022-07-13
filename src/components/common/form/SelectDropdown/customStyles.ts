import { StylesConfig, GroupBase } from 'react-select';

import theme from 'styles/theme';

const selectDropdownStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(): StylesConfig<Option, IsMulti, Group> => ({
  container: (provided) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: 48,
    border: state.menuIsOpen
      ? '1px solid #007BFF'
      : '1px solid #CCCCCC',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    fill: '#CCCCCC',
    height: 20,
    width: 20,
    padding: 0,
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '100%',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    fill: state.isFocused
      ? '#007BFF'
      : '#CCCCCC',
    marginRight: 20,
    width: 20,
    height: 46,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0 2px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#CCCCCC',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 8,
    padding: 8,
    borderRadius: 4,
    border: '1px solid #CCCCCC',
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    boxSizing: 'border-box',
  }),
  multiValue: (provided) => ({
    ...provided,
    margin: '0 2px',
    height: 32,
    backgroundColor: '#007BFF',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    padding: 0,
    paddingLeft: 0,
    maxWidth: 98,
    margin: '0 8px',
    color: '#FFFFFF',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: 12,
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    fill: '#FFFFFF',
    color: '#FFFFFF',
    height: 16,
    width: 16,
    margin: '0 4px',
    padding: 0,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      fill: '#CCCCCC',
      color: '#000000',
    },
    flexShrink: 0,
    cursor: 'pointer',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: `${theme.colors.black}`,
  }),
  option: (provided, state) => ({
    ...provided,
    minHeight: 32,
    borderRadius: '4px',
    color: state.isFocused
      ? '#FFFFFF'
      : '#CCCCCC',
    backgroundColor: state.isFocused
      ? '#007BFF'
      : 'transparent',
    '&:hover': {
      backgroundColor: '#007BFF',
      color: '#FFFFFF',
    },
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),
});

export default selectDropdownStyles;
