import React from 'react';
import styles from './BaseCard.module.scss';
import classnames from 'classnames';

type BaseCardProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  label?: string;
  divider?: boolean;
};

export default function BaseCard({
  divider = false,
  label,
  children,
  className,
  ...props
}: BaseCardProps): JSX.Element {
  return (
    <div className={classnames(styles.card, className)} {...props}>
      {label && (
        <p className={classnames(styles.title, ['headline-reduced'])}>
          {label}
        </p>
      )}
      {divider && <div className={styles.divider}></div>}
      {children}
    </div>
  );
}
