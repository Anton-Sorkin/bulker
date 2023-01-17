import {
  FooterContainer,
  LowFooterDiv,
  MidFooterDiv,
  TopFooterDiv,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <TopFooterDiv>
        <h2>Need help?</h2>
        <h1>Follow us</h1>
      </TopFooterDiv>
      <MidFooterDiv>
        <h2>Contact us</h2>
        <div>
          <h2>Instagram</h2>
          <h2>Facebook</h2>
          <h2>Twitter</h2>
        </div>
      </MidFooterDiv>
      <LowFooterDiv>
        <h2>
          <a href="/">Go back to start</a>
        </h2>
      </LowFooterDiv>
    </FooterContainer>
  );
};

export default Footer;
