import { useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useFormData } from '../../context/Form/index';
import styles from './Questionnaire.module.scss';
import BioCard from '../../components/BioCard/BioCard';
import { QUESTIONNAIRE_INPUT_DATA } from './Questionnaire.data';
import Link from 'next/link';
import Preview from '../../components/Preview/Preview';
import Button from '../../components/Button/Button';
import { useLens } from '../../context/Lens/index';
import { useAccount } from 'wagmi';

export default function PersonalDetails() {
  const { address } = useAccount();
  const { setFormValues } = useFormData();
  const formRef = useRef<FormHandles>(null);
  const { personalDetails } = useLens();

  const [bioData, setBioData] = useState(personalDetails);

  useEffect(() => {
    setBioData(personalDetails);
  }, [personalDetails]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      setFormValues({ personalInfo: data });
    } catch (error) {
      console.log(error);
    }
  }

  const getInputData = () => {
    const data = Object.assign(formRef.current.getData(), {
      address: address,
    });
    setBioData([data as any]);
  };

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <h1 className="headline">Personal Details</h1>
        <Form
          // pass lens profile data to initialData below
          initialData={personalDetails[0]}
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={() => getInputData()}
          onPointerEnter={() => getInputData()}
          className={styles.form}
        >
          <div className={styles.container}>
            {QUESTIONNAIRE_INPUT_DATA.personalDetails.map((question, index) => (
              <question.Component key={index} {...question.props} />
            ))}
          </div>
          <Button style="primary">
            <Link
              onClick={() => {
                handleSubmit(formRef.current.getData());
              }}
              href="/create/experience"
            >
              Next: Experience
            </Link>
          </Button>
        </Form>
      </div>
      <Preview>
        <BioCard data={bioData} style={{ width: '388px' }} />
      </Preview>
    </div>
  );
}
