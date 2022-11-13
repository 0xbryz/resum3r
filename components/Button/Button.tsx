import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button className={classnames(styles.button, className)}>{children}</button>
  );
}
