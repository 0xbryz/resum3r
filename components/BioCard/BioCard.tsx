import React from 'react';
import BaseCard from '../BaseCard/BaseCard';
import Button from '../Button/Button';
import classnames from 'classnames';
import styles from './BioCard.module.scss';
import { getShortenName } from '../../utils';
import {
  Dropdown,
  DropdownItem,
  GhostDropdownItem,
} from '../Dropdown/Dropdown';
import Eth from '../Icons/ETH/Eth';
import Web from '../Icons/Web/Web';
import Discord from '../Icons/Discord/Discord';
import Twitter from '../Icons/Twitter/Twitter';
import Instagram from '../Icons/Instagram/Instagram';
import Link from 'next/link';
import { getCountryEmoji } from '../../utils';

export type BioCardProps = React.HTMLAttributes<HTMLDivElement>;

const addressFPO = '0x0000...0000';

const dropdownElements = (data) => {
  return [
    <Link
      target="_blank"
      href={`https://etherscan.io/address/${data.address}`}
      key={data.address}
    >
      <DropdownItem key={data.address}>
        <Eth />
        {data.address ? getShortenName(data.address) : addressFPO}
      </DropdownItem>
    </Link>,
    data.website ? (
      <Link target="_blank" href={`https://${data.website}`} key={data.website}>
        <DropdownItem>
          <Web />
          {data.website}
        </DropdownItem>
      </Link>
    ) : (
      <GhostDropdownItem />
    ),
    data.discord ? (
      <Link
        target="_blank"
        href={`https://discord.com/channels/${data.discord}`}
        key={data.discord}
      >
        <DropdownItem>
          <Discord />
          {data.discord}
        </DropdownItem>
      </Link>
    ) : (
      <GhostDropdownItem />
    ),
    data.twitter ? (
      <Link
        target="_blank"
        href={`https://twitter.com/${data.twitter}`}
        key={data.twitter}
      >
        <DropdownItem>
          <Twitter />
          {data.twitter}
        </DropdownItem>
      </Link>
    ) : (
      <GhostDropdownItem />
    ),
    data.instagram ? (
      <Link
        target="_blank"
        href={`https://www.instagram.com/${data.instagram}`}
        key={data.instagram}
      >
        <DropdownItem>
          <Instagram />
          {data.instagram}
        </DropdownItem>
      </Link>
    ) : (
      <GhostDropdownItem />
    ),
  ];
};

export default function BioCard({ data, ...props }): JSX.Element {
  return (
    <BaseCard {...props}>
      {data.map((info, i) => {
        return (
          <div key={i} className={styles.bio}>
            <div className={styles.details}>
              <h1 className={classnames(styles.name, ['intro'])}>
                {info.firstName} {info.lastName}
              </h1>
              <h2 className="quote mediumgray">{info.title}</h2>
              <span className="body blue">{info.pronouns}</span>
              <span className={classnames(styles.flag, ['headline'])}>
                {info.nationality.map((option) => (
                  <p key={option.label}>{getCountryEmoji(option.label)}</p>
                ))}
              </span>
            </div>
            <div className={styles.available}>
              <p>{info.availableForHire}</p>
            </div>
            <div className={styles.description}>
              <p className="darkgray">{info.description}</p>
            </div>
            <div className={styles.buttons}>
              <Dropdown
                position="left"
                hasTriggerHover={false}
                trigger={
                  <div>
                    <Button style="secondary">
                      {info.address ? getShortenName(info.address) : addressFPO}
                    </Button>
                  </div>
                }
                menu={dropdownElements(info)}
              />
              <Button style="secondary" className="label">
                Follow
              </Button>
            </div>
          </div>
        );
      })}
    </BaseCard>
  );
}
