import React from 'react';
import classnames from 'classnames';
import styles from './POAPCard.module.scss';
import BaseRowCard from '../BaseRowCard/BaseRowCard';
import Avatar from '../Avatar/Avatar';
import { poaps } from '../../context/useNFTs';

type Props = poaps

export default function POAPCard({
  image,
  value
 }: Props) {
  const { name, image_url, country, start_date } = value?.event ?? {};
  return (
    <BaseRowCard>
      <Avatar src={image ?? image_url} size="large" />
      <div className={styles.content}>
        <p className={styles.flag}>{country}</p>
        <h2 className={classnames(styles.label, ['ellipsis'])}>{name}</h2>
        <p className={classnames(styles.date, ['caption'])}>{start_date}</p>
      </div>
    </BaseRowCard>
  );
}
