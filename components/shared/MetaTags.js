import React from 'react';
import Head from 'next/head';

const MetaTags = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          description ? description : 'Priyansh Rastogi is a Full Stack Developer based in Gurgaon, India.'
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://priyanshrastogi.com" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description ? description : 'Priyansh Rastogi is a Full Stack Developer based in Gurgaon, India.'
        }
      />
      <meta property="og:site_name" content="Priyansh Rastogi" />
    </Head>
  )
}

export default MetaTags;