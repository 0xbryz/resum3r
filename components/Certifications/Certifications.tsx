import React from 'react';
import classnames from 'classnames';
import styles from './Certifications.module.scss';
import Certification from '../CertificationCard/Certification';

type CertificationsProps = React.HTMLAttributes<HTMLElement> & {
  data: {
    title: string;
    date: string;
    image: string;
    totalOwners: number;
    connections: string[];
  }[];
  label?: string;
};

export default function Certifications({
  data,
  label,
}: CertificationsProps): JSX.Element {
  return (
    <>
      {label && <p className="headline-reduced">{label}</p>}
      <div className={classnames(styles.container)}>
        {data.map((certification, i) => (
          <Certification key={i} {...certification} />
        ))}
      </div>
    </>
  );
}
