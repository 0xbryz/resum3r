import { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Questionnaire.module.scss';
import BioCard from '../../components/BioCard/BioCard';
import { bio } from '../data';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';

export default function PersonalDetails() {
  const { setFormValues } = useFormData();
  const formRef = useRef<FormHandles>(null);

  const [bioData, setBioData] = useState(bio);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ personalInfo: data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Personal Details</h1>
        <Form
          // pass lens profile data to initialData below
          initialData={bio[0]}
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={(e) => {
            const a = formRef.current.getData();
            setBioData([a as any]);
          }}
          className={styles.form}
        >
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.personalDetails.map((question, index) => (
              <question.Component key={index} {...question.props} />
            ))}
          </div>
          <Link
            onClick={() => {
              handleSubmit(formRef.current.getData());
            }}
            href="/create/experience"
          >
            Next: Experience
          </Link>
        </Form>
      </div>
      <Preview>
        <BioCard data={bioData} style={{ maxWidth: '388px' }} />
      </Preview>
    </div>
  );
}
