import { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useFormData } from '../../context/index';
import styles from './Forms.module.scss';
import classnames from 'classnames';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import BioCard from '../BioCard/BioCard';
import { bio } from '../../pages/data';
import RadioButton from '../RadioButton/RadioButton';
import TextArea from '../TextArea/TextArea';
import Checkbox from '../Checkbox/Checkbox';
import DatePicker from '../DatePicker/DatePicker';
import Select from '../Select/Select';
import { PERSONAL_INFO_INPUT_DATA } from './PersonalInfo.data';

export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data) {
    console.log('✨ ', data);
    try {
      formRef.current.setErrors({});

      setFormValues(data);
      nextFormStep();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <div className={styles.left}>
        <h1 className="headline">Personal Details</h1>
        <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.container}>
            <TextField name="FirstName" label="First Name" />
            <TextField name="LastName" label="Last Name" />
            <RadioButton
              label="Preferred pronouns"
              name="pronouns"
              options={PERSONAL_INFO_INPUT_DATA.pronouns}
            />
            <TextArea name="description" />
            <Checkbox
              className="circle"
              name="availableForHire"
              options={[
                {
                  id: 'lookingForOpportunitites',
                  value: 'Yes',
                  label: 'I am currently looking for new opportunities',
                  image:
                    'https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000',
                },
              ]}
            />
            <DatePicker name="StartDate" label="Start Date" />
            <Select
              label="Employment type"
              name="employmentTypes"
              options={PERSONAL_INFO_INPUT_DATA.employmentTypes}
            />
          </div>
          <Button>Next: Experience</Button>
        </Form>
      </div>
      <div className={styles.right}>
        <BioCard className={styles.component} data={bio} />
      </div>
    </div>
  );
}
