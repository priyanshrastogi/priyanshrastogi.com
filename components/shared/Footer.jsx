import { Divider, FooterText, FooterWrapper, Link, SocialLinks, ThemeMode } from "./Footer.styled"

const Footer = () => {
  return (
    <FooterWrapper>
      <Divider />
      <SocialLinks>
        <Link>Twitter</Link>
        <Link>GitHub</Link>
        <Link>Instagram</Link>
        <Link>LinkedIn</Link>
        <Link>Medium</Link>
        <Link>Email</Link>
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