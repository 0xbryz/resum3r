import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/Form/index';
import styles from './Questionnaire.module.scss';
import { experience } from '../data';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';
import Button from '../../components/Button/Button';

export default function PersonalDetails() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ experience: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Experience</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.experience.map((question, index) => (
              <question.Component key={index} {...question.props} />
            ))}
          </div>
          <Button style="primary">
            <Link
              onClick={() => {
                handleSubmit(formRef.current.getData());
              }}
              href="/create/skills"
            >
              Next: Skills
            </Link>
          </Button>
        </Form>
      </div>
      <Preview>
        <ExperienceCard data={experience} style={{ minWidth: '388px' }} />
      </Preview>
    </div>
  );
}
