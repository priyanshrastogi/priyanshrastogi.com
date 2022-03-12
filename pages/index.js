import Layout from '../components/layouts/Layout';
import Home from '../components/pages/Home';
import MetaTags from '../components/shared/MetaTags';

const Homepage = () => {
  return (
    <>
      <MetaTags title='Priyansh Rastogi'/>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default Homepage;
