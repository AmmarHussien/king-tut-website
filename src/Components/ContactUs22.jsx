// ContactUsPage.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactContainer = styled.section`
  padding: 3rem 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled(motion.input)`
  padding: 0.8rem;
  border: 1px solid var(--highlight-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  outline: none;

  &:focus {
    border-color: var(--accent-color);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 0.8rem;
  border: 1px solid var(--highlight-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  outline: none;
  resize: vertical;

  &:focus {
    border-color: var(--accent-color);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: none;
  background-color: var(--highlight-color);
  color: var(--background-color);
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContactUsPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Trigger when 30% of the card is in view
  });
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <Form>
        <Input
          type="text"
          placeholder="Your Name"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
          transition={{ duration: 0.5, delay: 0.1 }} // Add delay based on index
        />
        <Input
          type="email"
          placeholder="Your Email"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
          transition={{ duration: 0.5, delay: 0.2 }} // Add delay based on index
        />
        <TextArea
          rows="5"
          placeholder="Your Message"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
          transition={{ duration: 0.5, delay: 0.3 }} // Add delay based on index
        />
        <SubmitButton
          type="submit"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
          transition={{ duration: 0.5, delay: 0.4 }} // Add delay based on index
        >
          Send Message
        </SubmitButton>
      </Form>
      <p style={{ marginTop: "1.5rem" }}>
        Or reach us at <strong>contact@realestate.com</strong>
      </p>
    </ContactContainer>
  );
};

export default ContactUsPage;
