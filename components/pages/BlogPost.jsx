import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownWrapper } from './BlogPost.styled';

const BlogPost = ({ content }) => {
  return (
    <>
      <MarkdownWrapper>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </MarkdownWrapper>
    </>
  );
}

export default BlogPost;