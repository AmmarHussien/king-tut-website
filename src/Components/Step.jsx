import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StepContainer = styled(motion.div)`
  display: flex;
  flex-direction: ${({ isLeft }) => (isLeft ? "row" : "row-reverse")};
  align-items: center;
  width: 100%;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const StepContent = styled.div`
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: ${({ isLeft }) => (isLeft ? "0 auto 0 0" : "0 0 0 auto")};
  box-shadow: 0 4px 8px var(--accent-color);

  h3 {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const StepImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: ${({ isLeft }) => (isLeft ? "0 0 0 1rem" : "0 1rem 0 0")};

  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ConnectingLine = styled.div`
  position: absolute;
  top: 50%;
  width: 50%;
  height: 4px;
  background-color: #223c77;
  left: ${({ isLeft }) => (isLeft ? "auto" : "50%")};
  right: ${({ isLeft }) => (isLeft ? "50%" : "auto")};
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: none; /* Hide on smaller screens */
  }
`;

const Step = ({ step, isLeft }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <StepContainer
      ref={ref}
      isLeft={isLeft}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <StepImage src={step.image} alt={step.title} />
      {/* <ConnectingLine isLeft={isLeft} /> */}
      <StepContent isLeft={isLeft}>
        <h3>{step.title}</h3>
        <p>{step.message}</p>
      </StepContent>
    </StepContainer>
  );
};

export default Step;
