import React, { useRef, useEffect } from 'react';
import ReactSelect, { Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import classnames from 'classnames';
import styles from './Select.module.scss';
import { selectStyles, selectTheme } from './SelectStyles';

type Props = SelectProps & {
  label: string;
  name: string;
};

export default function Select({
  className,
  label,
  name,
  ...rest
}: Props): JSX.Element {
  const { fieldName, defaultValue, registerField } = useField(name);

  const selectRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => ref.state.selectValue,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={fieldName} className="quote-reduced">
        {label}
      </label>
      <ReactSelect
        styles={selectStyles}
        id="long-value-select" // https://github.com/trezor/trezor-suite/issues/290#issuecomment-874685255
        instanceId="long-value-select"
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
        placeholder="Select an option"
        className="quote"
        theme={selectTheme}
      />
    </div>
  );
}
