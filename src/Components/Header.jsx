// Header.jsx
import { Link } from "react-scroll"; // Using react-scroll for smooth scrolling
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--background-color);
  z-index: 1000; // Ensure the header is above other content

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  a {
    color: var(--text-color);
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
      color: var(--accent-color);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin: 0.5rem 0;
    }
  }
`;

const Logo = styled.h1`
  color: var(--accent-color);
  font-size: 1.5rem;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>KINGTUT</Logo>
    <Nav>
      <Link
        to="home"
        smooth={true}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Home
      </Link>
      <Link
        to="services"
        smooth={true}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Services
      </Link>
      <Link
        to="aboutUs"
        smooth={true}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        About Us
      </Link>
      <Link
        to="contactUs"
        smooth={true}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        Contact Us
      </Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
