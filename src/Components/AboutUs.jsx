// AboutUsPage.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutContainer = styled.section`
  padding: 3rem 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--accent-color);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const AboutText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1.125rem;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TeamMember = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--highlight-color);
  border-radius: 8px;
  padding: 1.5rem;
  color: var(--text-color);
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 1rem;
    color: var(--accent-color);
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }

  p {
    font-size: 1rem;
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const AboutUsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Trigger when 30% of the card is in view
  });

  return (
    <AboutContainer id="aboutUs">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.1 }}
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
      >
        <AboutHeading>About Us</AboutHeading>
        <AboutText>
          We are a dedicated team of real estate professionals with a passion
          for helping people find their dream homes. Our mission is to provide
          top-quality service and guidance in the real estate market of the UAE.
        </AboutText>

        <h3 style={{ color: "var(--highlight-color)", marginTop: "2rem" }}>
          Our Team
        </h3>
      </motion.div>

      <TeamContainer>
        {[
          { name: "John Doe", image: "/Hero.jpg" },
          { name: "Jane Smith", image: "/Hero.jpg" },
          { name: "Mark Taylor", image: "/Hero.jpg" },
        ].map(({ name, image }, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });
          return (
            <TeamMember
              key={index}
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.5 * index }}
              ref={ref}
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
            >
              <img
                src={image}
                alt={name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{name}</h3>
              <p>Real Estate Specialist</p>
            </TeamMember>
          );
        })}
      </TeamContainer>
    </AboutContainer>
  );
};

export default AboutUsPage;
