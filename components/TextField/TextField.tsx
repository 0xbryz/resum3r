import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import classnames from 'classnames';
import styles from './TextField.module.scss';

export type TextFieldProps = React.HTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder?: string;
  name: string;
};

export default function TextField({
  label,
  placeholder = 'Type your answer here...',
  className,
  name,
}: TextFieldProps): JSX.Element {
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
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        name={name}
        placeholder={placeholder}
        className="quote"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
