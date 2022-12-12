import FormProvider from '../context';
import { NFTProvider } from '../context/useNFTs';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <NFTProvider>
        <Component {...pageProps} />
      </NFTProvider>
    </FormProvider>
  );
}

export default MyApp;
