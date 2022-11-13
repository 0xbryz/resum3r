import React from 'react';
import styles from './HeroCard.module.scss';
import BaseRowCard from '../BaseRowCard/BaseRowCard';
import Tag from '../Tag/Tag';

export type HeroCardProps = React.HTMLAttributes<HTMLElement> & {
  image?: string;
  title: string;
  tagText: string;
};

type EllipsisCSSProperties = React.CSSProperties & {
  '--ellipsis-line-clamp'?: string | number;
};

export default function HeroCard({ image, tagText, title }): JSX.Element {
  const linesClamp: EllipsisCSSProperties = {
    '--ellipsis-line-clamp': 4,
  };
  return (
    <BaseRowCard className={styles.herocard}>
      <div className={styles.content}>
        <div
          style={{
            backgroundImage: `url('${image}')`,
          }}
          className={styles.thumbnail}
        ></div>
        <div className={styles.details}>
          <Tag text={tagText} />
          <p style={linesClamp} className="label ellipsis">
            {title}
          </p>
        </div>
      </div>
    </BaseRowCard>
  );
}
