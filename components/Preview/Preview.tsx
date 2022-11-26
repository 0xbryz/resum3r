import React from 'react';
import styles from './Preview.module.scss';
import { QUESTIONNAIRE_PAGES } from '../../pages/create/Questionnaire.data';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function Preview({ children }): JSX.Element {
  return (
    <div className={styles.right}>
      <div className={styles.container}>
        <ProgressBar links={QUESTIONNAIRE_PAGES} />
        {children}
      </div>
    </div>
  );
}
