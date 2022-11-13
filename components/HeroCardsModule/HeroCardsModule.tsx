import React from 'react';
import BaseRowCard from '../BaseRowCard/BaseRowCard';
import HeroCard from '../HeroCard/HeroCard';
import Tag from '../Tag/Tag';
import BaseCard from '../BaseCard/BaseCard';
import styles from './HeroCardsModule.module.scss';

export default function HeroCardsModule({ data, label }): JSX.Element {
  return (
    <BaseCard label={label} divider>
      <div className={styles.projects}>
        {data.map((project, index) => {
          return <HeroCard key={index} {...project} />;
        })}
      </div>
    </BaseCard>
  );
}
