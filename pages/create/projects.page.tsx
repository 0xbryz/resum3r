import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Questionnaire.module.scss';
import { projects } from '../../pages/data';
import HeroCardsModule from '../../components/HeroCardsModule/HeroCardsModule';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';

export default function Projects() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ projects: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Projects</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.projects.nfts.map((question, index) => (
              <question.Component key={index} {...question.props} />
            ))}
            {QUESTIONNAIRE_INPUT_DATA.projects.poaps.map((question, index) => (
              <question.Component key={index} {...question.props} />
            ))}
          </div>
          <Link
            onClick={() => {
              handleSubmit(formRef.current.getData());
            }}
            href="/create/communities"
          >
            Next: Communities & DAOs
          </Link>
        </Form>
      </div>
      <Preview>
        <HeroCardsModule label="Projects" data={projects} />
      </Preview>
    </div>
  );
}
