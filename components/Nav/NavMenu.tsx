import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown';
import Logout from '../Icons/Logout/Logout';
import Question from '../Icons/Question/Question';
import styles from './Nav.module.scss';
import { getShortenName } from '../../utils';
import classnames from 'classnames';
import { useLens } from '../../context/Lens/index';
import { useAccount } from 'wagmi';

export default function NavMenu() {
  const { address } = useAccount();
  const { profileId, handle, handleDisconnect } = useLens();

  return (
    <Dropdown
      trigger={
        <div>
          <Avatar
            src="https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000"
            size="small"
          />
        </div>
      }
      menu={[
        <DropdownItem key={address}>
          <Avatar
            src="https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000"
            size="medium"
          />
          <div>
            <h2 className="headline-reduced">{getShortenName(address)}</h2>
            {profileId && <p className="mediumgray">{`@${handle}`}</p>}
          </div>
        </DropdownItem>,
        <DropdownItem key={address} className="label">
          <Question />
          Help
        </DropdownItem>,
        <DropdownItem
          key={address}
          className="label"
          handleOnClick={handleDisconnect}
        >
          <Logout />
          Disconnect
        </DropdownItem>,
      ]}
    />
  );
}
