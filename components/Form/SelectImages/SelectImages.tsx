import React from 'react';
import styles from './SelectImages.module.scss';
import classnames from 'classnames';
import Checkbox from '../Checkbox/Checkbox';

type SelectImageOption = {
  id: string;
  value: string;
  image: string;
  checked?: boolean;
}

export type SelectImagesProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  name: string;
  className: string;
  title?: string;
  options: SelectImageOption[];
};

export default function SelectImages({
  className,
  label,
  name,
  options,
  title,
  ...rest
}: SelectImagesProps): JSX.Element {
  return (
    <div className={styles.selectImages} {...rest} >
      {label && <label className="quote-reduced">{label}</label>}
      <h2 className="quote mediumgray">{title}</h2>
      <div className={styles.checkboxContainer}>
        <Checkbox className={className as any} name={name} options={options} />
      </div>
    </div>
  );
}
