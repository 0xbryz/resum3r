import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/Form/index';
import styles from './Questionnaire.module.scss';
import { certifications } from '../../pages/data';
import Certifications from '../../components/Certifications/Certifications';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';
import Button from '../../components/Button/Button';

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
          <Button style="primary">
            <Link
              onClick={() => {
                handleSubmit(formRef.current.getData());
              }}
              href="/create/projects"
            >
              Projects
            </Link>
          </Button>
        </Form>
      </div>
      <Preview>
        <Certifications data={certifications} style={{ minWidth: '700px' }} />
      </Preview>
    </div>
  );
}
