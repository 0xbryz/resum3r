import React from 'react';
import classnames from 'classnames';
import styles from './Location.module.scss';

export default function Location({ location }): JSX.Element {
  return (
    <div className={styles.location}>
      <span className={classnames(styles.pin, ['body'])}>📍</span>
      <div className={styles.details}>
        <p className="body">{`Based in ${location}`}</p>
        <span className={classnames(styles.flag, ['body'])}>🇷🇺</span>
      </div>
    </div>
  );
}
