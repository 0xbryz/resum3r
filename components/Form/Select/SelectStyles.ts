import chroma from 'chroma-js';
import { StylesConfig } from 'react-select';

export interface OptionProps {
  readonly value: string;
  readonly label: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const selectTheme = (theme) => ({
  ...theme,
  borderRadius: '5px',
  colors: {
    ...theme.colors,
    primary25: 'var(--aliceblue)',
    primary: 'var(--imperialprimer)',
    neutral80: 'var(--darkgray)',
  },
});

export const selectStyles: StylesConfig<OptionProps, true> = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    borderColor: state.isFocused
      ? 'var(--imperialprimer)'
      : 'var(--lightnavyblue)',
    padding: '1rem',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected, isMulti }) => {
    const color = data.color ? chroma(data.color) : null;
    return isMulti
      ? {
          ...styles,
          backgroundColor: isDisabled
            ? undefined
            : isSelected
            ? data.color
            : isFocused
            ? color.alpha(0.1).css()
            : undefined,
          color: isDisabled
            ? '#ccc'
            : isSelected
            ? chroma.contrast(color, 'var(--white)') > 2
              ? 'var(--white)'
              : 'var(--imperialprimer)'
            : data.color,
          cursor: isDisabled ? 'not-allowed' : 'default',

          ':active': {
            ...styles[':active'],
            backgroundColor: !isDisabled
              ? isSelected
                ? data.color
                : color.alpha(0.3).css()
              : undefined,
          },
        }
      : {
          ...styles,
        };
  },
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : null;
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
      borderRadius: '5rem',
      padding: '0 0.75rem',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color ? data.color : null,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color ? data.color : null,
    ':hover': {
      color: 'var(--imperialprimer)',
    },
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--lightnavyblue)',
    margin: '0',
    WebkitFontSmoothing: 'antialiased',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles, state) => {
    return {
      ...baseStyles,
      color: state.isFocused ? 'var(--imperialprimer)' : 'var(--lightnavyblue)',
    };
  },
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
    margin: '0',
  }),
};
