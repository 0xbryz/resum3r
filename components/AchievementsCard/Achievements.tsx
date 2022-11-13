import React from 'react';
import classnames from 'classnames';
import styles from './Achievements.module.scss';
import BaseCard from '../BaseCard/BaseCard';
import Polaroid from '../Polaroid/Polaroid';
import POAPCard from '../POAPCard/POAPCard';

export default function Achievements({ data }): JSX.Element {
  return (
    <BaseCard label="Achievements" divider>
      <div className={styles.achievements}>
        <div className={styles.nftsection}>
          {data.nfts.map((achievement, i) => (
            <Polaroid key={i} {...achievement} />
          ))}
        </div>
        <div className={styles.poapsection}>
          {data.poaps.map((achievement, i) => (
            <POAPCard key={i} {...achievement} />
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
