import React from 'react';
import styles from './ProgressBar.module.scss';

export default function Tooltip({ label, children, ...props }): JSX.Element {
  return (
    <div className={styles.container} {...props}>
      <span className={styles.tooltip}>{label}</span>
      {children}
    </div>
  );
}
