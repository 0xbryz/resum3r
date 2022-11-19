import { useRef } from 'react';
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

export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();
  const formRef = useRef(null);

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
              options={[
                { id: 'She/Her', label: 'She/Her' },
                { id: 'He/Him', label: 'He/Him' },
                { id: 'They/Them', label: 'They/Them' },
              ]}
            />
            <TextArea
              name="description"
              placeholder="Type your description here..."
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
