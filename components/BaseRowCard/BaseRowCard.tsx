import React from 'react';
import classnames from 'classnames';
import styles from './BaseRowCard.module.scss';

export type BaseRowCardProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export default function BaseRowCard({
  children,
  className,
}: BaseRowCardProps): JSX.Element {
  return <div className={classnames(styles.card, className)}>{children}</div>;
}
