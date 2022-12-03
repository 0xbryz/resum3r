import React from 'react';
import Link from 'next/link';
import { useAccount, useDisconnect } from 'wagmi';
import styles from './Nav.module.scss';
import NavMenu from './NavMenu';
import Button from '../ConnectButton/Button';

export default function Nav() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <nav className={styles.nav}>
      <div>
        <h1>resum3r</h1>
      </div>
      <div>
        {isConnected ? (
          <NavMenu account={address} disconnect={() => disconnect()} />
        ) : (
          <Button />
        )}
      </div>
    </nav>
  );
}
