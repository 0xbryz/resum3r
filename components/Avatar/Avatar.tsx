import React from 'react';
import classnames from 'classnames';
import styles from './Avatar.module.scss';
import Image from 'next/image';

type AvatarProps = React.HTMLAttributes<HTMLElement> & {
  src: string;
  border?: boolean;
  outline?: boolean;
  size: 'tiny' | 'small' | 'medium' | 'large';
};

const sizes = {
  tiny: 20,
  small: 38,
  medium: 52,
  large: 80,
};

export default function Avatar({
  src,
  border = false,
  outline = false,
  size = 'medium',
  ...props
}: AvatarProps): JSX.Element {
  const diameter = sizes[size];

  return (
    <div
      style={{
        width: outline ? `${diameter + 10}px` : null,
        height: outline ? `${diameter + 10}px` : null,
      }}
      className={classnames(styles.avatar, {
        [styles.outline]: outline,
        [styles.border]: border,
      })}
      {...props}
    >
      <Image src={src} alt="avatar" width={diameter} height={diameter} />
    </div>
  );
}
