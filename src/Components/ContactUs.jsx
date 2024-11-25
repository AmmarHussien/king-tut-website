// ContactUsSection.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  font-size: 1.1rem;
  color: var(--highlight-color);

  strong {
    color: var(--accent-color);
  }
`;

const MapContainer = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border: 1px solid var(--highlight-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--accent-color);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 1rem;
  border: 1px solid var(--highlight-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-color);
  outline: none;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--accent-color);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem;
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

const ContactUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <ContactContainer id="contactUs">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <Heading>Contact Us</Heading>
      </motion.div>
      <ContactContent>
        <ContactDetails>
          <Form>
            <Input
              type="text"
              placeholder="Your Name"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            />
            <Input
              type="email"
              placeholder="Your Email"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            />
            <TextArea
              rows="5"
              placeholder="Your Message"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            />
            <SubmitButton
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Send Message
            </SubmitButton>
          </Form>
          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <strong>Phone:</strong> +1 (123) 456-7890
          </ContactItem>
          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <strong>Email:</strong> contact@realestate.com
          </ContactItem>
          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <strong>Address:</strong> 123 Real Estate St, City, Country
          </ContactItem>
        </ContactDetails>
        <MapContainer>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.527650320383!2d-122.4194164848814!3d37.77492927975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e1103dfd%3A0x41a14cde6722b26e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2seg!4v1609882900508!5m2!1sen!2seg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapContainer>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactUsSection;
