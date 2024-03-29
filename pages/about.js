import Layout from '../components/layouts/Layout';
import About from '../components/pages/About';
import MetaTags from '../components/shared/MetaTags';

const AboutPage = () => {
  return (
    <>
      <MetaTags title='About | Priyansh Rastogi'/>
      <Layout>
        <About />
      </Layout>
    </>
  );
}

export default AboutPage;
