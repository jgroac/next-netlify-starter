import Head from 'next/head'

function reviews({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>Reviews test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Your Page Title"/>
        <meta property="og:description" content="A description should go here"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.example.com"/>
        <meta property="og:image" content="https://www.dailypaws.com/thmb/ycZwTT36IHfsx7JkL79qZF0pQOw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/siberian-husky-puppy-grass-146571433-2000-101c35f9ac084fdbbc051dced654b5fe.jpg"/>
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

export default reviews
