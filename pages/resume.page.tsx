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

export default function Home() {
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
