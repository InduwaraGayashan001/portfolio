import { Typography } from "@mui/material";
import SectionWrapper from "./SectionWrapper";

function AboutSection() {
  return (
    <SectionWrapper title="About Me">
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
        systems, and software development. I enjoy building innovative solutions
        that integrate machine learning, computer vision, IoT, and full-stack
        development to address real-world challenges. I thrive in collaborative
        environments, enjoy leading and contributing to teams, and am always
        eager to learn and explore emerging technologies. Currently, I’m
        expanding my skills in advanced ML and AI techniques, data pipelines and
        data engineering, and full-stack web development.
      </Typography>
    </SectionWrapper>
  );
}

export default AboutSection;
