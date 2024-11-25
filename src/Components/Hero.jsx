// HeroSection.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/Hero.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: var(--text-color);
  position: relative;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 100vh;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    height: 98vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled(motion.div)`
  z-index: 2;
  max-width: 800px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const CTAButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
  background-color: var(--accent-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: var(--highlight-color);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const HeroSection = () => (
  <HeroContainer id="home" aria-label="Hero Section">
    <Overlay />
    <ContentWrapper
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <h1>Find Your Dream Home</h1>
      <p>Explore the best properties in the USA</p>
      <CTAButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        Get Started
      </CTAButton>
    </ContentWrapper>
  </HeroContainer>
);

export default HeroSection;
