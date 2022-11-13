import React from 'react';
import classnames from 'classnames';
import styles from './Certification.module.scss';
import BaseRowCard from '../BaseRowCard/BaseRowCard';
import Avatar from '../Avatar/Avatar';

export default function Certification({
  image,
  connections,
  title,
  date,
  totalOwners,
}) {
  return (
    <BaseRowCard>
      <Avatar src={image} size="large" />
      <div className={styles.content}>
        <div className={styles.details}>
          <h2 className={classnames(styles.title, ['body-bold', 'ellipsis'])}>
            {title}
          </h2>
          <p className="blue body-reduced">{`${totalOwners} people have this`}</p>
          <div className={styles.connections}>
            {connections &&
              connections.map((connection) => (
                <Avatar key={connection} src={image} size="tiny" border />
              ))}
          </div>
        </div>
        <p className={classnames(styles.date, ['body-reduced'])}>{date}</p>
      </div>
    </BaseRowCard>
  );
}
