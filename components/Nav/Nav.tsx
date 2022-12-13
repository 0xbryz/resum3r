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
import Logo from '../Icons/Logo';
import { useRouter } from 'next/router';
import classnames from 'classnames';

const pagePath = '/create';

export default function Nav() {
  const { isConnected } = useAccount();
  const { login, session, profileId } = useLens();

  const router = useRouter();
  const pathName = router.asPath;
  const isPage = pathName.includes(pagePath);

  useEffect(() => {
    // wagmiClient.autoConnect();
  }, []);

  return (
    <nav
      className={classnames(styles.nav, {
        [styles.logoHidden]: isPage,
      })}
    >
      {isPage ? null : <Logo />}
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
