import React from 'react';
import classnames from 'classnames';
import styles from './Polaroid.module.scss';
import Image from 'next/image';
import Avatar from '../Avatar/Avatar';

type PolaroidProps = React.HTMLAttributes<HTMLElement> & {
  title: string;
  avatar?: string;
  date?: string;
  nft: string;
};

type EllipsisCSSProperties = React.CSSProperties & {
  '--ellipsis-line-clamp'?: string | number;
};

export default function Polaroid({
  title,
  avatar,
  date,
  nft,
}: PolaroidProps): JSX.Element {
  const linesClamp: EllipsisCSSProperties = {
    '--ellipsis-line-clamp': 2,
  };

  return (
    <div className={styles.polaroid}>
      <div
        style={{
          backgroundImage: `url('${nft}')`,
        }}
        className={styles.thumbnail}
      ></div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h2 style={linesClamp} className={classnames(['label', 'ellipsis'])}>
            {title}
          </h2>
          {avatar && <Avatar src={avatar} size="tiny" />}
        </div>
        <p className={classnames(styles.date, ['caption'])}>{date}</p>
      </div>
    </div>
  );
}
