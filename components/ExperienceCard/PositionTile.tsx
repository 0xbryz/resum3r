import React from 'react';
import classnames from 'classnames';
import styles from './PositionTile.module.scss';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';

export type PositionTileProps = React.HTMLAttributes<HTMLElement> & {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  companyLogo?: string;
};

export default function PositionTile({
  title,
  company,
  location,
  startDate,
  endDate,
  employmentType,
  companyLogo,
}: PositionTileProps): JSX.Element {
  return (
    <div className={styles.experience}>
      <div className={styles.job}>
        <div className={styles.avatar}>
          <Avatar size="medium" outline src={companyLogo} />
        </div>
        <div className={styles.details}>
          <p className={classnames(styles.title, ['body-bold'])}>{title}</p>
          <div className={styles.location}>
            <p className="body-reduced">{company}</p>
            <p className="body-reduced">{location}</p>
          </div>
          <p
            className={classnames(styles.date, ['caption'])}
          >{`${startDate} — ${endDate}`}</p>
        </div>
      </div>
      <Tag className={styles.tag} text={employmentType} rounded />
    </div>
  );
}
