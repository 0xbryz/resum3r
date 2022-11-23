import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import classnames from 'classnames';
import styles from './DatePicker.module.scss';
import Info from '../../Icons/Info/Info';

export type DatePickerProps = React.HTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export default function DatePicker({
  label,
  className,
  name,
}: DatePickerProps): JSX.Element {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => ref.value,
    });
  }, [fieldName, registerField]);

  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={fieldName} className="quote-reduced">
        {label}
      </label>
      <span className={classnames(styles.information, 'mediumgray')}>
        <Info />
        Click on the calendar icon to select a date.
      </span>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        type="month"
        name={name}
        className="quote"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
