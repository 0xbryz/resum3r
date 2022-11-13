import React from 'react';
import styles from './PillsModule.module.scss';
import Pill from '../Pill/Pill';
import BaseCard from '../BaseCard/BaseCard';

export default function PillsModule({ data, label }): JSX.Element {
  return (
    <BaseCard label={label} divider>
      <div className={styles.communities}>
        {data.map((community, index) => {
          return <Pill key={index} {...community} />;
        })}
      </div>
    </BaseCard>
  );
}
