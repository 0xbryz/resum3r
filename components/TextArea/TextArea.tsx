import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import classnames from 'classnames';
import styles from './TextArea.module.scss';

export type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

export default function TextArea({
  name,
  className,
  ...rest
}: TextAreaProps): JSX.Element {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={fieldName} className="quote-reduced">
        Description
      </label>
      <textarea
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        className="quote"
        placeholder="Type your description here..."
      />
    </div>
  );
}
