import React from 'react';
import classnames from 'classnames';
import styles from './SkillsCard.module.scss';
import Tag from '../Tag/Tag';
import BaseCard from '../BaseCard/BaseCard';
import { TagProps } from '../Tag/Tag';

type SkillsCardProps = React.HTMLAttributes<HTMLElement> & {
  data: TagProps[];
};

export default function SkillsCard({ data }: SkillsCardProps): JSX.Element {
  return (
    <BaseCard label="Skills" divider>
      <div className={styles.skills}>
        {data.map((el, i) => (
          <Tag key={i} {...el} />
        ))}
      </div>
    </BaseCard>
  );
}
