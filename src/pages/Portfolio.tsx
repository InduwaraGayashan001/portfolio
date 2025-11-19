import { Box, useTheme } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { MilestonesSection } from "../components/MilestonesSection";
import ContactSection from "../components/ContactSection";

function Portfolio() {
  const theme = useTheme();

  const bgColor1 =
    theme.palette.mode === "dark"
      ? "rgba(10, 10, 25, 0.85)"
      : "rgba(232, 232, 242, 0.85)";

  const bgColor2 =
    theme.palette.mode === "dark"
      ? "rgba(25, 10, 35, 0.85)"
      : "rgba(250, 245, 250, 0.85)";

  return (
    <Box>
      <Box sx={{ backgroundColor: bgColor1 }}>
        <HeroSection />
      </Box>
      <Box sx={{ backgroundColor: bgColor2 }}>
        <AboutSection />
      </Box>
      <Box sx={{ backgroundColor: bgColor1 }}>
        <SkillsSection />
      </Box>
      <Box sx={{ backgroundColor: bgColor2 }}>
        <ProjectsSection />
      </Box>
      <Box sx={{ backgroundColor: bgColor1 }}>
        <AchievementsSection />
      </Box>
      <Box sx={{ backgroundColor: bgColor2 }}>
        <MilestonesSection />
      </Box>
      <Box sx={{ backgroundColor: bgColor1 }}>
        <ContactSection />
      </Box>
    </Box>
  );
}

export default Portfolio;
