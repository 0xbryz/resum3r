import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button {...rest} className={classnames(styles.button, className)}>
      {children}
    </button>
  );
}
