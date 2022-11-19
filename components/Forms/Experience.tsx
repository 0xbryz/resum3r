import { useRef } from 'react';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Forms.module.scss';
import classnames from 'classnames';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import BioCard from '../BioCard/BioCard';
import { experience } from '../../pages/data';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    console.log('🚀 ', data);
    try {
      formRef.current.setErrors({});

      setFormValues(data);
      nextFormStep();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <div className={styles.left}>
        <h1 className="headline">Experience</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            <TextField name="FirstName" label="First Name" />
            <TextField name="LastName" label="Last Name" />
            <TextField name="FirstName" label="First Name" />
            <TextField name="LastName" label="Last Name" />
          </div>
          <Button>Next: Skills</Button>
        </Form>
      </div>
      <div className={styles.right}>
        <ExperienceCard className={styles.component} data={experience} />
      </div>
    </div>
  );
}
