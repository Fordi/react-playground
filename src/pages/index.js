import Head from 'next/head';
import styles from './index.module.scss';

export default function App() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Next App</title>
      </Head>
      <noscript> You need to enable JavaScript to run this app. </noscript>
      <main className={styles.main}>
        Basic content
      </main>
    </>
  );
}