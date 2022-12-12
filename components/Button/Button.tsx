import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  style?: 'primary' | 'secondary' | 'lens';
  rounded?: boolean;
  long?: boolean;
  href?: string;
  [prop: string]: any;
};

export default function Button({
  children,
  className,
  style,
  rounded = true,
  long = false,
  href,
  ...rest
}: ButtonProps): JSX.Element {
  const ButtonOrLink = href ? 'a' : 'button';
  return (
    <ButtonOrLink
      href={href}
      {...rest}
      className={classnames(styles.button, className, {
        [styles.primary]: style === 'primary',
        [styles.secondary]: style === 'secondary',
        [styles.lens]: style === 'lens',
        [styles.rounded]: rounded,
        [styles.long]: long,
      })}
    >
      {children}
    </ButtonOrLink>
  );
}
