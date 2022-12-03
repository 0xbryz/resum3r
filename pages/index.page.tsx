import styles from '../styles/Template.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Nav from '../components/Nav/Nav';

export default function Home() {
  return (
    <main className={styles.template}>
      <Nav />
    </main>
  );
}
