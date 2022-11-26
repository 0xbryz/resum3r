import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Questionnaire.module.scss';
import { communities } from '../../pages/data';
import PillsModule from '../../components/PillsModule/PillsModule';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';

export default function Communities() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ communities: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Communities & DAOs</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.communities.nfts.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
            {QUESTIONNAIRE_INPUT_DATA.communities.poaps.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
          </div>
          <Link
            onClick={() => {
              handleSubmit(formRef.current.getData());
            }}
            href="/create/conferences"
          >
            Next: Conferences & Events
          </Link>
        </Form>
      </div>
      <Preview>
        <PillsModule data={communities} label="Communities & DAOs" />
      </Preview>
    </div>
  );
}
