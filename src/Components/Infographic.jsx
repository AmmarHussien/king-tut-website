import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  font-family: Arial, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color: var(--accent-color);
`;

const Description = styled.p`
  color: var(--accent-color);
  margin-bottom: 40px;
  font-size: 1em;
`;

const InfographicWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

const Step = styled(motion.div)`
  width: 200px;
  height: 250px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  margin: 10px;
  position: relative;
  box-shadow: 0 4px 8px var(--accent-color);
  color: #333;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

const Icon = styled(motion.div)`
  font-size: 40px;
  margin-bottom: 10px;
  color: ${({ iconColor }) => iconColor};
`;

const StepTitle = styled.h3`
  font-size: 1.1em;
  margin: 5px 0;
  font-weight: bold;
`;

const StepDescription = styled.p`
  font-size: 0.9em;
  color: #666;
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const Infographic = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Container>
      <Title>Minimal Infographic Design</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Description>

      <InfographicWrapper
        as={motion.div}
        variants={containerVariants}
        ref={ref}
        initial={inView ? "visible" : "hidden"}
        animate={inView ? "visible" : "hidden"}
        key="infographic-container"
      >
        {/* Step 1 */}
        <Step variants={itemVariants}>
          <Icon iconColor="#f39c12" whileHover={{ scale: 1.2 }}>
            ⚙️
          </Icon>
          <StepTitle>Lorem Ipsum</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StepDescription>
        </Step>

        {/* Step 2 */}
        <Step variants={itemVariants}>
          <Icon iconColor="#2980b9" whileHover={{ scale: 1.2 }}>
            👤
          </Icon>
          <StepTitle>Lorem Ipsum</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StepDescription>
        </Step>

        {/* Step 3 */}
        <Step variants={itemVariants}>
          <Icon iconColor="#8e44ad" whileHover={{ scale: 1.2 }}>
            🏠
          </Icon>
          <StepTitle>Lorem Ipsum</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StepDescription>
        </Step>

        {/* Step 4 */}
        <Step variants={itemVariants}>
          <Icon iconColor="#27ae60" whileHover={{ scale: 1.2 }}>
            📶
          </Icon>
          <StepTitle>Lorem Ipsum</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StepDescription>
        </Step>

        {/* Step 5 */}
        <Step variants={itemVariants}>
          <Icon iconColor="#bdc3c7" whileHover={{ scale: 1.2 }}>
            🔍
          </Icon>
          <StepTitle>Lorem Ipsum</StepTitle>
          <StepDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StepDescription>
        </Step>
      </InfographicWrapper>
    </Container>
  );
};

export default Infographic;
