import React, { useState } from 'react';
import styles from './CreateResume.module.scss';
import classnames from 'classnames';
import { Experience, PersonalInfo } from '../../components/Forms';
import BioCard from '../../components/BioCard/BioCard';
import { bio, experience } from '../data';

export default function Home() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <>
      {formStep >= 0 && (
        <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
      )}
      {formStep >= 1 && (
        <Experience formStep={formStep} nextFormStep={nextFormStep} />
      )}
    </>
  );
}
