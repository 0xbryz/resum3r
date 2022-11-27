import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Questionnaire.module.scss';
import { skills } from '../data';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';

export default function Skills() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Skills</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.skills.map((question, index) => (
              <question.Component key={index} {...question.props} />
            ))}
          </div>
          <Link
            onClick={() => {
              handleSubmit(formRef.current.getData());
            }}
            href="/create/achievements"
          >
            Next: Achievements
          </Link>
        </Form>
      </div>
      <Preview>
        <SkillsCard data={skills} style={{ maxWidth: '388px' }} />
      </Preview>
    </div>
  );
}
