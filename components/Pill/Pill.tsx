import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './Pill.module.scss';

export default function Pill({ image, title, count = undefined }) {
  return (
    <div className={styles.pill}>
      <Avatar src={image} size="medium" />
      <div className={styles.content}>
        <p className="label ellipsis">{title}</p>
        {count && <p className="caption mediumgray">{`${count} members`}</p>}
        <p></p>
      </div>
    </div>
  );
}
