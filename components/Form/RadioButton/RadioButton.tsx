import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import styles from './RadioButton.module.scss';
import classnames from 'classnames';

export type RadioButtonProps = React.HTMLAttributes<HTMLInputElement> & {
  name: string;
  options: {
    id: string;
    label: string;
  }[];
  label: string;
};

export default function RadioButton({
  className,
  name,
  options,
  label,
}: RadioButtonProps): JSX.Element {
  const inputRefs = useRef([]);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs) => {
        const checked = refs.find((ref) => ref.checked);
        return checked ? checked.value : null;
      },
      setValue: (refs, value) => {
        const item = refs.find((ref) => ref.value === value);
        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <div className={styles.radioButton}>
      <label className="quote-reduced">{label}</label>
      <div className={classnames(styles.container, className)}>
        {options.map((option, index) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className={classnames(styles.labelContainer, [
              'quote-reduced',
              'darkgray',
            ])}
          >
            <input
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="radio"
              name={fieldName}
              value={option.id}
              defaultChecked={defaultValue === option.id}
              className={styles.input}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
