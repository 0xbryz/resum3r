import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAccount } from 'wagmi';

import styles from './Nav.module.scss';
import NavMenu from './NavMenu';
import ConnectButton from '../ConnectButton/Button';
import Button from '../Button/Button';
import Lens from '../Icons/Lens/Lens';
import { wagmiClient } from '../../pages/_app.page';
import { useLens } from '../../context/Lens/index';

export default function Nav() {
  const { isConnected } = useAccount();
  const { login, session, profileId } = useLens();

  useEffect(() => {
    // wagmiClient.autoConnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <div>
        <h1>resum3r</h1>
      </div>
      <div>
        {!isConnected && <ConnectButton />}
        {isConnected && !profileId && (
          <Button style="lens" href="https://claim.lens.xyz/">
            <Lens />
            Claim Lens handle
          </Button>
        )}
        {isConnected && profileId && !session && (
          <Button style="lens" onClick={login}>
            <Lens />
            Login with Lens
          </Button>
        )}
        {isConnected && profileId && session && <NavMenu />}
      </div>
    </nav>
  );
}
