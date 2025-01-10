import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Rotimi Oluwafemi is an avid full stack developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Rotimi Oluwafemi, developer portfolio, mern stack, next.js, react, node.js, express, mongodb"
      />
      <meta property="og:title" content="Rotimi Oluwafemi's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/oNEn6Z9.png" />
      <meta property="og:url" content={process.env.APP_URL} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Rotimi Oluwafemi',
};
