import fs from 'fs';
import { join } from 'path';
import orderBy from 'lodash/orderBy';
import Layout from '../../components/layouts/Layout';
import Blog from '../../components/pages/Blog';
import MetaTags from '../../components/shared/MetaTags';
import { getParsedFileContentBySlug } from '../../lib/markdown';

const Blogpage = ({ blogPosts }) => {
  return (
    <>
      <MetaTags title='Blog | Musings on Tech, Finance and Life | Priyansh Rastogi'/>
      <Layout>
        <Blog posts={blogPosts} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const POSTS_PATH = join(process.cwd(), 'posts');

  const slugs = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md?$/, ''));

  let blogPosts = slugs.map((slug) => 
    getParsedFileContentBySlug(slug, POSTS_PATH)
      .metadata
  );

  blogPosts = blogPosts.filter(post => post.published);

  blogPosts = orderBy(blogPosts, 'date', ['desc']);

  return {
    props: {
      blogPosts
    }
  }
}

export default Blogpage;
