import Layout from '../components/layouts/Layout';
import About from '../components/pages/About';
import MetaTags from '../components/shared/MetaTags';

const AboutPage = ({ blogPosts }) => {
  return (
    <>
      <MetaTags title='Priyansh Rastogi'/>
      <Layout>
        <About />
      </Layout>
    </>
  );
}

export default AboutPage;
