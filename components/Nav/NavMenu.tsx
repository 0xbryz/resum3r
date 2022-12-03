import classNames from 'classnames';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown';
import Logout from '../Icons/Logout/Logout';
import Question from '../Icons/Question/Question';
import styles from './Nav.module.scss';
import { getShortenName } from '../../utils';

export default function NavMenu({ account, disconnect }) {
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
        <DropdownItem key={account} className="headline-reduced">
          <Avatar
            src="https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=2000"
            size="medium"
          />
          {getShortenName(account)}
        </DropdownItem>,
        <DropdownItem key={account} className="label">
          <Question />
          Help
        </DropdownItem>,
        <DropdownItem
          key={account}
          className="label"
          handleOnClick={disconnect}
        >
          <Logout />
          Disconnect
        </DropdownItem>,
      ]}
    />
  );
}
