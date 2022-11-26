import React from 'react';
import styles from './BaseCard.module.scss';
import classnames from 'classnames';

type BaseCardProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  label?: string;
  divider?: boolean;
  size?: 'small' | 'large';
};

export default function BaseCard({
  divider = false,
  size = 'small',
  label,
  children,
  className,
}: BaseCardProps): JSX.Element {
  return (
    <div
      className={classnames(styles.card, className, {
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
      })}
    >
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
