import React from 'react';
import classnames from 'classnames';
import styles from './POAPCard.module.scss';
import BaseRowCard from '../BaseRowCard/BaseRowCard';
import Avatar from '../Avatar/Avatar';

export default function POAPCard({ image, country, title, date }) {
  return (
    <BaseRowCard>
      <Avatar src={image} size="large" />
      <div className={styles.content}>
        <p className={styles.flag}>{country}</p>
        <h2 className={classnames(styles.label, ['ellipsis'])}>{title}</h2>
        <p className={classnames(styles.date, ['caption'])}>{date}</p>
      </div>
    </BaseRowCard>
  );
}
