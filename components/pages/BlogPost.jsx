import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownWrapper } from './BlogPost.styled';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const BlogPost = ({ content }) => {
  return (
    <>
      <MarkdownWrapper>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={atomDark}
                  language={match[1]}
                  PreTag="pre"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </MarkdownWrapper>
    </>
  );
}

export default BlogPost;