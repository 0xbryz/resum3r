import React from 'react';
import styles from './Preview.module.scss';
import {
  QUESTIONNAIRE_PATHS,
  QUESTIONNAIRE_PAGE_NAMES,
} from '../../pages/create/Questionnaire.data';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function Preview({ children }): JSX.Element {
  return (
    <div className={styles.right}>
      <div className={styles.container}>
        <ProgressBar
          paths={QUESTIONNAIRE_PATHS}
          labels={QUESTIONNAIRE_PAGE_NAMES}
        />
        {children}
      </div>
    </div>
  );
}
