import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Questionnaire.module.scss';
import { certifications } from '../../pages/data';
import Certifications from '../../components/Certifications/Certifications';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';

export default function Credentials() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ credentials: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Credentials & Certifications</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.credentials.nfts.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
            {QUESTIONNAIRE_INPUT_DATA.credentials.poaps.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
          </div>
          <Link
            onClick={() => {
              handleSubmit(formRef.current.getData());
            }}
            href="/create/projects"
          >
            Projects
          </Link>
        </Form>
      </div>
      <Preview>
        <Certifications data={certifications} style={{ minWidth: '700px' }} />
      </Preview>
    </div>
  );
}
