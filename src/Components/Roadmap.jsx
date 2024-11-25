import styled from "styled-components";
import Step from "./Step";

const Container = styled.div`
  background-color: var(--background-color);
  padding: 1rem;
`;

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--background-color);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: var(--accent-color);
  transform: translateX(-50%);
  z-index: 0;

  @media (max-width: 768px) {
    left: 5%;
    width: 2px;
  }

  @media (max-width: 480px) {
    left: 4%;
    width: 2px;
  }
`;

const steps = [
  {
    title: "Step 1: The Power of Numbers",
    message: "Looking to buy a home?...",
    image: "/vite.svg",
  },
  {
    title: "Step 2: Mortgage Prep",
    message: "Before you apply for a mortgage...",
    image: "/Hero.jpg",
  },
  {
    title: "Step 3: The Power of Numbers",
    message: "Looking to buy a home?...",
    image: "/vite.svg",
  },
  {
    title: "Step 4: Mortgage Prep",
    message: "Before you apply for a mortgage...",
    image: "/Hero.jpg",
  },
  {
    title: "Step 5: The Power of Numbers",
    message: "Looking to buy a home?...",
    image: "/vite.svg",
  },
  {
    title: "Step 6: Mortgage Prep",
    message: "Before you apply for a mortgage...",
    image: "/Hero.jpg",
  },
  {
    title: "Step 7: Mortgage Prep",
    message: "Before you apply for a mortgage...",
    image: "/Hero.jpg",
  },
];

const Roadmap = () => (
  <Container>
    <RoadmapContainer>
      <VerticalLine />
      {steps.map((step, index) => (
        <Step key={index} step={step} isLeft={index % 2 === 0} />
      ))}
    </RoadmapContainer>
  </Container>
);

export default Roadmap;
