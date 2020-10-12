import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const siteTitle = '김보창 트리';
  const siteUrl = 'https://sexy-bochang.now.sh/';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/og.png"
          key="favicon"
        />
        <meta property="og:title" content={siteTitle} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content="/images/og.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
