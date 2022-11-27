import React, { useState } from 'react';
import styles from './ProgressBar.module.scss';
import Tooltip from './Tooltip';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';

type ProgressBarProps = React.HTMLAttributes<HTMLElement> & {
  paths: string[];
  labels: labels;
};

type labels = {
  [key: string]: string;
};

const getLabel = (labels: labels, path: string) => {
  return labels[path];
};

export default function ProgressBar({
  paths,
  labels,
}: ProgressBarProps): JSX.Element {
  const router = useRouter();
  const pathName = router.asPath;
  return (
    <div className={styles.progressbar}>
      {paths.map((path) => {
        return (
          <Tooltip key={path} label={getLabel(labels, path)}>
            <Link
              href={path}
              className={classnames(styles.bar, {
                [styles.active]: pathName === path,
              })}
            ></Link>
          </Tooltip>
        );
      })}
    </div>
  );
}
