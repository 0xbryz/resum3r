import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import Button from '../Button/Button';
import classnames from 'classnames';
import styles from './BioCard.module.scss';

export default function BioCard({ data }): JSX.Element {
  return (
    <BaseCard>
      <div className={styles.bio}>
        {data.map((info) => {
          return (
            <>
              <div className={styles.details}>
                <h1 className={classnames(styles.name, ['intro'])}>
                  {info.name}
                </h1>
                <h2 className="quote mediumgray">{info.title}</h2>
                <span className="body blue">{info.pronouns}</span>
                <span className={classnames(styles.flag, ['headline'])}>
                  🇧🇷
                </span>
              </div>
              <div className={styles.available}>
                <p>Available</p>
              </div>
              <div className={styles.description}>
                <p className="darkgray">{info.description}</p>
              </div>
              <div className={styles.buttons}>
                <Button>
                  <div>{info.address}</div>
                </Button>
                <Button className="label">Follow</Button>
                <p>QR Code</p>
              </div>
            </>
          );
        })}
      </div>
    </BaseCard>
  );
}
