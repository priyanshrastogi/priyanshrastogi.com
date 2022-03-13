import { Divider, FooterText, FooterWrapper, Link, SocialLinks, ThemeMode } from "./Footer.styled"

const Footer = () => {
  return (
    <FooterWrapper>
      <Divider />
      <SocialLinks>
        <Link href="https://twitter.com/priyanshx7" target="_blank">Twitter</Link>
        <Link href="https://github.com/priyanshrastogi" target="_blank">GitHub</Link>
        <Link href="https://instagram.com/priyanshrastogix" target="_blank">Instagram</Link>
        <Link href="https://linkedin.com/in/priyanshrastogi" target="_blank">LinkedIn</Link>
        <Link href="https://medium.com/@priyanshrastogi" target="_blank">Medium</Link>
        <Link href="mailto:hello@priyanshrastogi.com" target="_blank">Email</Link>
      </SocialLinks>
      <FooterText>
        Copyright &copy; {new Date().getFullYear()}, Priyansh Rastogi.
      </FooterText>
      <FooterText>
        Powered by Next.js, Hosted on Vercel.
      </FooterText>
      <ThemeMode>
        <FooterText></FooterText>
      </ThemeMode>
    </FooterWrapper>
  );
}

export default Footer;