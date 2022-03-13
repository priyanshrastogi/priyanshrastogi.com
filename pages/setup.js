import Layout from '../components/layouts/Layout';
import Setup from '../components/pages/Setup';
import MetaTags from '../components/shared/MetaTags';

const SetUpPage = () => {
  return (
    <>
      <MetaTags title='Setup | Priyansh Rastogi'/>
      <Layout>
        <Setup />
      </Layout>
    </>
  );
}

export default SetUpPage;
