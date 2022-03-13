import { useContext } from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BackText, BackWrapper, BlogPostWrapper, Divider, MarkdownWrapper, PostHeader, PublishedText } from './BlogPost.styled';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FaArrowLeft } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { ThemeMode } from '../shared/Header.styled';
import { ToggleThemeContext } from '../extra/ToggleThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

const BlogPost = ({ content, metadata }) => {

  const theme = useTheme();
  const { state, dispatch } = useContext(ToggleThemeContext);

  const toggleMode = () => {
    if (state.darkMode) {
      dispatch({ type: "LIGHTMODE" });
    } else {
      dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <BlogPostWrapper>
      <PostHeader>
        <PublishedText>Published on {moment(metadata.date).format('MMM DD, YYYY')}</PublishedText>
        <ThemeMode>
          {state.darkMode ? <FiSun color={theme.colors.secondary} size={20} onClick={toggleMode} /> : <FiMoon color={theme.colors.secondary} size={20} onClick={toggleMode} />}
        </ThemeMode>
      </PostHeader>
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
      <Divider />
      <Link href="/blog" passHref>
        <BackWrapper>
          <FaArrowLeft size={20} color={theme.colors.secondary} />
          <BackText>Back to All Posts</BackText>
        </BackWrapper>
      </Link>
    </BlogPostWrapper>
  );
}

export default BlogPost;