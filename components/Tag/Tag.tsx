import React from 'react';
import classnames from 'classnames';
import styles from './Tag.module.scss';

type TagProps = React.HTMLAttributes<HTMLElement> & {
  text: string;
  color?: string;
  large?: boolean;
  rounded?: boolean;
};

export default function Tag({
  text,
  color = 'blue',
  large = false,
  rounded = false,
  className,
}: TagProps): JSX.Element {
  return (
    <span
      className={classnames(
        styles.tag,
        styles[color],
        large && styles.large,
        rounded && styles.rounded,
        className
      )}
    >
      {text}
    </span>
  );
}
