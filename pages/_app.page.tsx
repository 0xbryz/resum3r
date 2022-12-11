import FormProvider from '../context/Form';
import '../styles/globals.scss';
import '@rainbow-me/rainbowkit/styles.css';
import {
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import LensProvider from '../context/Lens';
import Nav from '../components/Nav/Nav';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;

const { chains, provider } = configureChains(
  [chain.polygon],
  [alchemyProvider({ apiKey: alchemyId }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'resum3r',
  chains,
});

export const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <LensProvider>
          <FormProvider>
            <Nav />
            <Component {...pageProps} />
          </FormProvider>
        </LensProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
