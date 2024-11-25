// Footer.jsx
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: var(--background-color);
  padding: 1rem 2rem;
  text-align: center;
  color: var(--text-color);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 RealEstate. All Rights Reserved.</p>
  </FooterContainer>
);

export default Footer;
