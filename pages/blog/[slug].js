import fs from 'fs';
import { join } from 'path';
import Layout from '../../components/layouts/Layout';
import BlogPost from '../../components/pages/BlogPost';
import MetaTags from '../../components/shared/MetaTags';
import { getParsedFileContentBySlug } from '../../lib/markdown';

const BlogPostPage = ({ metadata, content }) => {
  return (
    <>
      <MetaTags title={metadata.title} description={metadata.description} />
      <Layout hideHeader>
        <BlogPost content={content} />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const POSTS_PATH = join(process.cwd(), 'posts');
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const POSTS_PATH = join(process.cwd(), 'posts');
  const markdown = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  return {
    props: markdown
  }
}

export default BlogPostPage;
