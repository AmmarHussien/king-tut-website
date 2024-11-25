// SplashScreen.js
import styled, { keyframes } from "styled-components";

// Animation for fading in/out the splash screen
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const SplashScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #040404; /* Your background color */
  /* color: white; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  animation: ${fadeOut} 0.1s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay || 0}s;
`;

const SplashContent = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const SplashScreen = ({ delay }) => (
  <SplashScreenWrapper delay={delay}>
    <SplashContent>
      <img src="/MainLogo.jpeg" alt="Logo" width="100%" />
    </SplashContent>
  </SplashScreenWrapper>
);

export default SplashScreen;
