import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/Form/index';
import styles from './Questionnaire.module.scss';
import Button from '../../components/Button/Button';
import { conferences } from '../../pages/data';
import PillsModule from '../../components/PillsModule/PillsModule';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Preview from '../../components/Preview/Preview';

export default function Conferences() {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ conferences: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Conferences & Events</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.conferences.nfts.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
            {QUESTIONNAIRE_INPUT_DATA.conferences.poaps.map(
              (question, index) => (
                <question.Component key={index} {...question.props} />
              )
            )}
          </div>
          <Button>Submit</Button>
        </Form>
      </div>
      <Preview>
        <PillsModule
          data={conferences}
          label="Conferences & Events"
          style={{ maxWidth: '388px' }}
        />
      </Preview>
    </div>
  );
}
