import type { AppProps } from 'next/app';
import { setAxiosDefault } from 'utils/axios';

setAxiosDefault();

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
