import React, { useState } from 'react';
import styles from './ProgressBar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

type ProgressBarProps = React.HTMLAttributes<HTMLElement> & {
  links: string[];
};

export default function ProgressBar({ links }: ProgressBarProps): JSX.Element {
  const router = useRouter();
  const pathName = router.asPath;
  return (
    <div className={styles.progressbar}>
      {links.map((link) => {
        return (
          <Link
            key={link}
            href={link}
            className={classnames(styles.span, {
              [styles.active]: pathName === link,
            })}
          ></Link>
        );
      })}
    </div>
  );
}
