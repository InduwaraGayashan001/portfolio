import { Typography, Box } from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import { useEffect, useRef, useState } from "react";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionWrapper title="About Me">
      <Box
        ref={sectionRef}
        sx={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0) scale(1)"
            : "translateX(-50px) scale(0.95)",
          transition: "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: 1.8,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
          }}
        >
          Final-year Electronic & Telecommunication Engineering student at
          University of Moratuwa with a strong focus on artificial intelligence,
          machine learning, and full-stack development. Passionate about
          building intelligent systems that solve real-world problems through
          innovative applications of computer vision, natural language
          processing, and deep learning. Experienced in developing end-to-end
          solutions from concept to deployment, with hands-on expertise in cloud
          technologies, microservices architecture, and modern development
          practices. Committed to continuous learning and contributing to
          impactful projects that advance the field of AI and software
          engineering.
        </Typography>
      </Box>
    </SectionWrapper>
  );
}

export default AboutSection;
