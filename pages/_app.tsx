import type { AppProps } from 'next/app';
import Head from 'next/head';
import { setAxiosDefault } from 'utils/axios';

setAxiosDefault();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Old Viral Videos</title>
        <meta
          name="description"
          content="Take a trip down memory lane and watch some old viral videos"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
