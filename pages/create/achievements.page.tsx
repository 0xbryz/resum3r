import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/Form/index';
import styles from './Questionnaire.module.scss';
import { achievements } from '../../pages/data';
import AchievementsCard from '../../components/AchievementsCard/Achievements';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';

export default function Achievements() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ achievements: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Achievements</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.achievements.nfts.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
            {QUESTIONNAIRE_INPUT_DATA.achievements.poaps.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
          </div>
          <Link
            onClick={() => {
              handleSubmit(formRef.current.getData());
            }}
            href="/create/credentials"
          >
            Next: Credentials & Certifications
          </Link>
        </Form>
      </div>
      <Preview>
        <AchievementsCard data={achievements} style={{ maxWidth: '700px' }} />
      </Preview>
    </div>
  );
}
