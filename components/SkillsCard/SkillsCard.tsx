import React from 'react';
import classnames from 'classnames';
import styles from './SkillsCard.module.scss';
import Tag from '../Tag/Tag';
import BaseCard from '../BaseCard/BaseCard';

export default function SkillsCard() {
  return (
    <BaseCard label="Skills" divider>
      <div className={styles.skills}>
        <Tag text="Product Design" large rounded />
        <Tag text="Figma" color="purple" large rounded />
        <Tag text="Design Thinking" color="yellow" large rounded />
        <Tag text="Content Strategy" color="lightpink" large rounded />
      </div>
    </BaseCard>
  );
}
