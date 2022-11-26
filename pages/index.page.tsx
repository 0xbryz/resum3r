import styles from '../styles/Template.module.scss';
import classnames from 'classnames';
import BaseCard from '../components/BaseCard/BaseCard';
import BioCard from '../components/BioCard/BioCard';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import Location from '../components/Location/Location';
import {
  bio,
  experience,
  certifications,
  projects,
  achievements,
  communities,
  conferences,
} from './data';
import SkillsCard from '../components/SkillsCard/SkillsCard';
import Achievements from '../components/AchievementsCard/Achievements';
import Certifications from '../components/Certifications/Certifications';
import HeroCardsModule from '../components/HeroCardsModule/HeroCardsModule';
import PillsModule from '../components/PillsModule/PillsModule';
import { useEffect } from 'react';
import swr from "swr";

const fetchHello = (userId) =>
  swr(
    userId,
    () => fetch(`/api/poaps/0xcf82fdd676ffebf4f5ebe344b06f76110be6942b/`).then((res) => res.json()),
    { revalidateOnFocus: true }
  );


export default function Home() {

  const { data, error } = fetchHello('hello');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className={styles.template}>
      <div className={classnames(styles.column, styles['column--left'])}>
        <BioCard data={bio} />
        <BaseCard>
          <Location location="Naberezhnye Tchelny, Russia" />
        </BaseCard>
        <ExperienceCard data={experience} />
        <SkillsCard />
      </div>
      <div className={classnames(styles.column, styles['column--center'])}>
        <Achievements data={achievements} />
        <Certifications
          data={certifications}
          label="Credentials & Certifications"
        />
      </div>
      <div className={classnames(styles.column, styles['column--right'])}>
        <HeroCardsModule data={projects} label="Projects" />
        <PillsModule data={communities} label="Communities & DAOs" />
        <PillsModule data={conferences} label="Conferences & Events" />
      </div>
    </main>
  );
}
