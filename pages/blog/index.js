import Layout from '../../components/layouts/Layout';
import Blog from '../../components/pages/Blog';
import MetaTags from '../../components/shared/MetaTags';

const Blogpage = () => {
  return (
    <>
      <MetaTags title='Blog | Musings on Tech, Finance and Life | Priyansh Rastogi'/>
      <Layout>
        <Blog />
      </Layout>
    </>
  );
}

export default Blogpage;
