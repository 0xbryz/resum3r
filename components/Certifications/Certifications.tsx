import React from 'react';
import classnames from 'classnames';
import styles from './Certifications.module.scss';
import Certification from '../CertificationCard/Certification';

export default function Certifications({ data, label }): JSX.Element {
  return (
    <>
      <p className="headline-reduced">{label}</p>
      <div className={styles.container}>
        {data.map((certification) => (
          <Certification key={certification.id} {...certification} />
        ))}
      </div>
    </>
  );
}
