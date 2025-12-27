import { Box, useTheme } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { MilestonesSection } from "../components/MilestonesSection";
import ContactSection from "../components/ContactSection";

function Portfolio() {
  const theme = useTheme();

  const bgColor=
    theme.palette.mode === "dark"
      ? "rgba(10, 10, 25, 0.85)"
      : "rgba(255, 255, 255, 0.9)";

  return (
    <Box>
      <Box id="home" sx={{ backgroundColor: bgColor}}>
        <HeroSection />
      </Box>
      <Box id="about" sx={{ backgroundColor: bgColor }}>
        <AboutSection />
      </Box>
      <Box id="experience" sx={{ backgroundColor: bgColor }}>
        <ExperienceSection />
      </Box>
      <Box id="skills" sx={{ backgroundColor: bgColor }}>
        <SkillsSection />
      </Box>
      <Box id="projects" sx={{ backgroundColor: bgColor }}>
        <ProjectsSection />
      </Box>
      <Box id="achievements" sx={{ backgroundColor: bgColor }}>
        <AchievementsSection />
      </Box>
      <Box id="milestones" sx={{ backgroundColor: bgColor }}>
        <MilestonesSection />
      </Box>
      <Box id="contact" sx={{ backgroundColor: bgColor }}>
        <ContactSection />
      </Box>
    </Box>
  );
}

export default Portfolio;
