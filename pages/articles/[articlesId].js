import Head from 'next/head'

function articles({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>Reviews test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Article test"/>
        <meta property="og:description" content="A description about article should go here"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.example.com"/>
        <meta property="og:image" content="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"/>
        <meta property="og:image:alt" content="Puppy yawning"/>
        <meta property="og:image:width" content="1200"/> 
        <meta property="og:image:height" content="630"/>
        <meta property="og:site_name" content="Test"/>
    </Head>
    <div>
        <h3>Your Page Title</h3>
        <p>A description should go here</p>
    </div>
  </>
  );
}

export default articles
