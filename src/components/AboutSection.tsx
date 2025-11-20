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
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          I am an Electronic and Telecommunication Engineering undergraduate at
          the University of Moratuwa with a strong passion for AI, embedded
          systems, and software development. I enjoy building innovative
          solutions that integrate machine learning, computer vision, IoT, and
          full-stack development to address real-world challenges. I thrive in
          collaborative environments, enjoy leading and contributing to teams,
          and am always eager to learn and explore emerging technologies.
          Currently, I’m expanding my skills in advanced ML and AI techniques,
          data pipelines and data engineering, and full-stack web development.
        </Typography>
      </Box>
    </SectionWrapper>
  );
}

export default AboutSection;
