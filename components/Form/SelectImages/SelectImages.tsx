import React from 'react';
import styles from './SelectImages.module.scss';
import classnames from 'classnames';
import Checkbox from '../Checkbox/Checkbox';

export type SelectImagesProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  name: string;
  className: string;
  title?: string;
  options: {
    id: string;
    value: string;
    image: string;
  };
};

export default function SelectImages({
  className,
  label,
  name,
  options,
  title,
}): JSX.Element {
  return (
    <div className={styles.selectImages}>
      {label && <label className="quote-reduced">{label}</label>}
      <h2 className="quote mediumgray">{title}</h2>
      <div className={styles.checkboxContainer}>
        <Checkbox className={className} name={name} options={options} />
      </div>
    </div>
  );
}
