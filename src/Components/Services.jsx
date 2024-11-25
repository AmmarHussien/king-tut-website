import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesContainer = styled.section`
  padding: 3rem 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ServiceHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--accent-color);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--background-color);
  border: 1px solid var(--highlight-color);
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: var(--text-color);
    font-size: 1rem;
    line-height: 1.5;
  }

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }

    img {
      max-width: 150px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }

    img {
      max-width: 120px;
    }
  }
`;

const serviceData = [
  {
    title: "Business Setup",
    description:
      "Complete solutions for business formation, legal structures, and paperwork.",
    image: "/Hero.jpg",
  },
  {
    title: "Public Relations",
    description: "Strategic communication and media relations services.",
    image: "/Hero.jpg",
  },
  {
    title: "Office Setup & Rentals",
    description: "Office solutions and transportation rentals.",
    image: "/Hero.jpg",
  },
  {
    title: "Visa Services",
    description: "Employee visa processing and medical test assistance.",
    image: "/Hero.jpg",
  },
  {
    title: "Real Estate Marketing",
    description: "Digital marketing, property listings, and virtual tours.",
    image: "/Hero.jpg",
  },
  {
    title: "Event Management",
    description: "Professional event planning and management services.",
    image: "/Hero.jpg",
  },
];

const ServicesPage = () => {
  return (
    <ServicesContainer id="services">
      <ServiceHeading>Our Services</ServiceHeading>
      <ServiceGrid>
        {serviceData.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <ServiceCard
              key={index}
              ref={ref} // Each card has its own ref
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}} // Animates independently
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          );
        })}
      </ServiceGrid>
    </ServicesContainer>
  );
};

export default ServicesPage;
