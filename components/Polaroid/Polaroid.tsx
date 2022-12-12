import React from 'react';
import classnames from 'classnames';
import styles from './Polaroid.module.scss';
import Image from 'next/image';
import Avatar from '../Avatar/Avatar';
import { Kudos } from '../../context/useNFTs';
import { formatDate } from '../../utils';

type PolaroidProps = React.HTMLAttributes<HTMLElement> & {
  id: string;
  image: string;
  value: Kudos;
};

type EllipsisCSSProperties = React.CSSProperties & {
  '--ellipsis-line-clamp'?: string | number;
};

export default function Polaroid({
  id,
  image,
  value,
}: PolaroidProps): JSX.Element {
  const linesClamp: EllipsisCSSProperties = {
    '--ellipsis-line-clamp': 2,
  };

  const { timeLastUpdated, title } = value || {};
  const date = formatDate(timeLastUpdated)

  return (
    <div className={styles.polaroid}>
      <div
        style={{
          backgroundImage: `url('${image}')`,
        }}
        className={styles.thumbnail}
      ></div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h2 style={linesClamp} className={classnames(['label', 'ellipsis'])}>
            {title}
          </h2>
          {/* {avatar && <Avatar src={image} size="tiny" />} */}
        </div>
        <p className={classnames(styles.date, ['caption'])}>{date}</p>
      </div>
    </div>
  );
}
