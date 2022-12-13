import classnames from 'classnames';
import React, { cloneElement, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import styles from './Dropdown.module.scss';

type DropdownProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  trigger: React.ReactElement;
  menu: React.ReactElement[];
  hasTriggerHover?: boolean;
  position?: 'left' | 'right';
};

type DropdownItemProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  handleOnClick?: () => void;
  hover?: boolean;
  clickable?: boolean;
};

export function GhostDropdownItem() {
  return <div className={styles.ghostDropdownItem}></div>;
}

export function DropdownItem({
  children,
  className,
  handleOnClick,
  hover = true,
  clickable = true,
}: DropdownItemProps): JSX.Element {
  return (
    <span>
      <div
        onClick={handleOnClick}
        className={classnames(styles.dropdownItem, className, {
          [styles.hover]: hover,
          [styles.clickable]: clickable,
        })}
      >
        {children}
      </div>
    </span>
  );
}

export function Dropdown({
  trigger,
  hasTriggerHover = true,
  menu,
  position = 'right',
  ...props
}: DropdownProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false);

  const handleClickOutside = () => {
    setOpen(false);
    setCount(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleOpen = () => {
    setOpen(!open);
    setCount(!count);
  };

  const handleHeaderClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.dropdown} {...props}>
      {cloneElement(trigger, {
        onClick: handleOpen,
        ref: ref,
        className: classnames({
          [styles.trigger]: hasTriggerHover,
          [styles.open]: open,
        }),
      })}
      {open ? (
        count ? (
          <ul
            className={classnames(styles.menu, {
              [styles.left]: position === 'left',
              [styles.right]: position === 'right',
            })}
          >
            {menu.map((menuItem, index) => (
              <li key={index} className={styles.menuItem}>
                {cloneElement(menuItem, {
                  onClick: () => setOpen(false),
                })}
              </li>
            ))}
          </ul>
        ) : null
      ) : null}
    </div>
  );
}
