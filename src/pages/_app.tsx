/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/css/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
